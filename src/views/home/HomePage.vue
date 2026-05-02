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
      role: 'Fullstack Web Developer',
      intro:
        `I'm a passionate <span class="font-medium text-primary">fullstack</span> web developer with <span class="font-medium text-primary">${yearsExp} years</span> of experience.`,
    },
    stack: {
      more: 'see more',
    },
    philosophy: {
      label: 'My Approach',
      quote: `<span class="font-medium text-primary">Good software is honest</span> — it says what it does, grows without friction, and is shaped around the problem it solves, not the technology behind it.`,
    },
  },
  de: {
    hero: {
      role: 'Fullstack Web Entwickler',
      intro:
        `Ich bin ein leidenschaftlicher <span class="font-medium text-primary">Fullstack</span> Webentwickler mit <span class="font-medium text-primary">${yearsExp} Jahren</span> Erfahrung.`,
    },
    stack: {
      more: 'und mehr',
    },
    philosophy: {
      label: 'Mein Ansatz',
      quote: `<span class="font-medium text-primary">Gute Software ist ehrlich</span> — sie tut, was sie sagt, wächst ohne Reibung und ist um das Problem herum gebaut, das sie löst — nicht um die Technologie dahinter.`,
    },
  },
})
</script>

<template>
  <span class="flex-1"></span>
  <main class="my-16 flex flex-col gap-16 text-center lg:flex-row lg:items-start lg:gap-24 lg:text-left">
    <div class="flex flex-col gap-5 lg:flex-1">
      <p class="text-overline tracking-widest text-primary">{{ t('hero.role') }}</p>
      <h1 class="text-h1 font-bold -mb-4">Samuel Braun</h1>
      <p
        class="mx-auto max-w-[38ch] text-h6 text-balance lg:mx-0"
        v-html="t('hero.intro')"
      ></p>
      <ul class="mx-auto flex items-center justify-center gap-6 lg:mx-0 lg:justify-start">
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
    <div class="flex flex-col gap-5 lg:flex-1 lg:text-right">
      <p class="text-overline tracking-widest text-primary">{{ t('philosophy.label') }}</p>
      <p class="text-h5 italic mt-8" v-html="t('philosophy.quote')"></p>
    </div>
  </main>
</template>
