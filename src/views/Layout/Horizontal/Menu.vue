<template>
  <a-menu v-model:selectedKeys="selectedKeys" @select="onSelectMenu" mode="horizontal">
    <template v-for="item in routes" :key="item.name">
      <a-menu-item>
        <template #icon>
          <component :is="item.meta.icon || 'BarsOutlined'" />
        </template>
        {{ item.meta.title }}
      </a-menu-item>
    </template>
  </a-menu>
</template>
<script setup>
import { watch, ref, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const routes = inject('routes');

const selectedKeys = ref([]);

watch(route, ({ matched }) => {
  selectedKeys.value = [];
  if (matched.length < 2) return;
  const name = matched[1].name;
  selectedKeys.value = [name];
});

const onSelectMenu = ({ key: name }) => router.push({ name });
</script>
<style lang="less" scoped>
.ant-menu-horizontal {
  border-bottom: 0px;
}
.ant-menu {
  flex: 1;
  :deep(.ant-menu-item) {
    padding: 0px 30px;
  }
}
</style>
