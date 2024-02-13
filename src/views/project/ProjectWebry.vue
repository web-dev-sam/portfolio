<script setup lang="ts">
import BaseProjectPage from './BaseProjectPage.vue'
import TextBadge from '@/components/views/TextBadge.vue'
import IconAstro from '@/components/icons/IconAstro.vue'
import IconTypeScript from '@/components/icons/IconTypeScript.vue'
import IconTailwind from '@/components/icons/IconTailwind.vue'
</script>

<template>
  <BaseProjectPage
    title="Webry"
    githubLink="https://github.com/web-dev-sam/blog"
    demoLink="https://www.webry.com/"
  >
    <template #badges>
      <div class="flex gap-2">
        <TextBadge class="bg-light text-text">
          Stack
          <template #desc>
            <div class="flex items-center gap-2">
              <div class="w-4"><IconAstro /></div>
              <div class="w-4"><IconTypeScript /></div>
              <div class="w-4"><IconTailwind /></div>
            </div>
          </template>
        </TextBadge>
        <TextBadge class="bg-easy text-white">Easy</TextBadge>
      </div>
    </template>
    <template #description>
      <p>This is my blog all about the modern web.</p>
    </template>
    <template #content>
      <div>
        <h2 class="mb-2 text-body font-bold uppercase">Problems Solved</h2>
        <p class="max-w-[80ch] text-body text-muted">
          With the blog, I want to share my knowledge and experiences in hopes of helping other
          developers solve problems that I have already run into.
        </p>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">Challenges I ran into</h2>
        <div class="max-w-[80ch] text-body text-muted">
          <ul class="ml-4 list-inside list-disc space-y-2">
            <li>Learning Astro.</li>
            <li>Optimizing SEO.</li>
            <li>Writing articles in an enganging, applicable and informative way.</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">What I'd do differently next time</h2>
        <p class="max-w-[80ch] text-body text-muted">
          Nothing. I am happy with the result and the process. I would just love to write more
          articles.
        </p>
      </div>
    </template>
  </BaseProjectPage>
</template>
