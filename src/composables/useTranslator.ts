import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const currentLanguage = ref<'en' | 'de'>('en')
const cantTranslate = ref(false)
const localStorageLang = localStorage.getItem('lang') as 'en' | 'de' | null
if (localStorageLang) {
  currentLanguage.value = localStorageLang
} else {
  const browserLang = navigator.language.slice(0, 2).toLowerCase()
  if (browserLang === 'de') {
    currentLanguage.value = 'de'
  }
}

export function useTranslator<T extends Record<string, any>>(messages: { en: T; de?: T }) {
  const { t, locale } = useI18n({
    messages,
  })

  cantTranslate.value = !messages.de

  locale.value = currentLanguage.value
  watch(currentLanguage, (newLang) => {
    locale.value = newLang
    localStorage.setItem('lang', newLang)
    document.documentElement.lang = newLang
  })

  return {
    t,
    lang: currentLanguage,
    cantTranslate,
  }
}
