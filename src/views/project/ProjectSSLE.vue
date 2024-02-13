<script setup lang="ts">
import BaseProjectPage from './BaseProjectPage.vue'
import TextBadge from '@/components/views/TextBadge.vue'
import IconJavascript from '@/components/icons/IconJavascript.vue'
</script>

<template>
  <BaseProjectPage
    title="ScoreSaber Leaderboard Extension"
    githubLink="https://github.com/web-dev-sam/beatsaver-leaderboard-buttons"
    demoLink="https://chromewebstore.google.com/detail/scoresaber-buttons/mjpdbfngmbgokogdekgacbonopbkaclc"
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
        <TextBadge class="bg-easy text-white">Easy</TextBadge>
      </div>
    </template>
    <template #description>
      <p>
        A browser extension for a leaderboard site of the popular VR game Beat Saber which adds some
        shortcuts to other related sites.
      </p>
    </template>
    <template #content>
      <div>
        <h2 class="mb-2 text-body font-bold uppercase">Problems Solved</h2>
        <p class="max-w-[80ch] text-body text-muted">
          For the game Beat Saber, there are a few related sites that are frequently used together.
          Like BeatSaver, ScoreSaber, and BeatLeader. I wanted to make it easier to switch between
          these sites for specific songs so no one has to manually search for the song on each site.
        </p>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">What I'd do differently next time</h2>
        <p class="max-w-[80ch] text-body text-muted">
          Maybe adding some more features for other pages and not only for songs.
        </p>
      </div>
    </template>
  </BaseProjectPage>
</template>
