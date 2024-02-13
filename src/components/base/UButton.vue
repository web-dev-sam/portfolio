<script setup lang="ts">
const {
  variant = 'primary',
  to,
  type = 'link',
} = defineProps<{
  variant: 'primary' | 'ghost'
  to: string
  type: 'link' | 'button'
}>()
</script>

<template>
  <a
    v-if="type === 'link'"
    :href="to"
    class="rounded border-2 px-2 py-1.5 text-small"
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
    v-else
    class="rounded border-2 px-2 py-1.5 text-small"
    :class="{
      'border-text bg-text text-white hover:opacity-85': variant === 'primary',
      'bg-transparent border border-text text-text hover:opacity-85': variant === 'ghost',
    }"
  >
    <slot />
  </button>
</template>
