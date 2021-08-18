<template>
	<a-table
		size="middle"
		ref="tableRef"
		:scroll="scroll"
		:loading="loading"
		:rowKey="props.rowKey"
		:pagination="pagination"
		:data-source="dataSource"
		@change="onChange"
		bordered
	>
		<template #title>
			<slot name="title"></slot>
		</template>
		<slot />
	</a-table>
</template>
<script setup>
import { defineProps, defineExpose, ref, nextTick, computed, onMounted } from 'vue';
import { useRequest } from 'vue-request';

const props = defineProps({
	service: Function,
	rowKey: {
		type: String,
		default: 'key',
	},
	replaceFields: {
		type: Object,
		default: {
			pageNo: 'pageNo',
			pageSize: 'pageSize',
			total: 'total',
			list: 'list',
		},
	},
});

const tableRef = ref();

const scroll = ref({});
const pageNo = ref(1);
const pageSize = ref(20);
const total = ref(0);

const {
	data: dataSource,
	loading,
	run,
} = useRequest(props.service, {
	defaultParams: [
		{
			pageNo: pageNo.value,
			pageSize: pageSize.value,
		},
	],
	formatResult: (res) => {
		if (!res) return [];
		pageNo.value = res[props.replaceFields.pageNo];
		pageSize.value = res[props.replaceFields.pageSize];
		total.value = res[props.replaceFields.total];
		return res[props.replaceFields.list];
	},
});

const pagination = computed(() => {
	return {
		showSizeChanger: true,
		showQuickJumper: true,
		pageSizeOptions: ['10', '20', '30', '40', '50'],
		showTotal: (total) => `共 ${total} 条数据`,
		total: total.value,
		current: pageNo.value,
		pageSize: pageSize.value,
	};
});

let formState = null;

const onChange = ({ current, pageSize }) => {
	run({
		pageNo: current,
		pageSize: pageSize,
		...formState,
	});
};

onMounted(() => {
	if (!tableRef) return;
	const $el = tableRef.value.$el;
	const $title = $el.getElementsByClassName('ant-table-title');
	let excessHeight = 270;
	if ($title.length) excessHeight += $title[0].offsetHeight;
	const height = `calc(100vh - ${excessHeight}px)`;
	const $body = $el.getElementsByClassName('ant-table-body');
	if ($body.length) {
		nextTick(() => {
			$body[0].style.height = height;
		});
	}

	scroll.value = { y: height };
});

defineExpose({
	refresh: (data = {}) => {
		formState = {};
		Object.entries(data).forEach(([key, value]) => {
			if (value) formState[key] = value;
		});

		run({
			pageNo: pageNo.value,
			pageSize: pageSize.value,
			...formState,
		});

		delete formState.pageNo;
		delete formState.pageSize;
	},
});
</script>
<style lang="less" scoped></style>
