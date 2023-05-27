<script setup>

import { useMidi } from 'use-chromatone'
import MidiDevice from './MidiDevice.vue';

const { midi } = useMidi()

</script>

<template lang="pug">
.p-4
  .p-2.flex.flex-col.gap-4
    template(v-for="(input,iid) in midi.inputs" 
      :key="iid" )
      MidiDevice(
        v-bind="input"
        :id="iid"
        )
</template>

<style scoped></style>
