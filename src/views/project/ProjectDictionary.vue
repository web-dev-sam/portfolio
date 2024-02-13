<script setup lang="ts">
import IconSolid from '@/components/icons/IconSolid.vue'
import IconTypeScript from '@/components/icons/IconTypeScript.vue'
import IconTailwind from '@/components/icons/IconTailwind.vue'
import BaseProjectPage from './BaseProjectPage.vue'
import TextBadge from '@/components/views/TextBadge.vue'
</script>

<template>
  <BaseProjectPage
    title="Dictionary"
    githubLink="https://bitbucket.org/samuel-braun/solidjs-dictionary/"
    demoLink="https://dictionary.webry.com/"
  >
    <template #badges>
      <div class="flex gap-2">
        <TextBadge class="bg-light text-text">
          Stack
          <template #desc>
            <div class="flex items-center gap-2">
              <div class="w-4"><IconSolid /></div>
              <div class="w-4"><IconTypeScript /></div>
              <div class="w-4"><IconTailwind /></div>
            </div>
          </template>
        </TextBadge>
        <TextBadge class="bg-easy text-white">Easy</TextBadge>
      </div>
    </template>
    <template #description>
      <p>
        This is a dictionary web app built with SolidJS. It allows users to search for the meaning
        of words and also provides the pronunciation and synonyms of the word.
      </p>
    </template>
    <template #content>
      <div>
        <h2 class="mb-2 text-body font-bold uppercase">Problems Solved</h2>
        <p class="max-w-[80ch] text-body text-muted">
          Now, when someone argues with me, I can quickly send them a link to the word's definition.
          It's like my 'hush, I'm right' shortcut!
        </p>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">What I'd do differently next time</h2>
        <p class="max-w-[80ch] text-body text-muted">
          I'd try to think of useful features to make the mini project more challenging.
        </p>
      </div>
    </template>
  </BaseProjectPage>
</template>
