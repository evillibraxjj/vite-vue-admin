<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>

<script setup>
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import locale from 'ant-design-vue/es/locale/zh_CN';

const route = useRoute();
const router = useRouter();
watch(route, (val) => {
  //判断是否刷新页面 跳转到首页添加重新向
  if (val.name) return;
  router.push('/?replace=' + encodeURIComponent(val.fullPath));
});

defineExpose({
  route,
});
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #eee;
}
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 6px;
  background: none;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(133, 133, 133, 0.3);
}
</style>
