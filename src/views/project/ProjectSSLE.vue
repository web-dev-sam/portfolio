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
    title="ScoreSaber Leaderboard Extension"
    githubLink="https://github.com/web-dev-sam/beatsaver-leaderboard-buttons"
    githubName="GitHub"
    demoLink="https://chromewebstore.google.com/detail/scoresaber-buttons/mjpdbfngmbgokogdekgacbonopbkaclc"
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
              <div class="w-4"><IconJavascript /></div>
            </div>
          </template>
        </TextBadge>
        <TextBadge class="bg-easy text-white">{{ t('diff') }}</TextBadge>
      </div>
    </template>
    <template #description>
      <p v-if="lang === 'en'">
        A browser extension for a leaderboard site of the popular VR game Beat Saber which adds some
        shortcuts to other related sites.
      </p>
      <p v-else>
        Eine Browser-Erweiterung für eine Leaderboard-Website des beliebten VR-Spiels Beat Saber,
        die einige Verknüpfungen zu anderen verwandten Websites bietet.
      </p>
    </template>
    <template #content>
      <div>
        <h2 class="mb-2 text-body font-bold uppercase">{{ t('solved') }}</h2>
        <p class="max-w-[80ch] text-body text-muted">
          <span v-if="lang === 'en'">
            For the game Beat Saber, there are a few related sites that are frequently used
            together. Like BeatSaver, ScoreSaber, and BeatLeader. I wanted to make it easier to
            switch between these sites for specific songs so no one has to manually search for the
            song on each site.
          </span>
          <span v-else>
            Für das Spiel Beat Saber gibt es einige verwandte Websites, die häufig zusammen
            verwendet werden. Wie BeatSaver, ScoreSaber und BeatLeader. Ich wollte es einfacher
            machen, zwischen diesen Websites für bestimmte Songs zu wechseln, damit niemand manuell
            nach dem Song auf jeder Website suchen muss.
          </span>
        </p>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">{{ t('next') }}</h2>
        <p class="max-w-[80ch] text-body text-muted">
          <span v-if="lang === 'en'">
            Maybe adding some more features for other pages and not only for songs.
          </span>
          <span v-else>
            Vielleicht einige weitere Funktionen für andere Seiten hinzufügen und nicht nur für
            Songs.
          </span>
        </p>
      </div>

      <div>
        <h2 class="mb-4 text-h4 font-bold">Gallery</h2>
        <div class="flex flex-wrap gap-4">
          <img
            src="/assets/projects/bse/be1.jpg"
            alt="Screenshot 1"
            class="max-h-64 cursor-pointer rounded duration-150 hover:scale-[101%]"
            @click="openModal('/assets/projects/bse/be1.jpg')"
          />
        </div>
      </div>
    </template>
  </BaseProjectPage>
</template>
