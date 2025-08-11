<script setup lang="ts">
import { useRouter } from 'vue-router'
import PageFooter from './components/base/PageFooter.vue'
import PageHeader from './components/base/PageHeader.vue'

const router = useRouter()
</script>

<template>
  <div v-if="router.currentRoute.value.name !== 'ext'" class="container mx-auto px-4 font-sans text-text">
    <div class="flex min-h-lvh flex-col">
      <PageHeader />
      <router-view />
      <span class="flex-1" />
      <PageFooter />
    </div>
  </div>
  <div v-else>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
