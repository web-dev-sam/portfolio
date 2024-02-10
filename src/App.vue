<script setup lang="ts">
import PageHeader from './components/base/PageHeader.vue'
</script>

<template>
  <div class="container px-4 text-center font-sans text-text lg:text-left">
    <PageHeader />
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
