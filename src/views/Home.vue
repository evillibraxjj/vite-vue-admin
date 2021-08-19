<template>
	<div>{{ userInfo }}</div>
	<div class="routes" @click="color = 'blue'">{{ routes }}</div>
</template>

<script setup>
import { inject, ref } from 'vue';

const userInfo = inject('userInfo');
const routes = inject('routes');

const color = ref('red');
</script>

<style lang="less" scoped>
.routes {
	color: v-bind(color);
}
</style>
