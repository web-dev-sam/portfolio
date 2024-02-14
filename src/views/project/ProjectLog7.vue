<script setup lang="ts">
import BaseProjectPage from './BaseProjectPage.vue'
import TextBadge from '@/components/views/TextBadge.vue'
import IconJavascript from '@/components/icons/IconJavascript.vue'
import { useTranslator } from '@/composables/useTranslator'
import { ref } from 'vue'

const imageModalVisible = ref(false)
const imageModalSrc = ref('')

const { t, lang } = useTranslator({
  en: {
    diff: 'Easy',
    solved: 'Problems Solved',
    chall: 'Challenges I ran into',
    next: "What I'd do differently next time",
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
    title="Log7 Glossary"
    githubLink="https://bitbucket.org/samuel-braun/technical-glossary/src/master/"
    githubName="Bitbucket"
    demoLink="https://glossary.webry.com/"
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
              <div class="w-4" tooltip="JavaScript"><IconJavascript /></div>
            </div>
          </template>
        </TextBadge>
        <TextBadge class="bg-easy text-white">{{ t('diff') }}</TextBadge>
      </div>
    </template>
    <template #description>
      <p v-if="lang === 'en'">
        This was a project for a university course to create a glossary for the fictional company
        Log7 with basic HTML, CSS and JavaScript.
      </p>
      <p v-else>
        Dies war ein Projekt für einen Universitätskurs, um ein Glossar für das fiktive Unternehmen
        Log7 mit grundlegendem HTML, CSS und JavaScript zu erstellen.
      </p>
    </template>
    <template #content>
      <div>
        <h2 class="mb-2 text-body font-bold uppercase">{{ t('solved') }}</h2>
        <p class="max-w-[80ch] text-body text-muted">
          <span v-if="lang === 'en'">
            The university course was about learning the basics of web development. This project is
            supposed to help a fictional company to keep track of technical terms and their
            meanings.
          </span>
          <span v-else>
            Der Universitätskurs behandelte die Grundlagen der Webentwicklung. Dieses Projekt soll
            einem fiktiven Unternehmen helfen, technische Begriffe und ihre Bedeutungen im Auge zu
            behalten.
          </span>
        </p>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">{{ t('chall') }}</h2>
        <div class="max-w-[80ch] text-body text-muted">
          <ul class="ml-0 list-outside list-none space-y-2 md:ml-8 md:list-disc">
            <li v-if="lang === 'en'">
              <strong>Emotional Damage:</strong> Not being allowed to use wonderful frameworks like
              Vue. 🥲
            </li>
            <li v-else>
              <strong>Emotional Damage:</strong> Ich durfte keine wunderbaren Frameworks wie Vue
              verwenden. 🥲
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">{{ t('next') }}</h2>
        <p class="max-w-[80ch] text-body text-muted">
          <span v-if="lang === 'en'">
            Put a timer on for the implementation to make it more challenging.
          </span>
          <span v-else>
            Einen Timer für die Implementierung nutzen, um das Projekt herausfordernder zu machen.
          </span>
        </p>
      </div>

      <div>
        <h2 class="mb-4 text-h4 font-bold">Gallery</h2>
        <div class="flex flex-wrap gap-4">
          <img
            src="/assets/projects/log7/gl1.jpg"
            alt="Screenshot 1"
            class="max-h-64 cursor-pointer rounded duration-150 hover:scale-[101%]"
            @click="openModal('/assets/projects/log7/gl1.jpg')"
          />
          <img
            src="/assets/projects/log7/gl2.jpg"
            alt="Screenshot 2"
            class="max-h-64 cursor-pointer rounded duration-150 hover:scale-[101%]"
            @click="openModal('/assets/projects/log7/gl2.jpg')"
          />
        </div>
      </div>
    </template>
  </BaseProjectPage>
</template>
