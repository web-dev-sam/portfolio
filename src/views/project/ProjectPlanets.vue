<script setup lang="ts">
import IconNuxt from '@/components/icons/IconNuxt.vue'
import BaseProjectPage from './BaseProjectPage.vue'
import TextBadge from '@/components/views/TextBadge.vue'
import IconTypeScript from '@/components/icons/IconTypeScript.vue'
import IconTailwind from '@/components/icons/IconTailwind.vue'
</script>

<template>
  <BaseProjectPage
    title="Planets Fact Site"
    githubLink="https://bitbucket.org/samuel-braun/nuxtjs-planets-fact-site/"
    demoLink="https://planets.webry.com/"
  >
    <template #badges>
      <div class="flex gap-2">
        <TextBadge class="bg-light text-text">
          Stack
          <template #desc>
            <div class="flex items-center gap-2">
              <div class="w-4"><IconNuxt /></div>
              <div class="w-4"><IconTypeScript /></div>
              <div class="w-4"><IconTailwind /></div>
            </div>
          </template>
        </TextBadge>
        <TextBadge class="bg-medium text-white">Tricky</TextBadge>
      </div>
    </template>
    <template #description>
      <p>This is an educational website about the planets in our solar system.</p>
    </template>
    <template #content>
      <div>
        <h2 class="mb-2 text-body font-bold uppercase">Problems Solved</h2>
        <p class="max-w-[80ch] text-body text-muted">My boredom. 🙃</p>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">Challenges I ran into</h2>
        <div class="max-w-[80ch] text-body text-muted">
          Animations!!! I wanted to animate the clouds of each planet and the stars in the
          background with a subtle parallax effect. Editing the SVGs to achieve this was a bit
          tricky.
        </div>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">What I'd do differently next time</h2>
        <p class="max-w-[80ch] text-body text-muted">
          I would put more effort into optimizing the performance of the animations. Otherwise, I am
          happy with the result and the process.
        </p>
      </div>
    </template>
  </BaseProjectPage>
</template>
