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
import { useTranslator } from '@/composables/useTranslator'

// TODO: ESLint, Prettier

const { t } = useTranslator({
  en: {
    love: 'I love',
    worked: 'Worked with',
    forget: 'Want to forget',
  },
  de: {
    love: 'Ich liebe',
    worked: 'Gearbeitet mit',
    forget: 'Möchte vergessen',
  },
})
</script>

<template>
  <main class="mb-16 text-center md:text-left">
    <h1 class="!lg:my-32 my-16! text-center text-h3 font-bold">Skills</h1>
    <div class="flex flex-col justify-around gap-16 md:flex-row md:gap-0 xl:justify-between">
      <section>
        <h2 class="mb-4 text-h6 font-bold">Frameworks</h2>

        <div class="flex flex-col justify-around sm:flex-row md:flex-col">
          <div>
            <h3 class="text-overline mt-8 mb-4 text-muted">{{ t('love') }}</h3>
            <div class="space-y-2">
              <SkillBadge title="Vue" link="https://vuejs.org/">
                <IconVue />
              </SkillBadge>
              <SkillBadge title="Astro" link="https://astro.build/">
                <IconAstro />
              </SkillBadge>
            </div>
          </div>

          <div>
            <h3 class="text-overline mt-8 mb-4 text-muted">{{ t('worked') }}</h3>
            <div class="space-y-2">
              <SkillBadge title="Lit" link="https://lit.dev/">
                <IconLit />
              </SkillBadge>
              <SkillBadge title="Nuxt" link="https://nuxt.com/">
                <IconNuxt />
              </SkillBadge>
              <SkillBadge title="Svelte" link="https://svelte.dev/">
                <IconSvelte />
              </SkillBadge>
              <SkillBadge title="React" link="https://reactjs.org/">
                <IconReact />
              </SkillBadge>
              <SkillBadge title="Next" link="https://nextjs.org/">
                <IconNext />
              </SkillBadge>
              <SkillBadge title="Angular" link="https://angular.io/">
                <IconAngular />
              </SkillBadge>
              <SkillBadge title="Solid" link="https://solidjs.com/">
                <IconSolid />
              </SkillBadge>
            </div>
          </div>

          <div>
            <h3 class="text-overline mt-8 mb-4 text-muted">{{ t('forget') }}</h3>
            <div class="space-y-2 opacity-85 grayscale-[1]">
              <SkillBadge title="Django" link="https://www.djangoproject.com/">
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
            <h3 class="text-overline mt-8 mb-4 text-muted">{{ t('love') }}</h3>
            <div class="space-y-2">
              <SkillBadge title="Tailwind" link="https://tailwindcss.com/">
                <IconTailwind />
              </SkillBadge>
              <SkillBadge title="Flowbite" link="https://flowbite.com/">
                <IconFlowbite />
              </SkillBadge>
              <SkillBadge title="Supabase" link="https://supabase.io/">
                <IconSupabase />
              </SkillBadge>
              <SkillBadge title="tRPC" link="https://trpc.io/">
                <IconTrpc />
              </SkillBadge>
            </div>
          </div>

          <div>
            <h3 class="text-overline mt-8 mb-4 text-muted">{{ t('worked') }}</h3>
            <div class="space-y-2">
              <SkillBadge title="Firebase" link="https://firebase.google.com/">
                <IconFirebase />
              </SkillBadge>
              <SkillBadge title="SASS" link="https://sass-lang.com/">
                <IconSass />
              </SkillBadge>
              <SkillBadge title="Font Awesome" link="https://fontawesome.com/">
                <IconFontawesome />
              </SkillBadge>
            </div>
          </div>

          <div>
            <h3 class="text-overline mt-8 mb-4 text-muted">{{ t('forget') }}</h3>
            <div class="space-y-2 opacity-85 grayscale-[1]">
              <SkillBadge title="Bootstrap" link="https://getbootstrap.com/">
                <IconBootstrap />
              </SkillBadge>
              <SkillBadge title="JQuery" link="https://jquery.com/">
                <IconJquery />
              </SkillBadge>
              <SkillBadge title="Jinja" link="https://jinja.palletsprojects.com/">
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
            <h3 class="text-overline mt-8 mb-4 text-muted">{{ t('love') }}</h3>
            <div class="space-y-2">
              <SkillBadge title="Vercel" link="https://vercel.com/">
                <IconVercel />
              </SkillBadge>
              <SkillBadge title="Shadcn" link="https://ui.shadcn.com/">
                <IconShadcn />
              </SkillBadge>
              <SkillBadge title="Figma" link="https://www.figma.com/">
                <IconFigma />
              </SkillBadge>
              <SkillBadge title="Vite" link="https://vitejs.dev/">
                <IconVite />
              </SkillBadge>
            </div>
          </div>

          <div>
            <h3 class="text-overline mt-8 mb-4 text-muted">{{ t('worked') }}</h3>
            <div class="space-y-2">
              <SkillBadge title="Git" link="https://git-scm.com/">
                <IconGit />
              </SkillBadge>
              <SkillBadge title="Docker" link="https://www.docker.com/">
                <IconDocker />
              </SkillBadge>
              <SkillBadge title="PostCSS" link="https://postcss.org/">
                <IconPostcss />
              </SkillBadge>
              <SkillBadge title="Rollup" link="https://rollupjs.org/">
                <IconRollup />
              </SkillBadge>
            </div>
          </div>

          <div>
            <h3 class="text-overline mt-8 mb-4 text-muted">{{ t('forget') }}</h3>
            <div class="space-y-2 opacity-85 grayscale-[1]">
              <SkillBadge title="Webpack" link="https://webpack.js.org/">
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
  max-width: 2rem;
  max-height: 2rem;
}
</style>
