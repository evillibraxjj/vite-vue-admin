<template>
  <span v-if="readOnly">{{ data.map[props.value] }}</span>
</template>

<script setup>
import dictionary from '@/utils/dictionary.js';
const props = defineProps({
  value: [String, Number, Boolean],
  type: String,
  readOnly: Boolean,
});

const data = dictionary[props.type];
console.info('data', data.map);
</script>

<style></style>
