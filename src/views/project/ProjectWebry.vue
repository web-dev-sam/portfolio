<script setup lang="ts">
import BaseProjectPage from './BaseProjectPage.vue'
import TextBadge from '@/components/views/TextBadge.vue'
import IconAstro from '@/components/icons/IconAstro.vue'
import IconTypeScript from '@/components/icons/IconTypeScript.vue'
import IconTailwind from '@/components/icons/IconTailwind.vue'
import { useTranslator } from '@/composables/useTranslator'

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
</script>

<template>
  <BaseProjectPage
    title="Webry"
    githubLink="https://github.com/web-dev-sam/blog"
    demoLink="https://www.webry.com/"
  >
    <template #badges>
      <div class="flex gap-2">
        <TextBadge class="bg-light text-text">
          Stack
          <template #desc>
            <div class="flex items-center gap-2">
              <div class="w-4"><IconAstro /></div>
              <div class="w-4"><IconTypeScript /></div>
              <div class="w-4"><IconTailwind /></div>
            </div>
          </template>
        </TextBadge>
        <TextBadge class="bg-easy text-white">{{ t('diff') }}</TextBadge>
      </div>
    </template>
    <template #description>
      <p v-if="lang === 'en'">This is my blog all about the modern web.</p>
      <p v-else>Dies ist mein Blog rund um das moderne Web.</p>
    </template>
    <template #content>
      <div>
        <h2 class="mb-2 text-body font-bold uppercase">{{ t('solved') }}</h2>
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
        <h2 class="mb-2 text-body font-bold uppercase">{{ t('chall') }}</h2>
        <div class="max-w-[80ch] text-body text-muted">
          <ul class="ml-4 list-inside list-disc space-y-2">
            <li v-if="lang === 'en'">Learning Astro.</li>
            <li v-else>Das Erlernen von Astro.</li>
            <li v-if="lang === 'en'">Optimizing SEO.</li>
            <li v-else>SEO optimieren.</li>
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
        <h2 class="mb-2 text-body font-bold uppercase">{{ t('next') }}</h2>
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
    </template>
  </BaseProjectPage>
</template>
