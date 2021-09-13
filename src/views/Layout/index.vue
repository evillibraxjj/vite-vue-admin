<template>
  <a-spin :spinning="loading" tip="用户资料加载中...">
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <Sider />
      </a-layout-sider>
      <a-layout>
        <a-layout-header>
          <Horizontal />
        </a-layout-header>
        <a-layout-content>
          <LayoutBreadcrumb />
          <div class="router-view">
            <KeepRouterView />
          </div>
        </a-layout-content>
        <a-layout-footer>{{ copyright }}</a-layout-footer>
      </a-layout>
    </a-layout>
  </a-spin>
</template>
<script setup>
import { ref, watch, provide } from 'vue';
import useLoadUserInfo from '@/hooks/useLoadUserInfo';

import Horizontal from './Horizontal/index.vue';
import Sider from './Sider/index.vue';
import LayoutBreadcrumb from './LayoutBreadcrumb.vue';

const copyright = import.meta.env.VITE_COPYRIGHT;

const routerKey = ref(new Date().getTime());
provide('routerKey', routerKey);

const collapsed = ref(localStorage.getItem('collapsed') === 'true');
watch(collapsed, (val) => localStorage.setItem('collapsed', val));
provide('collapsed', collapsed);

const { loading } = useLoadUserInfo();
</script>

<style lang="less" scoped>
.ant-layout {
  height: 100vh;
  background: #fff;
  > .ant-layout-header {
    user-select: none;
    background: #fff;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  > .ant-layout-sider {
    user-select: none;
  }
  > .ant-layout-content {
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    border-radius: 8px;
    border: 5px solid #eee;
    background: #fff;
    > .router-view {
      flex: 1;
      padding-left: 10px;
      padding-right: 4px;
      border-top: 10px solid #fff;
      border-bottom: 10px solid #fff;
      background: #fff;
      overflow-y: scroll;
    }
  }
  > .ant-layout-footer {
    user-select: none;
    text-align: left;
    padding: 5px;
    background: #fff;
  }
}
</style>
