<script setup lang="ts">
import IconNuxt from '@/components/icons/IconNuxt.vue'
import BaseProjectPage from './BaseProjectPage.vue'
import TextBadge from '@/components/views/TextBadge.vue'
import IconTypeScript from '@/components/icons/IconTypeScript.vue'
import IconTailwind from '@/components/icons/IconTailwind.vue'
import { useTranslator } from '@/composables/useTranslator'
import { ref } from 'vue'

const imageModalVisible = ref(false)
const imageModalSrc = ref('')

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

function openModal(src: string) {
  imageModalSrc.value = src
  imageModalVisible.value = !imageModalVisible.value
}
</script>

<template>
  <BaseProjectPage
    title="Planets Fact Site"
    githubLink="https://bitbucket.org/samuel-braun/nuxtjs-planets-fact-site/"
    githubName="Bitbucket"
    demoLink="https://planets.webry.com/"
    :imageModalVisible="imageModalVisible"
    :imageModalSrc="imageModalSrc"
    @modal-close="imageModalVisible = false"
  >
    <template #badges>
      <div class="flex gap-2">
        <TextBadge class="bg-light text-text">
          Stack
          <template #desc>
            <div class="flex items-center gap-2">
              <div class="w-4" tooltip="NuxtJS"><IconNuxt /></div>
              <div class="w-4" tooltip="TypeScript"><IconTypeScript /></div>
              <div class="w-4" tooltip="TailwindCSS"><IconTailwind /></div>
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

      <div>
        <h2 class="mb-4 text-h4 font-bold">Gallery</h2>
        <div class="flex flex-wrap gap-4">
          <img
            src="/assets/projects/planets/pl1.jpg"
            alt="Screenshot 1"
            class="max-h-64 cursor-pointer rounded duration-150 hover:scale-[101%]"
            @click="openModal('/assets/projects/planets/pl1.jpg')"
          />
          <img
            src="/assets/projects/planets/pl2.jpg"
            alt="Screenshot 2"
            class="max-h-64 cursor-pointer rounded duration-150 hover:scale-[101%]"
            @click="openModal('/assets/projects/planets/pl2.jpg')"
          />
          <img
            src="/assets/projects/planets/pl3.jpg"
            alt="Screenshot 3"
            class="max-h-64 cursor-pointer rounded duration-150 hover:scale-[101%]"
            @click="openModal('/assets/projects/planets/pl3.jpg')"
          />
          <img
            src="/assets/projects/planets/pl4.jpg"
            alt="Screenshot 4"
            class="max-h-64 cursor-pointer rounded duration-150 hover:scale-[101%]"
            @click="openModal('/assets/projects/planets/pl4.jpg')"
          />
        </div>
      </div>
    </template>
  </BaseProjectPage>
</template>
