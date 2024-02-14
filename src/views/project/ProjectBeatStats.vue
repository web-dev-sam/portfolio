<script setup lang="ts">
import BaseProjectPage from './BaseProjectPage.vue'
import TextBadge from '@/components/views/TextBadge.vue'
import IconJavascript from '@/components/icons/IconJavascript.vue'
import { useTranslator } from '@/composables/useTranslator'

const { t, lang } = useTranslator({
  en: {
    diff: 'Tricky',
    solved: 'Problems Solved',
    chall: 'Challenges I ran into',
    next: "What I'd do differently next time",
  },
  de: {
    diff: 'Knifflig',
    solved: 'Gelöste Probleme',
    chall: 'Herausforderungen',
    next: 'Was würde ich anders machen',
  },
})
</script>

<template>
  <BaseProjectPage
    title="BeatStats"
    githubLink="https://github.com/web-dev-sam/beat-stats"
    githubName="GitHub"
    demoLink="https://dashboard.twitch.tv/extensions/61o5horkcyf4v7hvu181y3dj7s637v"
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
        <TextBadge class="bg-medium text-white">{{ t('diff') }}</TextBadge>
      </div>
    </template>
    <template #description>
      <p v-if="lang === 'en'">
        A twitch extension for displaying ranking statistics of the streamer's profile on ScoreSaber
        (A leaderboard site for the game Beat Saber).
      </p>
      <p v-else>
        Eine Twitch-Erweiterung zum Anzeigen von Ranglistenstatistiken des Streamer-Profils auf
        ScoreSaber (einem online Leaderboard für das Spiel Beat Saber).
      </p>
    </template>
    <template #content>
      <div>
        <h2 class="mb-2 text-body font-bold uppercase">{{ t('solved') }}</h2>
        <p class="max-w-[80ch] text-body text-muted">
          <span v-if="lang === 'en'">
            Viewers of a Beat Saber stream on Twitch are often interested in the streamer's ranking
            statistics. This extension makes it easy for the streamer to display their statistics on
            stream without having to add a link to their profile.
          </span>
          <span v-else>
            Zuschauer eines Beat Saber-Streams auf Twitch sind oft an den Ranglistenstatistiken des
            Streamers interessiert. Diese Erweiterung macht es dem Streamer einfach, seine
            Statistiken auf dem Stream anzuzeigen, ohne einen Link zu seinem Profil hinzufügen zu
            müssen.
          </span>
        </p>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">{{ t('chall') }}</h2>
        <div class="max-w-[80ch] text-body text-muted">
          <ul class="ml-0 list-outside list-none space-y-2 md:ml-8 md:list-disc">
            <li v-if="lang === 'en'">
              Sigh. Twitch makes the absolute dumbest APIs ever created by living beings. The
              documentation isn't better.
            </li>
            <li v-else>
              Seufz. Twitch macht die absolut dämlichsten APIs, die jemals von Menschen erstellt
              wurden sind. Die Dokumentation ist nicht besser.
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">{{ t('next') }}</h2>
        <p class="max-w-[80ch] text-body text-muted">
          <span v-if="lang === 'en'">
            I was a bit lazy and used an API for displaying flags. The API was discontinued and now
            the flags are missing. I would host the flags myself next time. But there probably won't
            be a next time (well unless Twitch decides to care about DX).
          </span>
          <span v-else>
            Ich war etwas faul und habe eine API für das Anzeigen von Flaggen verwendet. Die API
            wurde eingestellt und jetzt fehlen die Flaggen. Ich würde die Flaggen das nächste Mal
            selbst hosten. Aber wahrscheinlich wird es kein nächstes Mal geben (nun, es sei denn,
            Twitch beschließt, sich mehr um DX zu kümmern).
          </span>
        </p>
      </div>
    </template>
  </BaseProjectPage>
</template>
