<script setup lang="ts">
import IconAngular from '@/components/icons/IconAngular.vue'
import IconAstro from '@/components/icons/IconAstro.vue'
import IconBiome from '@/components/icons/IconBiome.vue'
import IconBootstrap from '@/components/icons/IconBootstrap.vue'
import IconBun from '@/components/icons/IconBun.vue'
import IconDjango from '@/components/icons/IconDjango.vue'
import IconDocker from '@/components/icons/IconDocker.vue'
import IconEslint from '@/components/icons/IconEslint.vue'
import IconFigma from '@/components/icons/IconFigma.vue'
import IconFirebase from '@/components/icons/IconFirebase.vue'
import IconFlowbite from '@/components/icons/IconFlowbite.vue'
import IconFontawesome from '@/components/icons/IconFontawesome.vue'
import IconGit from '@/components/icons/IconGit.vue'
import IconJinja from '@/components/icons/IconJinja.vue'
import IconJquery from '@/components/icons/IconJquery.vue'
import IconLaravel from '@/components/icons/IconLaravel.vue'
import IconLeptos from '@/components/icons/IconLeptos.vue'
import IconLit from '@/components/icons/IconLit.vue'
import IconNext from '@/components/icons/IconNext.vue'
import IconNpm from '@/components/icons/IconNpm.vue'
import IconNuxt from '@/components/icons/IconNuxt.vue'
import IconOxc from '@/components/icons/IconOxc.vue'
import IconPnpm from '@/components/icons/IconPnpm.vue'
import IconPostcss from '@/components/icons/IconPostcss.vue'
import IconReact from '@/components/icons/IconReact.vue'
import IconRollup from '@/components/icons/IconRollup.vue'
import IconRust from '@/components/icons/IconRust.vue'
import IconSass from '@/components/icons/IconSass.vue'
import IconShadcn from '@/components/icons/IconShadcn.vue'
import IconSolid from '@/components/icons/IconSolid.vue'
import IconSupabase from '@/components/icons/IconSupabase.vue'
import IconSvelte from '@/components/icons/IconSvelte.vue'
import IconTailwind from '@/components/icons/IconTailwind.vue'
import IconTrpc from '@/components/icons/IconTrpc.vue'
import IconTypeScript from '@/components/icons/IconTypeScript.vue'
import IconVercel from '@/components/icons/IconVercel.vue'
import IconVite from '@/components/icons/IconVite.vue'
import IconVue from '@/components/icons/IconVue.vue'
import IconVuetify from '@/components/icons/IconVuetify.vue'
import IconWebpack from '@/components/icons/IconWebpack.vue'
import IconYarn from '@/components/icons/IconYarn.vue'
import IconZod from '@/components/icons/IconZod.vue'
import { useTranslator } from '@/composables/useTranslator'

const { t } = useTranslator({
  en: {
    stances: {
      label: 'How I think',
      deep: {
        title: 'Modules should be deep',
        body: "A module's job is to hide complexity. Simple interface, real implementation underneath. When a caller needs to understand the internals to use something, the abstraction has already failed.",
        book: 'A Philosophy of Software Design',
        bookLink: 'https://www.goodreads.com/book/show/39996759-a-philosophy-of-software-design',
      },
      ts: {
        title: 'TypeScript is non-negotiable',
        body: 'Not for autocomplete — for contracts. A type signature is the first design review. It forces you to think about what a thing is before writing how it works.',
      },
      audit: {
        title: 'Architecture should be auditable',
        body: "A new developer should know where new code belongs without asking. If the codebase needs a tour before contributing, it wasn't designed — it accumulated. Unknown unknowns are a design failure.",
      },
    },
    tools: {
      label: 'Tools I\'ve worked with',
    },
  },
  de: {
    stances: {
      label: 'Wie ich denke',
      deep: {
        title: 'Module sollten tief sein',
        body: 'Ein Modul versteckt Komplexität. Einfache Schnittstelle, echte Implementierung darunter. Wenn ein Aufrufer die Interna verstehen muss, hat die Abstraktion bereits versagt.',
        book: 'A Philosophy of Software Design',
        bookLink: 'https://www.goodreads.com/book/show/39996759-a-philosophy-of-software-design',
      },
      ts: {
        title: 'TypeScript ist nicht verhandelbar',
        body: 'Nicht für Autovervollständigung — für Verträge. Eine Typsignatur ist das erste Design-Review. Sie zwingt dazu, zu denken, was etwas ist, bevor man schreibt, wie es funktioniert.',
      },
      audit: {
        title: 'Architektur sollte überprüfbar sein',
        body: 'Ein neuer Entwickler sollte wissen, wo neuer Code hingehört, ohne fragen zu müssen. Wenn die Codebasis eine Einführung braucht, wurde sie nicht entworfen — sie ist gewachsen. Unbekannte Unbekannte sind ein Designfehler.',
      },
    },
    tools: {
      label: 'Womit ich gearbeitet habe',
    },
  },
})

