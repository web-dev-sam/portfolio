<script setup lang="ts">
import IconNuxt from '@/components/icons/IconNuxt.vue'
import BaseProjectPage from './BaseProjectPage.vue'
import TextBadge from '@/components/views/TextBadge.vue'
import IconTypeScript from '@/components/icons/IconTypeScript.vue'
import IconTailwind from '@/components/icons/IconTailwind.vue'
import { useTranslator } from '@/composables/useTranslator'

const { t, lang } = useTranslator({
  en: {
    diff: 'Tricky',
    solved: 'Problems Solved',
    chall: 'Challenges I ran into',
    next: "What I'd do differently next time",
  },
  de: {
    diff: 'Knifflig',
    solved: 'Gelöste Probleme',
    chall: 'Herausforderungen',
    next: 'Was würde ich anders machen',
  },
})
</script>

<template>
  <BaseProjectPage
    title="Planets Fact Site"
    githubLink="https://bitbucket.org/samuel-braun/nuxtjs-planets-fact-site/"
    githubName="Bitbucket"
    demoLink="https://planets.webry.com/"
  >
    <template #badges>
      <div class="flex gap-2">
        <TextBadge class="bg-light text-text">
          Stack
          <template #desc>
            <div class="flex items-center gap-2">
              <div class="w-4"><IconNuxt /></div>
              <div class="w-4"><IconTypeScript /></div>
              <div class="w-4"><IconTailwind /></div>
            </div>
          </template>
        </TextBadge>
        <TextBadge class="bg-medium text-white">{{ t('diff') }}</TextBadge>
      </div>
    </template>
    <template #description>
      <p v-if="lang === 'en'">
        This is an animated educational website about the planets in our solar system.
      </p>
      <p v-else>
        Dies ist eine animierte Bildungswebsite über die Planeten in unserem Sonnensystem.
      </p>
    </template>
    <template #content>
      <div>
        <h2 class="mb-2 text-body font-bold uppercase">{{ t('solved') }}</h2>
        <p class="max-w-[80ch] text-body text-muted">
          <span v-if="lang === 'en'">My boredom. 🙃</span>
          <span v-else>Meine Langeweile. 🙃</span>
        </p>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">{{ t('chall') }}</h2>
        <div class="max-w-[80ch] text-body text-muted">
          <span v-if="lang === 'en'">
            Animations!!! I wanted to animate the clouds of each planet and the stars in the
            background with a subtle parallax effect. Editing the SVGs to achieve this was a bit
            tricky.
          </span>
          <span v-else>
            Animationen!!! Ich wollte die Wolken jedes Planeten und die Sterne im Hintergrund mit
            einem subtilen Parallax-Effekt animieren. Das Bearbeiten der SVGs, um dies zu erreichen,
            war etwas knifflig.
          </span>
        </div>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">{{ t('next') }}</h2>
        <p class="max-w-[80ch] text-body text-muted">
          <span v-if="lang === 'en'">
            I would put more effort into optimizing the performance of the animations. Otherwise, I
            am happy with the result and the process.
          </span>
          <span v-else>
            Ich würde mehr Aufwand in die Leistungsoptimierung der Animationen stecken. Ansonsten
            bin ich mit dem Ergebnis und dem Prozess zufrieden.
          </span>
        </p>
      </div>
    </template>
  </BaseProjectPage>
</template>
