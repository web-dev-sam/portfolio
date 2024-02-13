<script setup lang="ts">
import BaseProjectPage from './BaseProjectPage.vue'
import TextBadge from '@/components/views/TextBadge.vue'
import IconVue from '@/components/icons/IconVue.vue';
import IconTypeScript from '@/components/icons/IconTypeScript.vue';
</script>

<template>
  <BaseProjectPage
    title="BeatSaber Tournament Overlay"
    githubLink="https://github.com/mgtourney/overlay"
    demoLink="https://www.youtube.com/watch?v=-ejMSWVJk8M"
  >
    <template #badges>
      <div class="flex gap-2">
        <TextBadge class="bg-light text-text">
          Stack
          <template #desc>
            <div class="flex items-center gap-2">
              <div class="w-4"><IconVue /></div>
              <div class="w-4"><IconTypeScript /></div>
            </div>
          </template>
        </TextBadge>
        <TextBadge class="bg-hard text-white">Challenging</TextBadge>
      </div>
    </template>
    <template #description>
      <p>
        An streaming overlay for Beat Saber tournaments to display the players perspectives and
        their current score.
      </p>
    </template>
    <template #content>
      <div>
        <h2 class="mb-2 text-body font-bold uppercase">Problems Solved</h2>
        <p class="max-w-[80ch] text-body text-muted">
          Beat Saber is a VR rythm game where players have to hit blocks in time with the music.
          This overlay was created to display the players perspectives and their current score
          during a tournament.
        </p>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">Challenges I ran into</h2>
        <div class="max-w-[80ch] text-body text-muted">
          <ul class="ml-4 list-inside list-disc space-y-2">
            <li>
              I had to work in close collaboration with other tournament organizers as well as the
              developer of the tournament assistant mod for Beat Saber so that the overlay could
              work properly on the tournament day.
            </li>
            <li>
              For the overlay to receive the data from the game, I had to use websockets in combination with a
              relay server. Managing state, connections and events was a challenge.
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">What I'd do differently next time</h2>
        <p class="max-w-[80ch] text-body text-muted">
          I'd work closer with the tournament casters to make sure the overlay is as useful as
          possible for them.
        </p>
      </div>
    </template>
  </BaseProjectPage>
</template>
