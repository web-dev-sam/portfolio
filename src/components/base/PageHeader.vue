<script setup lang="ts">
import { computed } from 'vue'
import { useTranslator } from '@/composables/useTranslator'

const { t, lang, cantTranslate } = useTranslator({
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

const langFlag = computed(
  () => `/assets/flags/${cantTranslate.value ? 'en' : lang.value === 'en' ? 'de' : 'en'}.svg`,
)
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
        <router-link class="font-medium hover:opacity-60" to="/blogs">
          {{ t('header.blog') }}
        </router-link>
      </li>
      <li>
        <button
          class="flex h-full items-center"
          :class="cantTranslate ? 'cursor-not-allowed opacity-40' : 'cursor-pointer'"
          @click="lang = lang === 'en' ? 'de' : 'en'"
          :aria-label="lang === 'en' ? 'Deutsch' : 'English'"
          :title="
            cantTranslate
              ? 'This page currently has no translations.'
              : lang === 'en'
                ? 'Deutsch'
                : 'English'
          "
        >
          <img :src="langFlag" width="32" height="32" />
        </button>
      </li>
    </ul>
  </header>
</template>
