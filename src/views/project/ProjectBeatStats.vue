<script setup lang="ts">
import BaseProjectPage from './BaseProjectPage.vue'
import TextBadge from '@/components/views/TextBadge.vue'
import IconJavascript from '@/components/icons/IconJavascript.vue'
</script>

<template>
  <BaseProjectPage
    title="BeatStats"
    githubLink="https://github.com/web-dev-sam/beat-stats"
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
        <TextBadge class="bg-medium text-white">Tricky</TextBadge>
      </div>
    </template>
    <template #description>
      <p>
        A twitch extension for displaying ranking statistics of the streamer's profile on ScoreSaber
        (A leaderboard site for the game Beat Saber).
      </p>
    </template>
    <template #content>
      <div>
        <h2 class="mb-2 text-body font-bold uppercase">Problems Solved</h2>
        <p class="max-w-[80ch] text-body text-muted">
          Viewers of a Beat Saber stream on Twitch are often interested in the streamer's ranking
          statistics. This extension makes it easy for the streamer to display their statistics on
          stream without having to add a link to their profile.
        </p>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">Challenges I ran into</h2>
        <div class="max-w-[80ch] text-body text-muted">
          <ul class="ml-4 list-inside list-disc space-y-2">
            <li>
              Sigh. Twitch makes the absolute dumbest APIs ever created by living beings. The
              documentation isn't better.
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">What I'd do differently next time</h2>
        <p class="max-w-[80ch] text-body text-muted">
          I was lazy and use an API for displaying flags. The API was discontinued and now the flags
          are missing. I would host the flags myself next time. But there probably won't be a next
          time (well unless Twitch decides to care about DX).
        </p>
      </div>
    </template>
  </BaseProjectPage>
</template>
