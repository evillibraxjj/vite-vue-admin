<template>
  <a-sub-menu v-if="menuInfo" :key="menuInfo.name">
    <template #icon>
      <component :is="menuInfo.meta.icon || 'BarsOutlined'" />
    </template>
    <template #title>{{ menuInfo.meta.title }}</template>
    <template v-for="item in menuInfo.children" :key="item.name">
      <template v-if="item.children && item.children.length">
        <sub-menu :menu-info="item" :key="item.key" />
      </template>
      <template v-else>
        <a-menu-item :key="item.name">
          <template #icon>
            <component :is="item.meta.icon || 'BarsOutlined'" />
          </template>
          {{ item.meta.title }}
        </a-menu-item>
      </template>
    </template>
  </a-sub-menu>
</template>

<script setup>
defineProps({
  menuInfo: Object,
});
</script>
<style lang="less" scoped></style>
