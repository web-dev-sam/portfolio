<script setup lang="ts">
const {
  variant = 'primary',
  to = '',
  type = 'link',
} = defineProps<{
  variant: 'primary' | 'ghost'
  to?: string
  type: 'link' | 'button' | 'visual'
}>()
</script>

<template>
  <a
    v-if="type === 'link'"
    :href="to"
    class="rounded-sm border-2 px-2 py-1.5 text-small"
    :class="{
      'border-text bg-text text-white hover:opacity-85': variant === 'primary',
      'bg-transparent border border-text text-text hover:opacity-85': variant === 'ghost',
    }"
    :target="to.startsWith('http') ? '_blank' : undefined"
    :rel="to.startsWith('http') ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </a>
  <button
    v-else-if="type === 'button'"
    class="rounded-sm border-2 px-2 py-1.5 text-small"
    :class="{
      'border-text bg-text text-white hover:opacity-85': variant === 'primary',
      'bg-transparent border border-text text-text hover:opacity-85': variant === 'ghost',
    }"
  >
    <slot />
  </button>
  <div
    v-else
    class="inline-block cursor-pointer rounded-sm border-2 px-2 py-1.5 text-small"
    :class="{
      'border-text bg-text text-white hover:opacity-85': variant === 'primary',
      'bg-transparent border border-text text-text hover:opacity-85': variant === 'ghost',
    }"
  >
    <slot />
  </div>
</template>
