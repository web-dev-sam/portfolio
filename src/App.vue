<script setup lang="ts">
import PageHeader from './components/base/PageHeader.vue'
</script>

<template>
  <div class="container px-4 font-sans text-text">
    <PageHeader />
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
