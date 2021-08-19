<template>
  <a-table
    size="middle"
    ref="tableRef"
    :scroll="scroll"
    :loading="loading"
    :rowKey="props.rowKey"
    :row-selection="props.rowSelection"
    :pagination="pagination"
    :data-source="dataSource"
    @change="onChange"
    bordered
  >
    <template #title>
      <slot name="form" />
    </template>
    <slot />
  </a-table>
</template>
<script setup>
import { defineProps, defineExpose, ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useRequest } from 'vue-request';

const props = defineProps({
  rowSelection: Object,
  service: Function,
  scroll: Object,
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

let formState = {};

const route = useRoute();
const router = useRouter();

const tableRef = ref();

const scroll = ref(props.scroll);

const pageNo = ref(parseInt(route.query.pageNo ?? 1));
const pageSize = ref(parseInt(route.query.pageSize ?? 20));
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

    router.replace({
      query: {
        pageNo: pageNo.value,
        pageSize: pageSize.value,
      },
    });

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
  if (isNaN(excessHeight)) excessHeight = 270;
  scroll.value = { ...scroll.value, y: `calc(100vh - ${excessHeight}px)` };
});

defineExpose({
  refresh: (data) => {
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
<style lang="less" scoped>
.ant-table-wrapper :deep(.ant-table-body) {
  height: 100vh;
}
</style>
