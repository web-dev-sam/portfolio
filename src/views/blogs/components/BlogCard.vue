<script setup lang="ts">
import UButton from '@/components/base/UButton.vue'
import TextBadge from '@/components/views/TextBadge.vue'
import { useTranslator } from '@/composables/useTranslator'

const props = withDefaults(
  defineProps<{
    class?: string
    description: string
    name: string
    cover: string
    link: string
    date: string
  }>(),
  {
    class: '',
  },
)

const { t } = useTranslator({
  en: {
    readMore: 'Read more',
  },
})
</script>

<template>
  <div>
    <router-link
      :to="props.link"
      class="pointer-events-none -mx-8 block rounded-sm p-8 pb-0 hover:bg-white md:pointer-events-auto md:pb-8 md:hover:bg-light"
    >
      <div class="flex flex-col gap-8 md:flex-row md:gap-8">
        <div :class="props.class">
          <div class="mb-8 flex flex-col gap-4 md:flex-row">
            <h2 class="flex-1 text-h4 font-bold">{{ props.name }}</h2>
            <div class="flex items-center justify-center md:justify-start">
              <TextBadge class="bg-light text-text">{{ props.date }}</TextBadge>
            </div>
          </div>
          <p class="mx-auto text-muted md:mx-0">
            <img
              class="float-none mx-auto w-96 max-w-full rounded-sm object-cover md:float-left md:mr-8 md:max-w-96"
              :src="cover"
            />
            <span class="mt-8 inline-block md:inline">
              {{ props.description }}
              <router-link
                :to="props.link"
                class="ml-2 hidden text-text hover:opacity-60 md:inline-block"
              >
                {{ t('readMore') }}&hellip;
              </router-link>
            </span>
          </p>
        </div>
      </div>
    </router-link>
    <div class="mb-8 md:hidden">
      <router-link :to="props.link" class="mt-8 block text-center md:text-left">
        <UButton variant="primary" type="visual">{{ t('readMore') }}</UButton>
      </router-link>
    </div>
  </div>
</template>
