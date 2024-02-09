<script setup lang="ts">
import { computed, type WritableComputedRef } from 'vue'
import { useI18n } from 'vue-i18n'
import IconLinkedIn from './components/icons/IconLinkedIn.vue'
import IconDevTo from './components/icons/IconDevTo.vue'
import IconGitHub from './components/icons/IconGitHub.vue'
import IconTailwind from './components/icons/IconTailwind.vue'
import IconCSS3 from './components/icons/IconCSS3.vue'
import IconHTML5 from './components/icons/IconHTML5.vue'
import IconTypeScript from './components/icons/IconTypeScript.vue'
import IconVue from './components/icons/IconVue.vue'
import IconVercel from './components/icons/IconVercel.vue'

const { t, locale: lcl } = useI18n({
  messages: {
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
    },
  },
})

const { lang, setLang } = useLanguage(lcl)
const langFlag = computed(() => `/assets/flags/${lang.value === 'en' ? 'de' : 'en'}.svg`)

function useLanguage(locale: WritableComputedRef<'en' | 'de'>) {
  const browserLang = navigator.language.slice(0, 2)
  const localStorageLang = localStorage.getItem('lang') as 'en' | 'de' | null
  if (localStorageLang) {
    locale.value = localStorageLang
  } else {
    if (browserLang === 'de') {
      locale.value = 'de'
    } else {
      locale.value = 'en'
    }
  }

  return {
    lang: locale,
    setLang: (lang: 'en' | 'de') => {
      locale.value = lang
    },
  }
}
</script>

<template>
  <div class="container px-4 text-center font-sans text-text lg:text-left">
    <header class="py-8">
      <ul class="flex items-center justify-between gap-8 leading-10">
        <li>
          <a routerLink="/">
            <img src="/assets/branding/logo.svg" width="40" alt="Logo" />
          </a>
        </li>
        <li class="hidden flex-1 md:block"></li>
        <li>
          <a
            class="hover:opacity-60 font-medium"
            href="https://github.com/web-dev-sam?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ t('header.projects') }}
          </a>
        </li>
        <li>
          <a
            class="hover:opacity-60 font-medium"
            href="https://webry.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ t('header.blog') }}
          </a>
        </li>
        <li>
          <a
            class="hover:opacity-60 font-medium"
            href="mailto:office.samigo.a@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ t('header.contact') }}
          </a>
        </li>
        <li>
          <button
            class="flex h-full items-center"
            @click="() => setLang(lang === 'en' ? 'de' : 'en')"
            :aria-label="lang === 'en' ? 'Deutsch' : 'English'"
            :title="lang === 'en' ? 'Deutsch' : 'English'"
          >
            <img :src="langFlag" width="32" height="32" />
          </button>
        </li>
      </ul>
    </header>
    <main class="my-24 flex">
      <div class="flex-1 space-y-6">
        <img
          class="inline-block aspect-square w-48 rounded-lg lg:hidden"
          src="/assets/branding/me.jpg"
          alt="Samuel Braun"
        />
        <h1 class="text-h1 font-bold">{{ t('hero.webdev') }}</h1>
        <p class="text-muted mx-auto max-w-[50ch] text-balance text-h6 lg:mx-0">
          {{ t('hero.intro') }}
          <span class="font-medium text-primary">{{ t('hero.highlight') }}</span
          >{{ t('hero.intro2') }}
        </p>
        <h2 class="!lg:mt-32 !mt-16 text-h6 font-medium">Main Stack</h2>
        <ul class="flex justify-center gap-4 md:gap-6 align-middle lg:justify-start lg:gap-8 max-w-[40ch] mx-auto lg:mx-0">
          <li>
            <IconHTML5 />
          </li>
          <li>
            <IconCSS3 />
          </li>
          <li>
            <IconTailwind />
          </li>
          <li class="flex-1"></li>
          <li>
            <IconTypeScript />
          </li>
          <li>
            <IconVue />
          </li>
          <li class="flex-1"></li>
          <li>
            <IconVercel />
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
      <ul class="mt-8 mb-16 flex justify-center gap-8">
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

<style scoped></style>
