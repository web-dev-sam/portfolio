<script setup lang="ts">
import { ref } from 'vue'
import IconAstro from '@/components/icons/IconAstro.vue'
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
    title="Webry"
    github-link="https://github.com/web-dev-sam/blog"
    github-name="GitHub"
    demo-link="https://www.old.webry.com/"
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
              <div class="w-4" tooltip="Astro">
                <IconAstro />
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
        This is my blog all about the modern web.
      </p>
      <p v-else>
        Dies ist mein Blog rund um das moderne Web.
      </p>
    </template>
    <template #content>
      <div>
        <h2 class="mb-2 text-body font-bold uppercase">
          {{ t('solved') }}
        </h2>
        <p class="max-w-[80ch] text-body text-muted">
          <span v-if="lang === 'en'">
            With the blog, I want to share my knowledge and experiences in hopes of helping other
            developers solve problems that I have already run into.
          </span>
          <span v-else>
            Mit dem Blog möchte ich mein Wissen und meine Erfahrungen teilen, in der Hoffnung, dass
            ich anderen Entwicklern helfen kann, Probleme zu lösen, die ich bereits hatte.
          </span>
        </p>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">
          {{ t('chall') }}
        </h2>
        <div class="max-w-[80ch] text-body text-muted">
          <ul class="ml-0 list-outside list-none space-y-2 md:ml-8 md:list-disc">
            <li v-if="lang === 'en'">
              Learning Astro.
            </li>
            <li v-else>
              Das Erlernen von Astro.
            </li>
            <li v-if="lang === 'en'">
              Optimizing SEO.
            </li>
            <li v-else>
              SEO optimieren.
            </li>
            <li v-if="lang === 'en'">
              Writing articles in an enganging, applicable and informative way.
            </li>
            <li v-else>
              Artikel auf eine ansprechende, anwendbare und informative Weise zu schreiben.
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">
          {{ t('next') }}
        </h2>
        <p class="max-w-[80ch] text-body text-muted">
          <span v-if="lang === 'en'">
            Nothing. I am happy with the result and the process. I would just love to write more
            articles.
          </span>
          <span v-else>
            Nichts. Ich bin mit dem Ergebnis und dem Prozess zufrieden. Ich würde nur gerne mehr
            Artikel schreiben.
          </span>
        </p>
      </div>

      <div>
        <h2 class="mb-4 text-h4 font-bold">
          Gallery
        </h2>
        <div class="flex flex-wrap gap-4">
          <img
            src="/assets/projects/webry/wb1.jpg"
            alt="Screenshot 1"
            class="max-h-64 cursor-pointer rounded-sm duration-150 hover:scale-[101%]"
            @click="openModal('/assets/projects/webry/wb1.jpg')"
          >
          <img
            src="/assets/projects/webry/wb2.jpg"
            alt="Screenshot 2"
            class="max-h-64 cursor-pointer rounded-sm duration-150 hover:scale-[101%]"
            @click="openModal('/assets/projects/webry/wb2.jpg')"
          >
          <img
            src="/assets/projects/webry/wb3.jpg"
            alt="Screenshot 3"
            class="max-h-64 cursor-pointer rounded-sm duration-150 hover:scale-[101%]"
            @click="openModal('/assets/projects/webry/wb3.jpg')"
          >
          <img
            src="/assets/projects/webry/wb4.jpg"
            alt="Screenshot 4"
            class="max-h-64 cursor-pointer rounded-sm duration-150 hover:scale-[101%]"
            @click="openModal('/assets/projects/webry/wb4.jpg')"
          >
        </div>
      </div>
    </template>
  </BaseProjectPage>
</template>
