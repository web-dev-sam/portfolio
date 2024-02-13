<script setup lang="ts">
import BaseProjectPage from './BaseProjectPage.vue'
import TextBadge from '@/components/views/TextBadge.vue'
import IconJavascript from '@/components/icons/IconJavascript.vue'
</script>

<template>
  <BaseProjectPage
    title="Log7 Glossary"
    githubLink="https://bitbucket.org/samuel-braun/technical-glossary/src/master/"
    demoLink="https://glossary.webry.com/"
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
        This was a project for a university course to create a glossary for the fictional company
        Log7 with basic HTML, CSS and JavaScript.
      </p>
    </template>
    <template #content>
      <div>
        <h2 class="mb-2 text-body font-bold uppercase">Problems Solved</h2>
        <p class="max-w-[80ch] text-body text-muted">
          The university course was about learning the basics of web development. This project is
          supposed to help a fictional company to keep track of technical terms and their meanings.
        </p>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">Challenges I ran into</h2>
        <div class="max-w-[80ch] text-body text-muted">
          <ul class="ml-4 list-inside list-disc space-y-2">
            <li>Emotional Damage: Not being allowed to use wonderful frameworks like Vue. 🥲</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">What I'd do differently next time</h2>
        <p class="max-w-[80ch] text-body text-muted">
          Put a timer on for the implementation to make it more challenging.
        </p>
      </div>
    </template>
  </BaseProjectPage>
</template>
