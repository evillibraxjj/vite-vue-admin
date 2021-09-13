<template>
  <Logo />
  <a-menu
    mode="inline"
    theme="dark"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    @select="onSelectMenu"
  >
    <a-menu-item key="home">
      <template #icon>
        <HomeOutlined />
      </template>
      首页
    </a-menu-item>
    <template v-for="item in siderList" :key="item.key">
      <template v-if="!item.children">
        <a-menu-item :key="item.name">
          <template #icon>
            <component :is="item.meta.icon || 'BarsOutlined'" />
          </template>
          {{ item.meta.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <SubMenu :menu-info="item" :key="item.name" />
      </template>
    </template>
  </a-menu>
</template>
<script setup>
import { watch, computed, ref, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Logo from './Logo.vue';
import SubMenu from './SubMenu.vue';

const route = useRoute();
const router = useRouter();

const routes = inject('routes');

const selectedKeys = ref([route.name]);
const openKeys = ref([]);

let cacheList = [];
const siderList = computed(() => {
  const matched = route.matched;
  if (matched.length < 2) return [];
  const findRoute = routes.value.find((e) => e.name == matched[1].name);
  if (!findRoute) return cacheList;
  cacheList = findRoute.children ?? [];
  return cacheList;
});

watch(route, ({ name, matched }) => {
  selectedKeys.value = [name];
  openKeys.value = [...new Set([...openKeys.value, ...matched.map((e) => e.name)])];
});

const onSelectMenu = ({ key: name }) => router.push({ name });
</script>

<style lang="less" scoped>
.ant-menu {
  height: calc(100% - 70px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0px;
  }
  &.ant-menu-inline-collapsed {
    :deep(.ant-menu-submenu-selected) {
      border-bottom: 1px solid #1890ff;
    }
  }
}
</style>
