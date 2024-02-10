<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
  link: string
}>()
</script>

<template>
  <div class="flex md:justify-start justify-center h-12 items-center gap-4 rounded px-3 py-2 -translate-x-3 hover:bg-light cursor-pointer group">
    <div class="max-h-8 w-8">
      <slot />
    </div>
    <div>
      <a :href="link" class="group-hover:opacity-60 select-none">{{ props.title }}</a>
    </div>
  </div>
</template>
