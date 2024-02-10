<script setup lang="ts">
import IconAngular from '@/components/icons/IconAngular.vue'
import IconAstro from '@/components/icons/IconAstro.vue'
import IconBootstrap from '@/components/icons/IconBootstrap.vue'
import IconDjango from '@/components/icons/IconDjango.vue'
import IconDocker from '@/components/icons/IconDocker.vue'
import IconFigma from '@/components/icons/IconFigma.vue'
import IconFirebase from '@/components/icons/IconFirebase.vue'
import IconFlowbite from '@/components/icons/IconFlowbite.vue'
import IconFontawesome from '@/components/icons/IconFontawesome.vue'
import IconGit from '@/components/icons/IconGit.vue'
import IconJinja from '@/components/icons/IconJinja.vue'
import IconJquery from '@/components/icons/IconJquery.vue'
import IconLit from '@/components/icons/IconLit.vue'
import IconNext from '@/components/icons/IconNext.vue'
import IconNuxt from '@/components/icons/IconNuxt.vue'
import IconPostcss from '@/components/icons/IconPostcss.vue'
import IconReact from '@/components/icons/IconReact.vue'
import IconRollup from '@/components/icons/IconRollup.vue'
import IconSass from '@/components/icons/IconSass.vue'
import IconShadcn from '@/components/icons/IconShadcn.vue'
import IconSolid from '@/components/icons/IconSolid.vue'
import IconSupabase from '@/components/icons/IconSupabase.vue'
import IconSvelte from '@/components/icons/IconSvelte.vue'
import IconTailwind from '@/components/icons/IconTailwind.vue'
import IconTrpc from '@/components/icons/IconTrpc.vue'
import IconVercel from '@/components/icons/IconVercel.vue'
import IconVite from '@/components/icons/IconVite.vue'
import IconVue from '@/components/icons/IconVue.vue'
import IconWebpack from '@/components/icons/IconWebpack.vue'
import SkillBadge from '@/components/views/SkillBadge.vue'
</script>

<template>
  <main class="mb-16 text-center md:text-left">
    <h1 class="!lg:my-32 !my-16 text-center text-h3 font-bold">Skills</h1>
    <div class="flex flex-col justify-around gap-16 md:flex-row md:gap-0 xl:justify-between">
      <section>
        <h2 class="mb-4 text-h6 font-bold">Frameworks</h2>

        <div class="flex flex-col justify-around sm:flex-row md:flex-col">
          <div>
            <h3 class="text-overline mb-4 mt-8 text-muted">I love</h3>
            <div class="space-y-2">
              <SkillBadge title="Vue" link="#">
                <IconVue />
              </SkillBadge>
              <SkillBadge title="Astro" link="#">
                <IconAstro />
              </SkillBadge>
            </div>
          </div>

          <div>
            <h3 class="text-overline mb-4 mt-8 text-muted">Worked with</h3>
            <div class="space-y-2">
              <SkillBadge title="Lit" link="#">
                <IconLit />
              </SkillBadge>
              <SkillBadge title="Nuxt" link="#">
                <IconNuxt />
              </SkillBadge>
              <SkillBadge title="Svelte" link="#">
                <IconSvelte />
              </SkillBadge>
              <SkillBadge title="React" link="#">
                <IconReact />
              </SkillBadge>
              <SkillBadge title="Next" link="#">
                <IconNext />
              </SkillBadge>
              <SkillBadge title="Angular" link="#">
                <IconAngular />
              </SkillBadge>
              <SkillBadge title="Solid" link="#">
                <IconSolid />
              </SkillBadge>
            </div>
          </div>

          <div>
            <h3 class="text-overline mb-4 mt-8 text-muted">Want to forget</h3>
            <div class="space-y-2 opacity-85 grayscale-[1]">
              <SkillBadge title="Django" link="#">
                <IconDjango />
              </SkillBadge>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 class="mb-4 text-h6 font-bold">Libraries</h2>

        <div class="flex flex-col justify-around sm:flex-row md:flex-col">
          <div>
            <h3 class="text-overline mb-4 mt-8 text-muted">I love</h3>
            <div class="space-y-2">
              <SkillBadge title="Tailwind" link="#">
                <IconTailwind />
              </SkillBadge>
              <SkillBadge title="Font Awesome" link="#">
                <IconFontawesome />
              </SkillBadge>
              <SkillBadge title="Shadcn" link="#">
                <IconShadcn />
              </SkillBadge>
              <SkillBadge title="Flowbite" link="#">
                <IconFlowbite />
              </SkillBadge>
              <SkillBadge title="Supabase" link="#">
                <IconSupabase />
              </SkillBadge>
              <SkillBadge title="tRPC" link="#">
                <IconTrpc />
              </SkillBadge>
            </div>
          </div>

          <div>
            <h3 class="text-overline mb-4 mt-8 text-muted">Worked with</h3>
            <div class="space-y-2">
              <SkillBadge title="Firebase" link="#">
                <IconFirebase />
              </SkillBadge>
              <SkillBadge title="SASS" link="#">
                <IconSass />
              </SkillBadge>
            </div>
          </div>

          <div>
            <h3 class="text-overline mb-4 mt-8 text-muted">Want to forget</h3>
            <div class="space-y-2 opacity-85 grayscale-[1]">
              <SkillBadge title="Bootstrap" link="#">
                <IconBootstrap />
              </SkillBadge>
              <SkillBadge title="JQuery" link="#">
                <IconJquery />
              </SkillBadge>
              <SkillBadge title="Jinja" link="#">
                <IconJinja />
              </SkillBadge>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 class="mb-4 text-h6 font-bold">Tools</h2>

        <div class="flex flex-col justify-around sm:flex-row md:flex-col">
          <div>
            <h3 class="text-overline mb-4 mt-8 text-muted">I love</h3>
            <div class="space-y-2">
              <SkillBadge title="Vercel" link="#">
                <IconVercel />
              </SkillBadge>
              <SkillBadge title="Vite" link="#">
                <IconVite />
              </SkillBadge>
              <SkillBadge title="Figma" link="#">
                <IconFigma />
              </SkillBadge>
            </div>
          </div>

          <div>
            <h3 class="text-overline mb-4 mt-8 text-muted">Worked with</h3>
            <div class="space-y-2">
              <SkillBadge title="Git" link="#">
                <IconGit />
              </SkillBadge>
              <SkillBadge title="Docker" link="#">
                <IconDocker />
              </SkillBadge>
              <SkillBadge title="PostCSS" link="#">
                <IconPostcss />
              </SkillBadge>
              <SkillBadge title="Rollup" link="#">
                <IconRollup />
              </SkillBadge>
            </div>
          </div>

          <div>
            <h3 class="text-overline mb-4 mt-8 text-muted">Want to forget</h3>
            <div class="space-y-2 opacity-85 grayscale-[1]">
              <SkillBadge title="Webpack" link="#">
                <IconWebpack />
              </SkillBadge>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
svg {
  @apply max-h-8 max-w-8;
}
</style>
