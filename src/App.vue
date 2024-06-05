<script setup lang="ts">
import PageHeader from './components/base/PageHeader.vue'
import PageFooter from './components/base/PageFooter.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
console.log(router.currentRoute.value.name)
</script>

<template>
  <div class="container px-4 font-sans text-text" v-if="router.currentRoute.value.name !== 'ext'">
    <div class="flex min-h-[100lvh] flex-col">
      <PageHeader />
      <router-view></router-view>
      <span class="flex-1"></span>
      <PageFooter />
    </div>
  </div>
  <div v-else>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
