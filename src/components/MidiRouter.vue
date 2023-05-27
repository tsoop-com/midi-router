<script setup>
import MidiInput from './input.vue'
import { useMidi, stopAll } from "use-chromatone";
const { midi } = useMidi();

</script>

<template lang="pug">
.flex.gap-2.p-4
  button.p-2(@click="midi.playing = !midi.playing")
    .i-la-play(v-if="!midi.playing") PLAY
    .i-la-pause(v-else) PAUSE
  button.p-2(@click="stopAll()")
    .i-la-stop STOP
.flex.flex-wrap.gap-4.justify-center
  midi-input(
    v-for="(input, iid) in midi.inputs"
    :key="iid"
    :input="input" 
    :iid="iid"
    )
</template>

<style lang="postcss" scoped></style>