const skills = [
  { title: 'Vue', link: 'https://vuejs.org/', icon: IconVue },
  { title: 'TypeScript', link: 'https://www.typescriptlang.org/', icon: IconTypeScript },
  { title: 'Tailwind', link: 'https://tailwindcss.com/', icon: IconTailwind },
  { title: 'Docker', link: 'https://www.docker.com/', icon: IconDocker },
  { title: 'React', link: 'https://reactjs.org/', icon: IconReact },
  { title: 'Next', link: 'https://nextjs.org/', icon: IconNext },
  { title: 'Angular', link: 'https://angular.io/', icon: IconAngular },
  { title: 'Nuxt', link: 'https://nuxt.com/', icon: IconNuxt },
  { title: 'Svelte', link: 'https://svelte.dev/', icon: IconSvelte },
  { title: 'Vuetify', link: 'https://vuetifyjs.com/', icon: IconVuetify },
  { title: 'Laravel', link: 'https://laravel.com/', icon: IconLaravel },
  { title: 'Git', link: 'https://git-scm.com/', icon: IconGit },
  { title: 'Vite', link: 'https://vitejs.dev/', icon: IconVite },
  { title: 'OXC', link: 'https://oxc.rs/', icon: IconOxc },
  { title: 'ESLint', link: 'https://eslint.org/', icon: IconEslint },
  { title: 'Biome', link: 'https://biomejs.dev/', icon: IconBiome },
  { title: 'Figma', link: 'https://www.figma.com/', icon: IconFigma },
  { title: 'Supabase', link: 'https://supabase.io/', icon: IconSupabase },
  { title: 'Firebase', link: 'https://firebase.google.com/', icon: IconFirebase },
  { title: 'Vercel', link: 'https://vercel.com/', icon: IconVercel },
  { title: 'Astro', link: 'https://astro.build/', icon: IconAstro },
  { title: 'tRPC', link: 'https://trpc.io/', icon: IconTrpc },
  { title: 'Zod', link: 'https://zod.dev/', icon: IconZod },
  { title: 'Rust', link: 'https://www.rust-lang.org/', icon: IconRust },
  { title: 'Leptos', link: 'https://leptos.dev/', icon: IconLeptos },
  { title: 'npm', link: 'https://www.npmjs.com/', icon: IconNpm },
  { title: 'pnpm', link: 'https://pnpm.io/', icon: IconPnpm },
  { title: 'bun', link: 'https://bun.sh/', icon: IconBun },
  { title: 'yarn', link: 'https://yarnpkg.com/', icon: IconYarn },
  { title: 'Sass', link: 'https://sass-lang.com/', icon: IconSass },
  { title: 'Shadcn', link: 'https://ui.shadcn.com/', icon: IconShadcn },
  { title: 'Lit', link: 'https://lit.dev/', icon: IconLit },
  { title: 'Solid', link: 'https://solidjs.com/', icon: IconSolid },
  { title: 'Flowbite', link: 'https://flowbite.com/', icon: IconFlowbite },
  { title: 'PostCSS', link: 'https://postcss.org/', icon: IconPostcss },
  { title: 'Rollup', link: 'https://rollupjs.org/', icon: IconRollup },
  { title: 'FA Icons', link: 'https://fontawesome.com/', icon: IconFontawesome },
  { title: 'Bootstrap', link: 'https://getbootstrap.com/', icon: IconBootstrap },
  { title: 'Webpack', link: 'https://webpack.js.org/', icon: IconWebpack },
  { title: 'Django', link: 'https://www.djangoproject.com/', icon: IconDjango },
  { title: 'jQuery', link: 'https://jquery.com/', icon: IconJquery },
  { title: 'Jinja', link: 'https://jinja.palletsprojects.com/', icon: IconJinja },
]
</script>

<template>
  <main class="mb-16">
    <h1 class="my-16 text-center text-h3 font-bold">Skills</h1>

    <section class="mb-16">
      <p class="text-overline mb-8 tracking-widest text-primary">{{ t('stances.label') }}</p>
      <div class="grid gap-8 md:grid-cols-3">
        <div class="flex flex-col gap-2">
          <h2 class="font-semibold">{{ t('stances.deep.title') }}</h2>
          <p class="text-muted text-sm leading-relaxed">{{ t('stances.deep.body') }}</p>
          <a
            :href="t('stances.deep.bookLink')"
            rel="noopener noreferrer"
            target="_blank"
            class="mt-1 text-xs text-muted italic hover:text-primary"
          >— {{ t('stances.deep.book') }}</a>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="font-semibold">{{ t('stances.ts.title') }}</h2>
          <p class="text-muted text-sm leading-relaxed">{{ t('stances.ts.body') }}</p>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="font-semibold">{{ t('stances.audit.title') }}</h2>
          <p class="text-muted text-sm leading-relaxed">{{ t('stances.audit.body') }}</p>
        </div>
      </div>
    </section>

    <section>
      <p class="text-overline mb-8 tracking-widest text-primary">{{ t('tools.label') }}</p>
      <div class="flex flex-wrap gap-2">
        <a
          v-for="skill in skills"
          :key="skill.title"
          :href="skill.link"
          :title="skill.title"
          rel="noopener noreferrer"
          target="_blank"
          class="group flex w-24 flex-col items-center gap-2 rounded-sm p-3 text-center hover:bg-light"
        >
          <div class="flex h-8 w-8 items-center justify-center">
            <component :is="skill.icon" />
          </div>
          <span class="whitespace-nowrap text-xs text-muted group-hover:text-text">{{ skill.title }}</span>
        </a>
        <div class="flex w-24 flex-col items-center justify-center gap-2 p-3">
          <div class="flex h-8 w-8 items-center justify-center text-muted text-lg leading-none">···</div>
          <span class="text-xs text-muted">& more</span>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
svg {
  width: 2rem;
  height: 2rem;
}
</style>
