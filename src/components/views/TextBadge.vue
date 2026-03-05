<script setup lang="ts">
import { useSlots } from 'vue'

const slots = useSlots()
const props = defineProps<{
  class: string
}>()
</script>

<template>
  <div
    :class="`group flex w-fit items-center justify-center gap-2 rounded-sm px-2 py-1.5 text-small md:justify-start ${props.class}`"
  >
    <div>
      <slot />
    </div>
    <div v-if="slots.desc" class="h-4 border-r border-[#dedede]"></div>
    <div v-if="slots.desc">
      <slot name="desc" />
    </div>
  </div>
</template>
