<script setup lang="ts">
import { useTranslator } from '@/composables/useTranslator'
import IconVue from '@/components/icons/IconVue.vue'
import IconTailwind from '@/components/icons/IconTailwind.vue'
import IconTypeScript from '@/components/icons/IconTypeScript.vue'
import { yearsSince } from '@/utils/date'

const yearsExp = yearsSince(2018, 3)

const { t } = useTranslator({
  en: {
    hero: {
      webdev: 'Web Developer',
      intro:
        `Hi, I am Samuel. A passionate <span class="font-medium text-primary">fullstack</span> web developer with <span class="font-medium text-primary">${yearsExp} years</span> of experience.`,
    },
    stack: {
      more: 'see more',
    },
  },
  de: {
    hero: {
      webdev: 'Web Entwickler',
      intro:
        `Hey, ich bin Samuel. Ein leidenschaftlicher <span class="font-medium text-primary">Fullstack</span> Webentwickler mit <span class="font-medium text-primary">${yearsExp} Jahren</span> Erfahrung.`,
    },
    stack: {
      more: 'und mehr',
    },
  },
})
</script>

<template>
  <div class="text-center lg:text-left">
    <main class="my-24 flex">
      <div class="flex-1 space-y-6">
        <img
          class="inline-block aspect-square w-48 rounded-lg lg:hidden"
          src="/assets/branding/me.jpg"
          alt="Samuel Braun"
        />
        <h1 class="text-h1 font-bold">{{ t('hero.webdev') }}</h1>
        <p
          class="mx-auto max-w-[50ch] text-h6 text-balance text-muted lg:mx-0"
          v-html="t('hero.intro')"
        ></p>
        <h2 class="!lg:mt-32 mt-16! text-h6 font-bold">Main Stack</h2>
        <ul
          class="mx-auto flex max-w-[40ch] items-center justify-center gap-4 align-middle md:gap-6 lg:mx-0 lg:justify-start lg:gap-8"
        >
          <li class="min-w-8">
            <IconVue />
          </li>
          <li class="min-w-8">
            <IconTypeScript />
          </li>
          <li class="min-w-12">
            <IconTailwind />
          </li>
          <li class="text-muted">
            <router-link
              to="/skills"
              class="rounded-sm px-3 py-2 select-none hover:bg-light hover:text-text"
              >{{ t('stack.more') }}&hellip;</router-link
            >
          </li>
        </ul>
      </div>
      <div>
        <img
          class="hidden aspect-square h-96 rounded-lg select-none lg:block"
          src="/assets/branding/me.jpg"
          alt="Samuel Braun"
        />
      </div>
    </main>
  </div>
</template>
