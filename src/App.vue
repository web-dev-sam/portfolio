<script setup lang="ts">
import PageHeader from './components/base/PageHeader.vue'
import PageFooter from './components/base/PageFooter.vue'
</script>

<template>
  <div class="container px-4 font-sans text-text">
    <div class="flex min-h-[100lvh] flex-col">
      <PageHeader />
      <router-view></router-view>
      <span class="flex-1"></span>
      <PageFooter />
    </div>
  </div>
</template>

<style scoped></style>
