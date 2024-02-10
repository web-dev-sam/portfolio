<script setup lang="ts">
import { useTranslator } from '@/composables/useTranslator'
import IconGitHub from '@/components/icons/IconGitHub.vue'
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue'
import IconDevTo from '@/components/icons/IconDevTo.vue'
import IconVue from '@/components/icons/IconVue.vue'
import IconTailwind from '@/components/icons/IconTailwind.vue'
import IconTypeScript from '@/components/icons/IconTypeScript.vue'

const { t } = useTranslator({
  en: {
    header: {
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      webdev: 'Web Developer',
      intro: 'Hi, I am Samuel. A passionate ',
      highlight: 'frontend',
      intro2: ' web developer with over 5 years of experience.',
    },
    stack: {
      more: 'see more...',
    },
  },
  de: {
    header: {
      projects: 'Projekte',
      blog: 'Blog',
      contact: 'Kontakt',
    },
    hero: {
      webdev: 'Web Entwickler',
      intro: 'Hey, ich bin Samuel. Ein leidenschaftlicher ',
      highlight: 'Frontend ',
      intro2: 'Webentwickler mit mehr als 5 Jahren Erfahrung.',
    },
    stack: {
      more: 'und mehr...',
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
        <p class="mx-auto max-w-[50ch] text-balance text-h6 text-muted lg:mx-0">
          {{ t('hero.intro') }}
          <span class="font-medium text-primary">{{ t('hero.highlight') }}</span
          >{{ t('hero.intro2') }}
        </p>
        <h2 class="!lg:mt-32 !mt-16 text-h6 font-medium">Main Stack</h2>
        <ul
          class="mx-auto flex max-w-[40ch] items-center justify-center gap-4 align-middle md:gap-6 lg:mx-0 lg:justify-start lg:gap-8"
        >
          <li>
            <IconVue />
          </li>
          <li>
            <IconTypeScript />
          </li>
          <li>
            <IconTailwind />
          </li>
          <li class="text-muted">
            <router-link to="/skills" class="hover:text-text">{{ t('stack.more') }}</router-link>
          </li>
        </ul>
      </div>
      <div>
        <img
          class="hidden aspect-square h-96 rounded-lg lg:block"
          src="/assets/branding/me.jpg"
          alt="Samuel Braun"
        />
      </div>
    </main>
    <section>
      <h2 class="!lg:mt-32 !mt-16 text-center text-h4 font-bold">Socials</h2>
      <ul class="mb-16 mt-8 flex justify-center gap-8">
        <li>
          <a
            class="hover:opacity-85"
            href="https://github.com/web-dev-sam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGitHub />
          </a>
        </li>
        <li>
          <a
            class="hover:opacity-85"
            href="https://www.linkedin.com/in/samuel-braun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconLinkedIn />
          </a>
        </li>
        <li>
          <a
            class="hover:opacity-85"
            href="https://dev.to/samuel-braun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconDevTo />
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>
