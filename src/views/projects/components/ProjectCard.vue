<script setup lang="ts">
import UButton from '@/components/base/UButton.vue'
import TextBadge from '@/components/views/TextBadge.vue'

const props = defineProps<{
  class: string
  description: string
  name: string
  cover: string
  link: string
}>()
</script>

<template>
  <router-link
    :to="props.link"
    class="pointer-events-none -mx-8 block rounded-sm p-8 pb-0 hover:bg-white md:pointer-events-auto md:pb-8 md:hover:bg-light"
  >
    <div class="flex flex-col gap-4 md:flex-row md:gap-8">
      <div class="flex justify-center md:justify-start">
        <img class="h-32 min-h-32 w-32 min-w-32 rounded-sm object-cover" :src="cover" />
      </div>
      <div :class="props.class">
        <div class="mb-4 flex flex-col gap-2 md:flex-row">
          <h2 class="flex-1 text-h4 font-bold">{{ props.name }}</h2>
          <div class="flex items-center justify-center gap-2 md:justify-start">
            <TextBadge class="bg-light text-text">
              Stack
              <template #desc>
                <slot name="stack" />
              </template>
            </TextBadge>
            <slot name="difficulty" />
          </div>
        </div>
        <p class="mx-auto max-w-[60ch] text-muted md:mx-0">
          {{ props.description }}
        </p>
      </div>
    </div>
  </router-link>
  <div class="mb-8 md:hidden">
    <router-link :to="props.link" class="block text-center md:text-left">
      <UButton variant="primary" type="visual">Read more</UButton>
    </router-link>
  </div>
</template>
