<template>
	<page-table ref="tableRef" rowKey="id" :formState="formState" :service="getUserList">
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
		<a-table-column key="name" title="姓名" data-index="name" width="120px">
			<template #default="{ text: name, record }">
				<a>{{ name }}（{{ record.id }}）</a>
			</template>
		</a-table-column>
		<a-table-column key="account" title="账号" data-index="account" width="150px" />
		<a-table-column key="sex" title="性别" data-index="sex" width="100px">
			<template #default="{ text: sex }">
				{{ sexDic.filter(sex) }}
			</template>
		</a-table-column>
		<a-table-column key="roles" title="角色" data-index="roles">
			<template #default="{ text: roles }">
				<a-tag v-for="role in roles" :key="role">{{ role }}</a-tag>
			</template>
		</a-table-column>
		<a-table-column title="操作" width="200px">
			<template #default>
				<a-button type="link" size="mini">详情</a-button>
				<a-button type="link" size="mini">编辑</a-button>
				<a-button type="link" size="mini">删除</a-button>
			</template>
		</a-table-column>
	</page-table>
</template>
<script setup>
import { ref, reactive, toRaw } from 'vue';
import { getUserList } from '@/api/user';
import { sexDic } from '@/utils/dictionary';

const tableRef = ref();
const formRef = ref();

const formState = reactive({
	user: '',
	code: '',
});

const onFinish = () => {
	tableRef.value.refresh({
		...toRaw(formState),
		pageNo: 1,
	});
};

const onReset = async () => {
	await formRef.value.resetFields();
	tableRef.value.refresh({ pageNo: 1 });
};

const onExport = () => {
	console.info('list.onExport');
};
</script>
<style lang="less" scoped></style>
