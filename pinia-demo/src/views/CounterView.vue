<template>
  <div>
    <h1>Counter View: {{ counterStore.counter }}</h1>
    <b-button variant="outline-primary" @click="counterStore.incrementBy(1)">+1</b-button>
    <b-button variant="outline-primary" @click="counterStore.incrementBy(2)">+2</b-button>
    <b-button variant="outline-primary" @click="counterStore.incrementBy(5)">+5</b-button>
    <b-button
      variant="outline-primary"
      @click="counterStore.decrementBy(1)"
      :disabled="counterStore.counter == 0"
      >-1</b-button
    >
  </div>
</template>


<script lang="ts" setup>
import { useCounterStore } from "../stores/counter";

const counterStore = useCounterStore();
</script>