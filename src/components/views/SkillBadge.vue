<script setup lang="ts">
defineProps<{
  title: string
  link: string
}>()
</script>

<template>
  <a
    :href="link"
    class="select-none group-hover:opacity-60"
    rel="noopener noreferrer"
    target="_blank"
  >
    <div
      class="group flex h-12 -translate-x-3 items-center justify-center gap-4 rounded-sm px-3 py-2 hover:bg-light md:justify-start"
    >
      <div class="flex max-h-8 w-8 justify-center">
        <slot />
      </div>
      <div class="text-left md:flex-1">
        {{ title }}
      </div>
    </div>
  </a>
</template>
