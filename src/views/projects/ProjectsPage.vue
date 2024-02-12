<script setup lang="ts">
import IconAngular from '@/components/icons/IconAngular.vue'
import IconAstro from '@/components/icons/IconAstro.vue'
import IconSass from '@/components/icons/IconSass.vue'
import IconTailwind from '@/components/icons/IconTailwind.vue'
import IconTypeScript from '@/components/icons/IconTypeScript.vue'
import IconVue from '@/components/icons/IconVue.vue'
import TextBadge from '@/components/views/TextBadge.vue'
import { useTranslator } from '@/composables/useTranslator'
import ProjectCard from '@/views/projects/components/ProjectCard.vue'

const { t } = useTranslator({
  en: {},
  de: {},
})
</script>

<template>
  <main class="mb-16 text-center md:text-left">
    <h1 class="!lg:my-32 !my-16 text-center text-h3 font-bold">Projects</h1>
    <section class="flex flex-col gap-4">
      <ProjectCard
        name="Beat Timer"
        description="A web application for rythm game level creators to perfectly sync their audio with the game as easily as possible."
        cover="/assets/projects/beat-timer/cover.png"
        class="flex-1"
      >
        <template #stack>
          <div class="flex items-center gap-2">
            <div class="w-4"><IconVue /></div>
            <div class="w-4"><IconTypeScript /></div>
            <div class="w-4"><IconTailwind /></div>
          </div>
        </template>
        <template #difficulty>
          <TextBadge class="bg-[#9333ea] text-white">Hardcore</TextBadge>
        </template>
      </ProjectCard>
      <ProjectCard
        name="Frac"
        description="A website to explore and save beautiful visual patterns of so-called mandelbrot and julia sets."
        cover="/assets/projects/frac/cover.png"
        class="flex-1"
      >
        <template #stack>
          <div class="flex items-center gap-2">
            <div class="w-4"><IconAngular /></div>
            <div class="w-4"><IconTypeScript /></div>
            <div class="w-4"><IconSass /></div>
          </div>
        </template>
        <template #difficulty>
          <TextBadge class="bg-[#dc2626] text-white">Challenging</TextBadge>
        </template>
      </ProjectCard>
      <ProjectCard
        name="Webry"
        description="This is my blog all about the modern web."
        cover="/assets/projects/webry/cover.jpg"
        class="flex-1"
      >
        <template #stack>
          <div class="flex items-center gap-2">
            <div class="w-4"><IconAstro /></div>
            <div class="w-4"><IconTypeScript /></div>
            <div class="w-4"><IconTailwind /></div>
          </div>
        </template>
        <template #difficulty>
          <TextBadge class="bg-[#16a34a] text-white">Easy</TextBadge>
          <!-- <TextBadge class="bg-[#f98f16] text-white">Tricky</TextBadge>-->
        </template>
      </ProjectCard>
    </section>
  </main>
</template>

<style scoped>
svg {
  @apply max-h-8 max-w-8;
}
</style>
