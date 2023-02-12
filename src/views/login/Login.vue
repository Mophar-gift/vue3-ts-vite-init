<template>
  <div class="login"></div>
</template>

<script setup lang="ts">
import { loginApi } from "@/service/api"
loginApi().then(res => {
  console.log(res)
})
</script>

<style lang="less" scoped>
.login {
}
</style>
