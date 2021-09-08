<template>
  <router-view :key="routerKey" v-slot="{ Component }">
    <keep-alive>
      <component v-if="route.meta.keepAlive" :is="Component" />
    </keep-alive>
    <component v-if="!route.meta.keepAlive" :is="Component" />
  </router-view>
</template>

<script setup>
import { inject } from 'vue';
import { useRoute } from 'vue-router';

const routerKey = inject('routerKey');
const route = useRoute();
</script>
