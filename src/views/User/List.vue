<template>
  <page-table
    ref="tableRef"
    rowKey="id"
    v-model:formState="formState"
    :row-selection="rowSelection"
    :service="getUserList"
  >
    <template #form>
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
          <a-button type="primary" v-action="'export'" @click="onExport">导出</a-button>
          <slot />
        </a-space>
      </a-form>
    </template>
    <a-table-column title="姓名" data-index="name" width="240px">
      <template #default="{ text: name, record }">
        <a>{{ name }}（{{ record.id }}）</a>
      </template>
    </a-table-column>
    <a-table-column title="账号" data-index="account" width="150px" />
    <a-table-column key="sex" title="性别" data-index="sex" width="100px">
      <template #default="{ text }">
        <Dictionary :value="text" type="sex" readOnly />
      </template>
    </a-table-column>
    <a-table-column title="角色" data-index="roles">
      <template #default="{ text: roles }">
        <TagList :defaultData="roles" />
      </template>
    </a-table-column>
    <a-table-column title="操作" width="200px">
      <template #default>
        <a-space>
          <a-button size="small" v-action="'see'">详情</a-button>
          <a-button size="small" v-action="'update'">编辑</a-button>
          <a-button size="small" v-action="'delect'">删除</a-button>
        </a-space>
      </template>
    </a-table-column>
  </page-table>
</template>
<script setup>
import { ref, reactive } from 'vue';
import { getUserList } from '@/api/user';

const tableRef = ref();
const formRef = ref();

const formState = reactive({
  user: '',
  code: '',
});

const rowSelection = reactive({
  selectedRowKeys: [],
  onChange: (selectedRowKeys) => {
    rowSelection.selectedRowKeys = selectedRowKeys;
  },
});

const onFinish = (values) => {
  tableRef.value.refresh({
    ...values,
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
