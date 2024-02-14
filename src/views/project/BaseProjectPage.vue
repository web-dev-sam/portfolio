<script setup lang="ts">
import { useTranslator } from '@/composables/useTranslator'
import TextBadge from '@/components/views/TextBadge.vue'
import IconGitHub from '@/components/icons/IconGitHub.vue'
import UButton from '@/components/base/UButton.vue'

const props = defineProps<{
  title: string
  githubLink: string
  demoLink: string
  githubName: string
}>()

const { t } = useTranslator({
  en: {
    project: 'Project',
    demo: 'Open Live Demo',
  },
  de: {
    project: 'Projekt',
    demo: 'Zur Webseite',
  },
})
</script>

<template>
  <main class="!lg:my-32 !my-16 space-y-8 text-center leading-normal md:text-left">
    <div>
      <span class="text-body uppercase text-muted">{{ t('project') }}</span>
      <div class="flex items-center justify-between">
        <h1 class="text-h1 font-bold">{{ props.title }}</h1>
        <div>
          <slot name="badges" />
        </div>
      </div>
      <div class="text-body text-muted">
        <slot name="description" />
      </div>
    </div>

    <div class="flex gap-2">
      <UButton variant="ghost" :to="githubLink" type="link">{{ githubName }}</UButton>
      <UButton variant="primary" :to="demoLink" type="link">{{ t('demo') }}</UButton>
    </div>

    <div class="!mt-16 space-y-8">
      <slot name="content" />
    </div>

    <h2 class="!mt-16 hidden text-h4 font-bold">Gallery</h2>
    <slot name="gallery" />
  </main>
</template>

<style scoped></style>
