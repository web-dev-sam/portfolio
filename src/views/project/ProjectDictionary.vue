<script setup lang="ts">
import { ref } from 'vue'
import IconSolid from '@/components/icons/IconSolid.vue'
import IconTailwind from '@/components/icons/IconTailwind.vue'
import IconTypeScript from '@/components/icons/IconTypeScript.vue'
import TextBadge from '@/components/views/TextBadge.vue'
import { useTranslator } from '@/composables/useTranslator'
import BaseProjectPage from './BaseProjectPage.vue'

const imageModalVisible = ref(false)
const imageModalSrc = ref('')

const { t, lang } = useTranslator({
  en: {
    diff: 'Easy',
    solved: 'Problems Solved',
    chall: 'Challenges I ran into',
    next: 'What I\'d do differently next time',
  },
  de: {
    diff: 'Einfach',
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
    title="Dictionary"
    github-link="https://bitbucket.org/samuel-braun/solidjs-dictionary/"
    github-name="Bitbucket"
    demo-link="https://dictionary.webry.com/"
    :image-modal-visible="imageModalVisible"
    :image-modal-src="imageModalSrc"
    @modal-close="imageModalVisible = false"
  >
    <template #badges>
      <div class="flex gap-2">
        <TextBadge class="bg-light text-text">
          Stack
          <template #desc>
            <div class="flex items-center gap-2">
              <div class="w-4" tooltip="SolidJS (React-like)">
                <IconSolid />
              </div>
              <div class="w-4" tooltip="TypeScript">
                <IconTypeScript />
              </div>
              <div class="w-4" tooltip="TailwindCSS">
                <IconTailwind />
              </div>
            </div>
          </template>
        </TextBadge>
        <TextBadge class="bg-easy text-white">
          {{ t('diff') }}
        </TextBadge>
      </div>
    </template>
    <template #description>
      <p v-if="lang === 'en'">
        This is a dictionary web app built with SolidJS. It allows users to search for the meaning
        of words and also provides the pronunciation and synonyms of the word.
      </p>
      <p v-else>
        Dies ist eine englische Wörterbuch-Web-App, die mit SolidJS erstellt wurde. Benutzer können
        nach der Bedeutung von Wörtern suchen und erhalten auch die Aussprache und Synonyme des
        Wortes.
      </p>
    </template>
    <template #content>
      <div>
        <h2 class="mb-2 text-body font-bold uppercase">
          {{ t('solved') }}
        </h2>
        <p class="max-w-[80ch] text-body text-muted">
          <span v-if="lang === 'en'"> My boredom. 🙃 </span>
          <span v-else> Meine Langeweile. 🙃 </span>
        </p>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">
          {{ t('next') }}
        </h2>
        <p class="max-w-[80ch] text-body text-muted">
          <span v-if="lang === 'en'">
            I'd try to think of useful features to make the mini project more challenging.
          </span>
          <span v-else>
            Ich würde versuchen mehr nützliche Funktionen hinzuzufügen um das Mini-Projekt
            herausfordernder zu gestalten.
          </span>
        </p>
      </div>

      <div>
        <h2 class="mb-4 text-h4 font-bold">
          Gallery
        </h2>
        <div class="flex flex-wrap gap-4">
          <img
            src="/assets/projects/dict/dt1.jpg"
            alt="Screenshot 1"
            class="max-h-64 cursor-pointer rounded-sm duration-150 hover:scale-[101%]"
            @click="openModal('/assets/projects/dict/dt1.jpg')"
          >
          <img
            src="/assets/projects/dict/dt2.jpg"
            alt="Screenshot 2"
            class="max-h-64 cursor-pointer rounded-sm duration-150 hover:scale-[101%]"
            @click="openModal('/assets/projects/dict/dt2.jpg')"
          >
          <img
            src="/assets/projects/dict/dt3.jpg"
            alt="Screenshot 3"
            class="max-h-64 cursor-pointer rounded-sm duration-150 hover:scale-[101%]"
            @click="openModal('/assets/projects/dict/dt3.jpg')"
          >
          <img
            src="/assets/projects/dict/dt4.jpg"
            alt="Screenshot 4"
            class="max-h-64 cursor-pointer rounded-sm duration-150 hover:scale-[101%]"
            @click="openModal('/assets/projects/dict/dt4.jpg')"
          >
        </div>
      </div>
    </template>
  </BaseProjectPage>
</template>
