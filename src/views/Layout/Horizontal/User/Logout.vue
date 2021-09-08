<template>
  <span @click="onClickLogout">退出登录</span>
</template>

<script setup>
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { createVNode, inject } from 'vue';
import { useRouter } from 'vue-router';
import { Modal } from 'ant-design-vue';
const router = useRouter();
const userInfo = inject('userInfo');

const onClickLogout = () => {
  Modal.confirm({
    title: '确定退出登录？',
    icon: createVNode(ExclamationCircleOutlined),
    okText: '取消',
    okButtonProps: {
      type: 'primary',
    },
    cancelText: '确定',
    cancelButtonProps: {
      type: 'primary',
      danger: true,
    },
    onCancel() {
      userInfo.value = null;
      localStorage.removeItem('token');
      router.push({ name: 'login' });
    },
  });
};
</script>
