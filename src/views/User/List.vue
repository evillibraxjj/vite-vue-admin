<template>
	<a-table
		size="middle"
		ref="tableRef"
		rowKey="id"
		:columns="columns"
		:data-source="dataSource"
		:scroll="scroll"
		:pagination="pagination"
		:loading="loading"
		@change="onChange"
		bordered
	>
		<template #title>
			<a-form ref="formRef" :model="formState" layout="inline" @finish="onFinish">
				<a-form-item name="user">
					<a-input v-model:value="formState.user" placeholder="查询姓名" />
				</a-form-item>
				<a-form-item name="code">
					<a-input v-model:value="formState.code" placeholder="查询工号" />
				</a-form-item>
				<a-space>
					<a-button type="primary" html-type="submit">查询</a-button>
					<a-button @click="onReset">重置</a-button>
					<a-button type="primary" @click="onExport">导出</a-button>
				</a-space>
			</a-form>
		</template>
		<template #name="{ text, record }">
			<a>{{ text }}（{{ record.id }}）</a>
		</template>
		<template #sex="{ text }">
			{{ sexDic.filter(text) }}
		</template>
		<template #roles="{ text }">
			<a-tag v-for="item in text" :key="item">{{ item }}</a-tag>
		</template>
	</a-table>
</template>
<script setup>
import { ref, reactive, toRaw } from 'vue';
import usePageTable from '@/hooks/usePageTable';
import { sexDic } from '@/utils/dictionary';
import { getUserList } from '@/api/user';

const columns = [
	{
		title: '姓名',
		dataIndex: 'name',
		slots: {
			customRender: 'name',
		},
	},
	{
		title: '账号',
		dataIndex: 'account',
	},
	{
		title: '性别',
		dataIndex: 'sex',
		slots: {
			customRender: 'sex',
		},
	},
	{
		title: '角色',
		dataIndex: 'roles',
		slots: {
			customRender: 'roles',
		},
	},
];

const tableRef = ref();
const formRef = ref();

const formState = reactive({
	user: '',
	code: '',
});

const {
	scroll,
	loading,
	pagination,
	data: dataSource,
	run,
} = usePageTable(getUserList, {
	ref: tableRef,
});

const onFinish = () => {
	run({
		...toRaw(formState),
		pageNo: 1,
	});
};

const onReset = () => {
	formRef.value.resetFields();
	onFinish();
};

const onChange = (pag) => {
	run({
		pageNo: pag.current,
		pageSize: pag.pageSize,
		...toRaw(formState),
	});
};

const onExport = () => {
	console.info('list.onExport');
};
</script>
<style lang="less" scoped></style>
