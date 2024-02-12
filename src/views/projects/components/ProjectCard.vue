<script setup lang="ts">
import { defineProps } from 'vue'
import TextBadge from '@/components/views/TextBadge.vue'

const props = defineProps<{
  class: string
  description: string
  name: string
  cover: string
}>()
</script>

<template>
  <router-link to="/" class="-mx-8 block rounded p-8 hover:bg-light">
    <div class="flex gap-8">
      <div>
        <img
          class="h-32 w-32 rounded object-cover"
          :src="cover"
        />
      </div>
      <div :class="props.class">
        <div class="mb-4 flex">
          <h2 class="flex-1 text-h4 font-bold">{{ props.name }}</h2>
          <div class="flex items-center gap-2">
            <TextBadge class="bg-light text-text">
              Stack
              <template #desc>
                <slot name="stack" />
              </template>
            </TextBadge>
            <slot name="difficulty" />
          </div>
        </div>
        <p class="mb-8 text-muted max-w-[60ch]">
          {{ props.description }}
        </p>
      </div>
    </div>
  </router-link>
</template>
