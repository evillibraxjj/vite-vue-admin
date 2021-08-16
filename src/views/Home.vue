<template>
  <div>{{ userInfo }}</div>
  <div>{{ routes }}</div>
</template>

<script setup>
import { inject } from "vue";

const userInfo = inject("userInfo");
const routes = inject("routes");
</script>
