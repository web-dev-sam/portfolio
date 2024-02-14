<script setup lang="ts">
import BaseProjectPage from './BaseProjectPage.vue'
import TextBadge from '@/components/views/TextBadge.vue'
import IconAngular from '@/components/icons/IconAngular.vue'
import IconTypeScript from '@/components/icons/IconTypeScript.vue'
import IconSass from '@/components/icons/IconSass.vue'
import { useTranslator } from '@/composables/useTranslator'

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
</script>

<template>
  <BaseProjectPage
    title="Frac"
    githubLink="https://github.com/web-dev-sam/Frac"
    githubName="GitHub"
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
        <TextBadge class="bg-hard text-white">{{ t('diff') }}</TextBadge>
      </div>
    </template>
    <template #description>
      <p v-if="lang === 'en'">
        A website for exploring beautiful visual patterns of so-called mandelbrot and julia sets.
      </p>
      <p v-else>
        Eine Website zum Erkunden schöner visueller Muster sogenannter Mandelbrot- und Julia-Mengen.
      </p>
    </template>
    <template #content>
      <div>
        <h2 class="mb-2 text-body font-bold uppercase">{{ t('solved') }}</h2>
        <p class="max-w-[80ch] text-body text-muted">
          <span v-if="lang === 'en'">
            My main goal was to create a mandelbrot and julia set explorer on the web that runs on
            the GPU so you can explore the fractals in real-time without having to wait for the
            image to render.
          </span>
          <span v-else>
            Mein Hauptziel war es, einen Mandelbrot- und Julia-Mengen-Explorer im Web zu erstellen,
            der auf der GPU läuft, sodass die Fraktale in Echtzeit erkundet werden können, ohne auf
            das Rendern eines Bildes warten zu müssen.
          </span>
        </p>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">{{ t('chall') }}</h2>
        <div class="max-w-[80ch] text-body text-muted">
          <ul class="ml-0 list-outside list-none space-y-2 md:ml-8 md:list-disc">
            <li v-if="lang === 'en'">Using WebGL and GLSL to render the fractals on the GPU.</li>
            <li v-else>Verwenden von WebGL und GLSL, um die Fraktale auf der GPU zu rendern.</li>

            <li v-if="lang === 'en'">
              Switching canvas contexts between the mandelbrot and julia set.
            </li>
            <li v-else>
              Umschalten von Canvas-Kontexten zwischen der Mandelbrot- und Julia-Menge.
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 class="mb-2 text-body font-bold uppercase">{{ t('next') }}</h2>
        <p class="mb-4 max-w-[80ch] text-body text-muted">
          <span v-if="lang === 'en'">I had two problems with this project:</span>
          <span v-else>Ich hatte zwei Probleme mit diesem Projekt:</span>
        </p>
        <p class="mb-4 max-w-[80ch] text-body text-muted">
          <span v-if="lang === 'en'">
            The first was that while the GPU rendering is fast, the precision is limited to 32-bit
            floating point numbers which means that the fractals lose detail fast when you zoom in
            too far. Some kind of custom precision arithmetic would be needed to solve this.
          </span>
          <span v-else>
            Das erste Problem war, dass die GPU-Renderung zwar schnell ist, die Genauigkeit jedoch
            auf 32-Bit-Gleitkommazahlen beschränkt ist, was bedeutet, dass die Fraktale schnell an
            Detail verlieren. Eine Art benutzerdefinierte Präzisionsarithmetik wäre erforderlich, um
            dies zu lösen.
          </span>
        </p>
        <p class="max-w-[80ch] text-body text-muted">
          <span v-if="lang === 'en'">
            The second problem was switching between the mandelbrot and julia set. At the time I
            created this project, I didn't find a good way to switch between two canvases with
            different sizes without having to reinstantiate the WebGL context which is slow.
          </span>
          <span v-else>
            Das zweite Problem war das Umschalten zwischen der Mandelbrot- und Julia-Menge. Zum
            Zeitpunkt der Erstellung dieses Projekts habe ich keine gute Möglichkeit gefunden,
            zwischen zwei Canvasen mit unterschiedlicher Größen zu wechseln, ohne den WebGL-Kontext
            neu instanziieren zu müssen, was langsam ist.
          </span>
        </p>
      </div>
    </template>
  </BaseProjectPage>
</template>
