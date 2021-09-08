<template>
  <div class="logo" @click="visible = true" />
  <a-drawer
    title="公司列表"
    placement="left"
    :visible="visible"
    :closable="false"
    :headerStyle="{
      position: 'sticky',
      top: ' 0px',
      background: '#fff',
      zIndex: 2,
    }"
    @close="visible = false"
    destroyOnClose
  >
    <a-list item-layout="horizontal" :data-source="data">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          >
            <template #title>
              <a href="https://www.antdv.com/">{{ item.title }}</a>
            </template>
            <template #avatar>
              <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </a-drawer>
</template>

<script setup>
import { ref } from 'vue';
const visible = ref(false);
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 5',
  },
  {
    title: 'Ant Design Title 6',
  },
  {
    title: 'Ant Design Title 7',
  },
  {
    title: 'Ant Design Title 8',
  },
  {
    title: 'Ant Design Title 9',
  },
];
</script>

<style lang="less" scoped>
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
}
.logo-drawer {
  :deep(.ant-drawer-header) {
    position: sticky;
    top: 0px;
  }
}
</style>
