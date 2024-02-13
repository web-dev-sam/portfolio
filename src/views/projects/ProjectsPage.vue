<script setup lang="ts">
import IconAngular from '@/components/icons/IconAngular.vue'
import IconAstro from '@/components/icons/IconAstro.vue'
import IconNuxt from '@/components/icons/IconNuxt.vue'
import IconSass from '@/components/icons/IconSass.vue'
import IconSolid from '@/components/icons/IconSolid.vue'
import IconTailwind from '@/components/icons/IconTailwind.vue'
import IconTypeScript from '@/components/icons/IconTypeScript.vue'
import IconJavascript from '@/components/icons/IconJavascript.vue'
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
        link="/project/beat-timer"
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
        name="Webry"
        description="This is my blog all about the modern web."
        cover="/assets/projects/webry/cover.jpg"
        link="/project/webry"
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
          <TextBadge class="bg-easy text-white">Easy</TextBadge>
        </template>
      </ProjectCard>
      <ProjectCard
        name="BeatSaber Tournament Overlay"
        description="An streaming overlay for Beat Saber tournaments to display the players perspectives and their current score."
        cover="/assets/projects/webry/cover.jpg"
        link="/project/bs-tournament-overlay"
        class="flex-1"
      >
        <template #stack>
          <div class="flex items-center gap-2">
            <div class="w-4"><IconVue /></div>
            <div class="w-4"><IconTypeScript /></div>
          </div>
        </template>
        <template #difficulty>
          <TextBadge class="bg-hard text-white">Challenging</TextBadge>
        </template>
      </ProjectCard>

      <ProjectCard
        name="Planets"
        description="A beautifully animated website to explore the planets of our solar system."
        cover="/assets/projects/webry/cover.jpg"
        link="/project/planets"
        class="flex-1"
      >
        <template #stack>
          <div class="flex items-center gap-2">
            <div class="w-4"><IconNuxt /></div>
            <div class="w-4"><IconTypeScript /></div>
            <div class="w-4"><IconTailwind /></div>
          </div>
        </template>
        <template #difficulty>
          <TextBadge class="bg-medium text-white">Tricky</TextBadge>
        </template>
      </ProjectCard>
      <ProjectCard
        name="Dictionary"
        description="An accessible and easy to use english dictionary."
        cover="/assets/projects/webry/cover.jpg"
        link="/project/dictionary"
        class="flex-1"
      >
        <template #stack>
          <div class="flex items-center gap-2">
            <div class="w-4"><IconSolid /></div>
            <div class="w-4"><IconTypeScript /></div>
            <div class="w-4"><IconTailwind /></div>
          </div>
        </template>
        <template #difficulty>
          <TextBadge class="bg-easy text-white">Easy</TextBadge>
        </template>
      </ProjectCard>
      <ProjectCard
        name="Frac"
        description="A website to explore and save beautiful visual patterns of so-called mandelbrot and julia sets."
        cover="/assets/projects/frac/cover.png"
        link="/project/frac"
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
        name="ScoreSaber Leaderboard Extension"
        description="A browser extension for a leaderboard site of the popular VR game Beat Saber which adds some shortcuts to other related sites."
        cover="/assets/projects/webry/cover.jpg"
        link="/project/ss-leaderboard-extension"
        class="flex-1"
      >
        <template #stack>
          <div class="flex items-center gap-2">
            <div class="w-4"><IconJavascript /></div>
          </div>
        </template>
        <template #difficulty>
          <TextBadge class="bg-easy text-white">Easy</TextBadge>
        </template>
      </ProjectCard>
      <ProjectCard
        name="BeatStats"
        description="A twitch extension for displaying ranking statistics of the streamer's profile on ScoreSaber (A leaderboard site for the game Beat Saber)."
        cover="/assets/projects/webry/cover.jpg"
        link="/project/beat-stats"
        class="flex-1"
      >
        <template #stack>
          <div class="flex items-center gap-2">
            <div class="w-4"><IconJavascript /></div>
          </div>
        </template>
        <template #difficulty>
          <TextBadge class="bg-medium text-white">Tricky</TextBadge>
        </template>
      </ProjectCard>
      <ProjectCard
        name="Log7 Glossary"
        description="This was a project for a university course to create a glossary for the fictional company Log7 with basic HTML, CSS and JavaScript."
        cover="/assets/projects/webry/cover.jpg"
        link="/project/log7-glossary"
        class="flex-1"
      >
        <template #stack>
          <div class="flex items-center gap-2">
            <div class="w-4"><IconJavascript /></div>
          </div>
        </template>
        <template #difficulty>
          <TextBadge class="bg-easy text-white">Easy</TextBadge>
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
