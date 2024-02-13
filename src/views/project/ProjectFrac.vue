<script setup lang="ts">
import BaseProjectPage from './BaseProjectPage.vue'
import TextBadge from '@/components/views/TextBadge.vue'
import IconAngular from '@/components/icons/IconAngular.vue'
import IconTypeScript from '@/components/icons/IconTypeScript.vue'
import IconSass from '@/components/icons/IconSass.vue'
</script>

<template>
  <BaseProjectPage
    title="Frac"
    githubLink="https://github.com/web-dev-sam/Frac"
    demoLink="https://frac.webry.com/"
  >
    <template #badges>
      <div class="flex gap-2">
        <TextBadge class="bg-light text-text">
          Stack
          <template #desc>
            <div class="flex items-center gap-2">
              <div class="w-4"><IconAngular /></div>
              <div class="w-4"><IconTypeScript /></div>
              <div class="w-4"><IconSass /></div>
            </div>
          </template>
        </TextBadge>
        <TextBadge class="bg-hard text-white">Challenging</TextBadge>
      </div>
    </template>
    <template #description>
      <p>
        A website for exploring beautiful visual patterns of so-called mandelbrot and julia sets.
      </p>
    </template>
    <template #content>
      <div>
        <h2 class="mb-2 text-body font-bold uppercase">Problems Solved</h2>
        <p class="max-w-[80ch] text-body text-muted">
          My main goal was to create a mandelbrot and julia set explorer on the web that runs on the
          GPU so you can explore the fractals in real-time without having to wait for the image to
          render.
        </p>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">Challenges I ran into</h2>
        <div class="max-w-[80ch] text-body text-muted">
          <ul class="ml-4 list-inside list-disc space-y-2">
            <li>Using WebGL and GLSL to render the fractals on the GPU.</li>
            <li>Switching canvas contexts between the mandelbrot and julia set.</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">What I'd do differently next time</h2>
        <p class="mb-4 max-w-[80ch] text-body text-muted">I had two problems with this project:</p>
        <p class="mb-4 max-w-[80ch] text-body text-muted">
          The first was that while the GPU rendering is fast, the precision is limited to 32-bit
          floating point numbers which means that the fractals lose detail fast when you zoom in too
          far. Some kind of custom precision arithmetic would be needed to solve this.
        </p>
        <p class="max-w-[80ch] text-body text-muted">
          The second problem was switching between the mandelbrot and julia set. At the time I
          created this project, I didn't find a good way to switch between two canvases with
          different sizes without having to reinstantiate the WebGL context which is slow.
        </p>
      </div>
    </template>
  </BaseProjectPage>
</template>
