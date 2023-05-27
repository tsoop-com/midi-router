<script setup>
const props = defineProps({
  id: { type: String, default: '' },
  name: { type: String, default: '' },
  manufacturer: { type: String, default: '' },
})
</script>

<template lang='pug'>
.p-2
  .text-xs.font-mono {{ id }}
  .text-xl {{ name }}
  .text-sm {{ manufacturer }}
</template>