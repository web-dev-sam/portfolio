<script setup lang="ts">
import BaseProjectPage from './BaseProjectPage.vue'
import { ref } from 'vue'
import TextBadge from '@/components/views/TextBadge.vue'
import IconVue from '@/components/icons/IconVue.vue'
import IconTypeScript from '@/components/icons/IconTypeScript.vue'
import { useTranslator } from '@/composables/useTranslator'

const imageModalVisible = ref(false)
const imageModalSrc = ref('')

const { t, lang } = useTranslator({
  en: {
    diff: 'Challenging',
    solved: 'Problems Solved',
    chall: 'Challenges I ran into',
    next: "What I'd do differently next time",
  },
  de: {
    diff: 'Herausfordernd',
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
    title="BeatSaber Tournament Overlay"
    githubLink="https://github.com/mgtourney/overlay"
    githubName="GitHub"
    demoLink="https://www.youtube.com/watch?v=-ejMSWVJk8M"
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
              <div class="w-4" tooltip="Vue"><IconVue /></div>
              <div class="w-4" tooltip="TypeScript"><IconTypeScript /></div>
            </div>
          </template>
        </TextBadge>
        <TextBadge class="bg-hard text-white">{{ t('diff') }}</TextBadge>
      </div>
    </template>
    <template #description>
      <p v-if="lang === 'en'">
        An streaming overlay for Beat Saber tournaments to display the players perspectives and
        their current score.
      </p>
      <p v-else>
        Ein Streaming-Overlay für Beat Saber Turniere, um die Perspektiven der Spieler und ihren
        aktuellen Punktestand anzuzeigen.
      </p>
    </template>
    <template #content>
      <div>
        <h2 class="mb-2 text-body font-bold uppercase">{{ t('solved') }}</h2>
        <p class="max-w-[80ch] text-body text-muted">
          <span v-if="lang === 'en'">
            Beat Saber is a VR rythm game where players have to hit blocks in time with the music.
            This overlay was created to display the players perspectives and their current score
            during a tournament.
          </span>
          <span v-else>
            Beat Saber ist ein VR-Rhythmus-Spiel, bei dem die Spieler Blöcke im Takt der Musik
            treffen müssen. Dieses Overlay wurde erstellt, um die Perspektiven der Spieler und ihren
            aktuellen Punktestand während eines Turniers anzuzeigen.
          </span>
        </p>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">{{ t('chall') }}</h2>
        <div class="max-w-[80ch] text-body text-muted">
          <ul class="ml-0 list-outside list-none space-y-2 md:ml-8 md:list-disc">
            <li v-if="lang === 'en'">
              I had to work in close collaboration with other tournament organizers as well as the
              developer of the tournament assistant mod for Beat Saber so that the overlay could
              work properly on the tournament day.
            </li>
            <li v-else>
              Ich musste in enger Zusammenarbeit mit anderen Turnierorganisatoren sowie dem
              Entwickler des Turnierassistenten-Mods für Beat Saber arbeiten, damit das Overlay am
              Turniertag ordnungsgemäß funktionieren konnte.
            </li>
            <li v-if="lang === 'en'">
              For the overlay to receive the data from the game, I had to use websockets in
              combination with a relay server. Managing state, connections and events was a
              challenge.
            </li>
            <li v-else>
              Damit das Overlay die Daten aus dem Spiel empfangen konnte, musste ich Websockets in
              Kombination mit einem Relay-Server verwenden. Das Verwalten von Zuständen, Connections
              und Events war eine Herausforderung.
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">{{ t('next') }}</h2>
        <p class="max-w-[80ch] text-body text-muted">
          <span v-if="lang === 'en'">
            I'd work closer with the tournament casters to make sure the overlay is as useful as
            possible for them.
          </span>
          <span v-else>
            Ich würde enger mit den Turnier-Castern zusammenarbeiten, um sicherzustellen, dass das
            Overlay für sie so nützlich wie möglich ist.
          </span>
        </p>
      </div>

      <div>
        <h2 class="mb-4 text-h4 font-bold">Gallery</h2>
        <div class="flex flex-wrap gap-4">
          <img
            src="/assets/projects/bsto/bsto1.jpg"
            alt="Screenshot 1"
            class="max-h-64 cursor-pointer rounded-sm object-cover duration-150 hover:scale-[101%]"
            @click="openModal('/assets/projects/bsto/bsto1.jpg')"
          />
          <img
            src="/assets/projects/bsto/bsto2.jpg"
            alt="Screenshot 2"
            class="max-h-64 cursor-pointer rounded-sm object-cover duration-150 hover:scale-[101%]"
            @click="openModal('/assets/projects/bsto/bsto2.jpg')"
          />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/-ejMSWVJk8M?si=4iXAe-hG6MUqV2kD"
            title="YouTube video player"
            frameborder="0"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share;
            "
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </template>
  </BaseProjectPage>
</template>
