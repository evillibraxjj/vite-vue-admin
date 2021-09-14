<template>
  <a-tag v-for="role in roles" :key="role">{{ role }}</a-tag>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  defaultData: [String, Array],
});
const roles = ref([]);

if (props.defaultData instanceof Array) roles.value = props.defaultData;
else roles.value = props.defaultData.split(',').filter((e) => !!e);
</script>
