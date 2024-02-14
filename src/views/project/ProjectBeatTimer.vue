<script setup lang="ts">
import IconVue from '@/components/icons/IconVue.vue'
import BaseProjectPage from './BaseProjectPage.vue'
import TextBadge from '@/components/views/TextBadge.vue'
import IconTypeScript from '@/components/icons/IconTypeScript.vue'
import IconTailwind from '@/components/icons/IconTailwind.vue'
import { useTranslator } from '@/composables/useTranslator'

const { t, lang } = useTranslator({
  en: {
    diff: 'Hardcore',
    solved: 'Problems Solved',
    chall: 'Challenges I ran into',
    next: "What I'd do differently next time",
  },
  de: {
    diff: 'Hardcore',
    solved: 'Gelöste Probleme',
    chall: 'Herausforderungen',
    next: 'Was würde ich anders machen',
  },
})
</script>

<template>
  <BaseProjectPage
    title="Beat Timer"
    githubLink="https://github.com/web-dev-sam/beat-timer"
    githubName="GitHub"
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
        <TextBadge class="bg-extreme text-white">{{ t('diff') }}</TextBadge>
      </div>
    </template>
    <template #description>
      <p class="max-w-[80ch] text-balance">
        <span v-if="lang === 'en'">
          A web application for rythm game level creators to perfectly sync their audio with the
          game as easily as possible.
        </span>
        <span v-else>
          Eine Webanwendung für Level-Ersteller von Rhythmusspielen, die dabei hilft, Audiodateien
          so einfach wie möglich perfekt mit dem Spiel zu synchronisieren.
        </span>
      </p>
    </template>
    <template #content>
      <div class="leading-normal">
        <h2 class="mb-2 text-body font-bold uppercase">{{ t('solved') }}</h2>
        <p class="mb-4 max-w-[80ch] text-body text-muted">
          <span v-if="lang === 'en'">
            I wanted to create a tool that would make it as easy as possible for rhythm game level
            creators to sync their audio with the game. Normally, this is an unnecessarily tedious
            process that requires the creator to use third-party software like ArrowVortex to find
            the BPM and offset of the first beat, and Audacity to add the exact amount of silence to
            the beginning of the audio so the beat is perfectly in sync with the game.
          </span>
          <span v-else>
            Ich wollte ein Werkzeug entwickeln, das es den Entwicklern von Rhythmusspiel-Leveln so
            einfach wie möglich macht, die Musik mit dem Spiel zu synchronisieren. Normalerweise ist
            dies ein unnötig langwieriger Prozess, bei dem der Entwickler Software von
            Drittanbietern wie ArrowVortex verwenden muss, um die BPM und den Offset des ersten
            Beats zu finden, und Audacity, um die exakte Menge an Stille am Anfang des Audios
            hinzuzufügen, damit der Beat perfekt mit dem Spiel synchronisiert ist.
          </span>
        </p>
        <p class="max-w-[80ch] text-body text-muted">
          <span v-if="lang === 'en'">
            Beginners often struggle with this process or don't even know about it. This tool is
            designed to make it as easy as possible for them to get their audio in sync with the
            game.
          </span>
          <span v-else>
            Anfänger haben oft Schwierigkeiten mit diesem Prozess oder wissen gar nicht davon.
            Dieses Tool soll es ihnen so einfach wie möglich machen, ihre Audiodateien mit dem Spiel
            zu synchronisieren.
          </span>
        </p>
      </div>

      <div class="leading-normal">
        <h2 class="mb-2 text-body font-bold uppercase">{{ t('chall') }}</h2>
        <div class="max-w-[80ch] text-body text-muted">
          <p class="mb-4" v-if="lang === 'en'">Oh boy, here we go:</p>
          <p class="mb-4" v-else>Oh Gott, los geht's:</p>
          <ul class="ml-4 list-inside list-disc space-y-2">
            <li>
              <span v-if="lang === 'en'">
                <strong>Custom Spectogram visualisation:</strong> I have tried dozens of spectrogram
                libraries to visualize the audio in the browser. None of them were customizable,
                exact, or fast enough to fit my needs. Somehow, one library I tried was sized
                incorrectly by about 6 pixels per minute, resulting in incorrect synchronizations.
                That took a while to figure out. I ended up creating my own spectrogram
                visualization from scratch using the Web Audio API and the Canvas API.
              </span>
              <span v-else>
                <strong>Eigene Spektrogramm-Visualisierung:</strong> Ich habe Dutzende von
                Spektrogramm-Bibliotheken ausprobiert, um das Audio im Browser zu visualisieren.
                Keine davon war anpassbar, genau oder schnell genug, um den Anforderungen gerecht zu
                werden. Eine Bibliothek, die ich ausprobiert hatte, hatte die Visualisierung um etwa
                6 Pixel pro Minute falsch skaliert, was zu falschen Synchronisationen führte. Das
                herauszufinden hat eine Weile gedauert. Ich habe meine eigene
                Spektrogramm-Visualisierung von Grund auf neu erstellt, indem ich die Web Audio API
                und die Canvas API verwendet habe.
              </span>
            </li>
            <li>
              <span v-if="lang === 'en'">
                <strong>Audio synchronization:</strong> There may be more browser audio APIs than
                there are stars in the sky. I had to try a lot of them to find the one I needed. The
                main challenge was to get two audios (the song and the metronome) to play perfectly
                in sync with visual feedback. I ended up using AudioWorklets that execute in a
                separate thread to provide very low latency audio processing.
              </span>
              <span v-else>
                <strong>Audio-Synchronisation:</strong> Es mag mehr Browser-Audio-APIs geben, als es
                Sterne am Himmel gibt. Ich musste viele davon ausprobieren, um die zu finden, die
                ich brauchte. Das Hauptproblem war, zwei Audios (das Lied und das Metronom) perfekt
                synchron mit visuellem Feedback abzuspielen. Ich habe AudioWorklets verwendet, die
                in einem separaten Thread ausgeführt werden, und daher eine sehr geringe Latenz bei
                der Audioverarbeitung bieten.
              </span>
            </li>
            <li>
              <span v-if="lang === 'en'">
                <strong>Audio analysis:</strong> Now, how do we add silence to an audio file? We
                could use a backend service to do this with ffmpeg, which would be more predictable
                as users have different browsers and devices. But why make it simple when you can
                make it complicated? I ended up using a WebAssembly build of ffmpeg to add silence
                to the audio file in the browser.
              </span>
              <span v-else>
                <strong>Audioanalyse:</strong> Nun, wie fügen wir einer Audiodatei Stille hinzu? Wir
                könnten einen Backend-Service mit ffmpeg dafür nutzen, was vorhersehbarer wäre,
                insbesondere da Benutzer unterschiedliche Browser und Geräte haben. Aber warum
                sollte man das einfach machen, wenn es auch kompliziert geht? Ich habe einen
                WebAssembly-Build von ffmpeg verwendet, um Stille zur Audiodatei im Browser
                hinzuzufügen.
              </span>
            </li>
            <li>
              <span v-if="lang === 'en'">
                <strong>Interactions:</strong>
                <img
                  src="/assets/projects/beat-timer/thisisfine.gif"
                  class="float-right w-32"
                  alt="😅"
                />
                I thought I was done with math after all the audio stuff, but then I had to figure
                out the hard way how many factors there are to placing everything pixel perfect on
                the screen (Spectogram zoom, audio position, beat offset, BPM, mouse position, css
                transforms, canvas position on BPM/offset changes, handling everything with negative
                offsets (trimming), etc).
              </span>
              <span v-else>
                <strong>Interaktionen:</strong>
                <img
                  src="/assets/projects/beat-timer/thisisfine.gif"
                  class="float-right w-32"
                  alt="😅"
                />
                Ich dachte, ich wäre mit der Mathematik nach all dem Audiozeugs fertig, aber dann
                musste ich auf die harte Weise herausfinden, wie viele Faktoren es gibt, um alles
                pixelgenau auf dem Bildschirm zu platzieren (Spektrogramm-Zoom, Audioposition,
                Schlagversatz, BPM, Mausposition, CSS-Transformationen, Canvas-Position bei
                BPM/Versatzänderungen, Umgang mit negativen Versätzen (Trimming) usw.).
              </span>
            </li>
            <li>
              <span v-if="lang === 'en'">
                <strong>Performance:</strong> I hadn't suffered enough yet, so I decided to make the
                whole thing faster. So lets add a bit of seasoning to the mix. I ended up using Web
                Workers to offload the heavy calculations for the spectrogram to separate threads.
                Which saved about 400% of time rendering the spectrogram (from ~6s to ~1.5s) (at
                least on my machine).
              </span>
              <span v-else>
                <strong>Leistung:</strong> Ich hatte noch nicht genug gelitten, also beschloss ich,
                das Ganze schneller zu machen. Dafür habe ich Web Workers verwendet, um die schweren
                Berechnungen für das Spektrogramm auf separate Threads auszulagern. Das sparte etwa
                400% der Zeit beim Rendern des Spektrogramms (von ~6s auf ~1,5s) (zumindest auf
                meinem Rechner).
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="leading-normal">
        <h2 class="mb-2 text-body font-bold uppercase">{{ t('next') }}</h2>
        <p class="max-w-[80ch] text-body text-muted">
          <span v-if="lang === 'en'">
            I started this project as a challenge to myself to see if I could create something as
            complex as this purely in the browser. I learned a lot, but I in a production
            environment, I would rather use a backend service to handle everything besides
            interactions and visualizations. But that would be boring, wouldn't it?</span
          >
          <span v-else>
            Ich habe dieses Projekt als Herausforderung an mich selbst begonnen, um zu sehen, ob ich
            etwas so Komplexes rein im Browser erstellen könnte. Ich habe viel gelernt, aber in
            einer Produktionsumgebung würde ich lieber einen Backend-Service verwenden, um alles
            außer Interaktionen und Visualisierungen zu handhaben. Aber das wäre langweilig, oder?
          </span>
        </p>
      </div>
    </template>
  </BaseProjectPage>
</template>
