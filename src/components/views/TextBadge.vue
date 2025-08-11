<script setup lang="ts">
import { useSlots } from 'vue'

const slots = useSlots()
</script>

<template>
  <div
    class="group flex w-fit items-center justify-center gap-2 rounded-sm px-2 py-1.5 text-small md:justify-start"
  >
    <div>
      <slot />
    </div>
    <div v-if="slots.desc" class="h-4 border-r border-[#dedede]" />
    <div v-if="slots.desc">
      <slot name="desc" />
    </div>
  </div>
</template>
