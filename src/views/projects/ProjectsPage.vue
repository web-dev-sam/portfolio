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
import ProjectCard from '@/views/projects/components/ProjectCard.vue'
import { useTranslator } from '@/composables/useTranslator'

const { t, lang } = useTranslator({
  en: {
    projects: 'Projects',
    easy: 'Easy',
    medium: 'Tricky',
    hard: 'Challenging',
    extreme: 'Hardcore',
  },
  de: {
    projects: 'Projekte',
    easy: 'Einfach',
    medium: 'Knifflig',
    hard: 'Herausfordernd',
    extreme: 'Hardcore',
  },
})
</script>

<template>
  <main class="mb-16 text-center md:text-left">
    <h1 class="!lg:my-32 my-16! text-center text-h3 font-bold">{{ t('projects') }}</h1>
    <section class="flex flex-col gap-4">
      <ProjectCard
        name="Beat Timer"
        :description="
          lang === 'en'
            ? `A web application for rythm game level creators to perfectly sync their audio with the game as easily as possible.`
            : `Eine Webanwendung für Level-Ersteller von Rhythmusspielen, die dabei hilft, Audiodateien so einfach wie möglich perfekt mit dem Spiel zu synchronisieren.`
        "
        cover="/assets/projects/beat-timer/cover.png"
        link="/project/beat-timer"
        class="flex-1"
      >
        <template #stack>
          <div class="flex items-center gap-2">
            <div class="w-4" tooltip="Vue"><IconVue /></div>
            <div class="w-4" tooltip="TypeScript"><IconTypeScript /></div>
            <div class="w-4" tooltip="TailwindCSS"><IconTailwind /></div>
          </div>
        </template>
        <template #difficulty>
          <TextBadge class="bg-extreme text-white">{{ t('extreme') }}</TextBadge>
        </template>
      </ProjectCard>
      <ProjectCard
        name="Webry"
        :description="
          lang === 'en'
            ? `This is my blog all about the modern web.`
            : `Dies ist mein Blog rund um das moderne Web.`
        "
        cover="/assets/projects/webry/cover.jpg"
        link="/project/webry"
        class="flex-1"
      >
        <template #stack>
          <div class="flex items-center gap-2">
            <div class="w-4" tooltip="Astro"><IconAstro /></div>
            <div class="w-4" tooltip="TypeScript"><IconTypeScript /></div>
            <div class="w-4" tooltip="TailwindCSS"><IconTailwind /></div>
          </div>
        </template>
        <template #difficulty>
          <TextBadge class="bg-easy text-white">{{ t('easy') }}</TextBadge>
        </template>
      </ProjectCard>
      <ProjectCard
        name="Frac"
        :description="
          lang === 'en'
            ? `A website for exploring beautiful visual patterns of so-called mandelbrot and julia sets.`
            : `Eine Website zum Erkunden schöner visueller Muster sogenannter Mandelbrot- und Julia-Mengen.`
        "
        cover="/assets/projects/frac/fr2.jpg"
        link="/project/frac"
        class="flex-1"
      >
        <template #stack>
          <div class="flex items-center gap-2">
            <div class="w-4" tooltip="Angular"><IconAngular /></div>
            <div class="w-4" tooltip="TypeScript"><IconTypeScript /></div>
            <div class="w-4" tooltip="SCSS"><IconSass /></div>
          </div>
        </template>
        <template #difficulty>
          <TextBadge class="bg-hard text-white">{{ t('hard') }}</TextBadge>
        </template>
      </ProjectCard>
      <ProjectCard
        name="BeatSaber Tournament Overlay"
        :description="
          lang === 'en'
            ? `An streaming overlay for Beat Saber tournaments to display the players perspectives and their current score.`
            : `Ein Streaming-Overlay für Beat Saber Turniere, um die Perspektiven der Spieler und ihren aktuellen Punktestand anzuzeigen.`
        "
        cover="/assets/projects/bsto/bsto1.jpg"
        link="/project/bs-tournament-overlay"
        class="flex-1"
      >
        <template #stack>
          <div class="flex items-center gap-2">
            <div class="w-4" tooltip="Vue"><IconVue /></div>
            <div class="w-4" tooltip="TypeScript"><IconTypeScript /></div>
          </div>
        </template>
        <template #difficulty>
          <TextBadge class="bg-hard text-white">{{ t('hard') }}</TextBadge>
        </template>
      </ProjectCard>

      <ProjectCard
        name="Planets"
        :description="
          lang === 'en'
            ? `A beautifully animated website to explore the planets of our solar system.`
            : `Dies ist eine animierte Bildungswebsite über die Planeten in unserem Sonnensystem.`
        "
        cover="/assets/projects/planets/pl4.jpg"
        link="/project/planets"
        class="flex-1"
      >
        <template #stack>
          <div class="flex items-center gap-2">
            <div class="w-4" tooltip="Nuxt"><IconNuxt /></div>
            <div class="w-4" tooltip="TypeScript"><IconTypeScript /></div>
            <div class="w-4" tooltip="TailwindCSS"><IconTailwind /></div>
          </div>
        </template>
        <template #difficulty>
          <TextBadge class="bg-medium text-white">{{ t('medium') }}</TextBadge>
        </template>
      </ProjectCard>
      <ProjectCard
        name="Dictionary"
        :description="
          lang === 'en'
            ? `This is a dictionary web app built with SolidJS.`
            : `Dies ist eine englische Wörterbuch-Web-App, die mit SolidJS erstellt wurde.`
        "
        cover="/assets/projects/dict/dt2.jpg"
        link="/project/dictionary"
        class="flex-1"
      >
        <template #stack>
          <div class="flex items-center gap-2">
            <div class="w-4" tooltip="SolidJS (React-like)"><IconSolid /></div>
            <div class="w-4" tooltip="TypeScript"><IconTypeScript /></div>
            <div class="w-4" tooltip="TailwindCSS"><IconTailwind /></div>
          </div>
        </template>
        <template #difficulty>
          <TextBadge class="bg-easy text-white">{{ t('easy') }}</TextBadge>
        </template>
      </ProjectCard>
      <ProjectCard
        name="BeatStats"
        :description="
          lang === 'en'
            ? `A twitch extension for displaying ranking statistics of the streamer's profile on ScoreSaber (A leaderboard site for the game Beat Saber).`
            : `Eine Twitch-Erweiterung zum Anzeigen von Ranglistenstatistiken des Streamer-Profils auf ScoreSaber (einem online Leaderboard für das Spiel Beat Saber).`
        "
        cover="/assets/projects/bss/bss1.jpg"
        link="/project/beat-stats"
        class="flex-1"
      >
        <template #stack>
          <div class="flex items-center gap-2">
            <div class="w-4" tooltip="JavaScript"><IconJavascript /></div>
          </div>
        </template>
        <template #difficulty>
          <TextBadge class="bg-medium text-white">{{ t('medium') }}</TextBadge>
        </template>
      </ProjectCard>
      <ProjectCard
        name="ScoreSaber Leaderboard Extension"
        :description="
          lang === 'en'
            ? `A browser extension for a leaderboard site of the popular VR game Beat Saber.`
            : `Eine Browser-Erweiterung für eine Leaderboard-Website des beliebten VR-Spiels Beat Saber.`
        "
        cover="/assets/projects/bse/be1.jpg"
        link="/project/ss-leaderboard-extension"
        class="flex-1"
      >
        <template #stack>
          <div class="flex items-center gap-2">
            <div class="w-4" tooltip="JavaScript"><IconJavascript /></div>
          </div>
        </template>
        <template #difficulty>
          <TextBadge class="bg-easy text-white">{{ t('easy') }}</TextBadge>
        </template>
      </ProjectCard>

      <ProjectCard
        name="Log7 Glossary"
        :description="
          lang === 'en'
            ? `This was a project for a university course to create a glossary for the fictional company Log7 with basic HTML, CSS and JavaScript.`
            : `Dies war ein Projekt für einen Universitätskurs, um ein Glossar für das fiktive Unternehmen Log7 mit grundlegendem HTML, CSS und JavaScript zu erstellen.`
        "
        cover="/assets/projects/log7/gl3.jpg"
        link="/project/log7-glossary"
        class="flex-1"
      >
        <template #stack>
          <div class="flex items-center gap-2">
            <div class="w-4" tooltip="JavaScript"><IconJavascript /></div>
          </div>
        </template>
        <template #difficulty>
          <TextBadge class="bg-easy text-white">{{ t('easy') }}</TextBadge>
        </template>
      </ProjectCard>
    </section>
  </main>
</template>

<style scoped>
svg {
  max-width: 2rem;
  max-height: 2rem;
}
</style>
