<template>
  <span @click="visible = true"> 个人资料 </span>
  <a-drawer title="个人资料" placement="right" width="50vw" :visible="visible" @close="visible = false">
    <a-descriptions :column="2" :labelStyle="{ width: '80px' }" bordered>
      <a-descriptions-item label="ID">{{ userInfo.id }}</a-descriptions-item>
      <a-descriptions-item label="账号">{{ userInfo.account }}</a-descriptions-item>
      <a-descriptions-item label="姓名">{{ userInfo.name }}</a-descriptions-item>
      <a-descriptions-item label="性别">
        <Dictionary v-model:value="userInfo.sex" type="sex" readOnly />
      </a-descriptions-item>
      <a-descriptions-item label="角色">
        <TagList :defaultData="userInfo.roles" />
      </a-descriptions-item>
    </a-descriptions>
  </a-drawer>
</template>

<script setup>
import { ref, inject } from 'vue';

const userInfo = inject('userInfo');

const visible = ref(false);
</script>

<style></style>
