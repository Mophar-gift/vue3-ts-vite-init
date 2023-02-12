<template>
  <div class="dashboard">
    <h2>counter: {{ counterStore.counter }}</h2>
    <h2>counter: {{ counterStore.doubleCounter }}</h2>
    <button @click="changeCounter(400)">change counter</button>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from "@/stores/counter"
const counterStore = useCounterStore()

const changeCounter = (newNum: number) => {
  counterStore.changeCounterAction(newNum)
}
</script>

<style lang="less" scoped>
.dashboard {
}
</style>
