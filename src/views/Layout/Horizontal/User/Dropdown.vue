<template>
  <a-dropdown v-if="userInfo" :trigger="['click']">
    <a-button type="link">
      {{ userInfo.name }}
      <DownOutlined />
    </a-button>
    <template #overlay>
      <a-menu>
        <a-menu-item> <UserInfo /> </a-menu-item>
        <a-menu-item> 修改密码 </a-menu-item>
        <a-menu-divider />
        <a-menu-item> <Logout /> </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script setup>
import { inject } from 'vue';

import UserInfo from './UserInfo.vue';
import Logout from './Logout.vue';

const userInfo = inject('userInfo');
</script>
