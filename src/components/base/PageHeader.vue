<script setup lang="ts">
import { computed } from 'vue'
import { useTranslator } from '@/composables/useTranslator'

const { t, lang } = useTranslator({
  en: {
    header: {
      projects: 'Projects',
      blog: 'Blog',
      skills: 'Skills',
    },
  },
  de: {
    header: {
      projects: 'Projekte',
      blog: 'Blog',
      skills: 'Skills',
    },
  },
})

const langFlag = computed(() => `/assets/flags/${lang.value === 'en' ? 'de' : 'en'}.svg`)
</script>

<template>
  <header class="py-8 text-center lg:text-left">
    <ul class="flex items-center justify-between gap-8 leading-10">
      <li>
        <router-link to="/">
          <img src="/assets/branding/logo.svg" width="40" alt="Logo" />
        </router-link>
      </li>
      <li class="hidden flex-1 md:block"></li>
      <li>
        <router-link to="/skills" class="font-medium hover:opacity-60">
          {{ t('header.skills') }}
        </router-link>
      </li>
      <li>
        <router-link to="/projects" class="font-medium hover:opacity-60">
          {{ t('header.projects') }}
        </router-link>
      </li>
      <li>
        <a
          class="font-medium hover:opacity-60"
          href="https://webry.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ t('header.blog') }}
        </a>
      </li>
      <li>
        <button
          class="flex h-full items-center"
          @click="lang = lang === 'en' ? 'de' : 'en'"
          :aria-label="lang === 'en' ? 'Deutsch' : 'English'"
          :title="lang === 'en' ? 'Deutsch' : 'English'"
        >
          <img :src="langFlag" width="32" height="32" />
        </button>
      </li>
    </ul>
  </header>
</template>
