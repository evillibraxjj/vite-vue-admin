<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="handlerClick">
    count is: {{ state.count }}
  </button>
</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });

const handlerClick = () => {
  state.count++;
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
