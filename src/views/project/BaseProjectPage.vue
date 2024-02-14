<script setup lang="ts">
import { useTranslator } from '@/composables/useTranslator'
import UButton from '@/components/base/UButton.vue'

const props = defineProps<{
  title: string
  githubLink: string
  demoLink: string
  githubName: string
  imageModalVisible: boolean
  imageModalSrc: string
}>()

const { t } = useTranslator({
  en: {
    project: 'Project',
    demo: 'Open Live Demo',
    back: 'Back',
  },
  de: {
    project: 'Projekt',
    demo: 'Zur Webseite',
    back: 'Zurück',
  },
})
</script>

<template>
  <main class="!lg:mb-32 !mb-16 space-y-8 text-center leading-normal md:text-left">
    <a
      @click="$router.go(-1)"
      to="/projects"
      class="mt-4 hidden cursor-pointer rounded bg-light px-4 py-2 text-small text-muted hover:opacity-85 md:inline-block"
      type="link"
    >
      {{ t('back') }}
    </a>

    <div>
      <span class="-mb-2 mt-4 inline-block text-body uppercase text-muted">{{ t('project') }}</span>
      <div class="-mt-2 flex flex-col items-center justify-between md:flex-row">
        <h1 class="text-h1 font-bold">{{ props.title }}</h1>
        <div>
          <slot name="badges" />
        </div>
      </div>
      <div class="mt-4 text-body text-muted md:mt-0">
        <slot name="description" />
      </div>
    </div>

    <div class="flex justify-center gap-2 md:justify-start">
      <UButton variant="ghost" :to="githubLink" type="link">{{ githubName }}</UButton>
      <UButton variant="primary" :to="demoLink" type="link">{{ t('demo') }}</UButton>
    </div>

    <div class="!mt-16 space-y-8">
      <slot name="content" />
    </div>

    <h2 class="!mt-16 hidden text-h4 font-bold">Gallery</h2>
    <slot name="gallery" />
    <div>
      <div
        v-if="imageModalVisible"
        class="bg-black fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-[#000] bg-opacity-50 backdrop-blur-sm"
        @click="$emit('modal-close')"
      >
        <img :src="imageModalSrc" class="max-h-[90vh] max-w-[90vw] rounded" />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
