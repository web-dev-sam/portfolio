<script setup lang="ts">
import IconVue from '@/components/icons/IconVue.vue'
import BaseProjectPage from './BaseProjectPage.vue'
import TextBadge from '@/components/views/TextBadge.vue'
import IconTypeScript from '@/components/icons/IconTypeScript.vue'
import IconTailwind from '@/components/icons/IconTailwind.vue'
</script>

<template>
  <BaseProjectPage
    title="Beat Timer"
    githubLink="https://github.com/web-dev-sam/beat-timer"
    demoLink="https://beat-timer.webry.com/"
  >
    <template #badges>
      <div class="flex gap-2">
        <TextBadge class="bg-light text-text">
          Stack
          <template #desc>
            <div class="flex items-center gap-2">
              <div class="w-4"><IconVue /></div>
              <div class="w-4"><IconTypeScript /></div>
              <div class="w-4"><IconTailwind /></div>
            </div>
          </template>
        </TextBadge>
        <TextBadge class="bg-[#9333ea] text-white">Hardcore</TextBadge>
      </div>
    </template>
    <template #description>
      <p class="max-w-[80ch] text-balance">
        A web application for rythm game level creators to perfectly sync their audio with the game
        as easily as possible.
      </p>
    </template>
    <template #content>
      <div class="leading-normal">
        <h2 class="mb-2 text-body font-bold uppercase">Problems Solved</h2>
        <p class="mb-4 max-w-[80ch] text-body text-muted">
          I wanted to create a tool that would make it as easy as possible for rhythm game level
          creators to sync their audio with the game. Normally, this is an unnecessarily tedious
          process that requires the creator to use third-party software like ArrowVortex to find the
          BPM and offset of the first beat, and Audacity to add the exact amount of silence to the
          beginning of the audio so the beat is perfectly in sync with the game.
        </p>
        <p class="max-w-[80ch] text-body text-muted">
          Beginners often struggle with this process or don't even know about it. This tool is
          designed to make it as easy as possible for them to get their audio in sync with the game.
        </p>
      </div>

      <div class="leading-normal">
        <h2 class="mb-2 text-body font-bold uppercase">Challenges I ran into</h2>
        <div class="max-w-[80ch] text-body text-muted">
          <p class="mb-4">Oh boy, here we go:</p>
          <ul class="ml-4 list-inside list-disc space-y-2">
            <li>
              <strong>Custom Spectogram visualisation:</strong> I have tried dozens of spectrogram
              libraries to visualize the audio in the browser. None of them were customizable,
              exact, or fast enough to fit my needs. Somehow, one library I tried was sized
              incorrectly by about 6 pixels per minute, resulting in incorrect synchronizations.
              That took a while to figure out. I ended up creating my own spectrogram visualization
              from scratch using the Web Audio API and the Canvas API.
            </li>
            <li>
              <strong>Audio synchronization:</strong> There may be more browser audio APIs than
              there are stars in the sky. I had to try a lot of them to find the one I needed. The
              main challenge was to get two audios (the song and the metronome) to play perfectly in
              sync with visual feedback. I ended up using AudioWorklets that execute in a separate
              thread to provide very low latency audio processing.
            </li>
            <li>
              <strong>Audio analysis:</strong> Now, how do we add silence to an audio file? We could
              use a backend service to do this with ffmpeg, which would be more predictable as users
              have different browsers and devices. But why make it simple when you can make it
              complicated? I ended up using a WebAssembly build of ffmpeg to add silence to the
              audio file in the browser. Don't ask me why it doesn't work on Chromebooks.
            </li>
            <li>
              <strong>Interactions:</strong>
              <img
                src="/assets/projects/beat-timer/thisisfine.gif"
                class="float-right w-32"
                alt="😅"
              />
              I thought I was done with math after all the audio stuff, but then I had to figure out
              the hard way how many factors there are to placing everything pixel perfect on the
              screen (Spectogram zoom, audio position, beat offset, bpm, mouse position, css
              transforms, canvas position on bpm/offset changes, handling everything with negative
              offsets, etc).
            </li>
            <li>
              <strong>Performance:</strong> I hadn't suffered enough yet, so I decided to make the
              whole thing faster. So lets add a bit of seasoning to the mix. I ended up using Web
              Workers to offload the heavy calculations for the spectrogram to separate threads.
              Which saved about 400% of time rendering the spectrogram (from ~6s to ~1.5s) (at least
              on my machine).
            </li>
          </ul>
        </div>
      </div>

      <div class="leading-normal">
        <h2 class="mb-2 text-body font-bold uppercase">What I'd do differently next time</h2>
        <p class="max-w-[80ch] text-body text-muted">
          I started this project as a challenge to myself to see if I could create something as
          complex as this purely in the browser. I learned a lot, but I in a production environment,
          I would rather use a backend service to handle everything besides interactions and
          visualizations. But that would be boring, wouldn't it?
        </p>
      </div>
    </template>
  </BaseProjectPage>
</template>
