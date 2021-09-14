<template>
  <span v-if="readOnly">{{ dictionary[props.type].map[props.value] }}</span>
</template>

<script setup>
import dictionary from '@/utils/dictionary.js';
const props = defineProps({
  value: [String, Number, Boolean],
  type: String,
  readOnly: Boolean,
});
</script>

<style></style>
