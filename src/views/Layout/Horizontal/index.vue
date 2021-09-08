<template>
  <component
    style="font-size: 18px"
    :is="collapsed ? 'menu-unfold-outlined' : 'menu-fold-outlined'"
    @click="() => (collapsed = !collapsed)"
  />
  <HorizontalMenu />
  <UserDropdown />
</template>

<script setup>
import { inject } from 'vue';

import HorizontalMenu from './Menu.vue';
import UserDropdown from './User/Dropdown.vue';

const collapsed = inject('collapsed');
</script>

<style></style>
