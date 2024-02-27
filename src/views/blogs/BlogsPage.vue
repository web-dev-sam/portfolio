<script setup lang="ts">
import BlogCard from '@/views/blogs/components/BlogCard.vue'
import { useTranslator } from '@/composables/useTranslator'

const { t, lang } = useTranslator({
  en: {
    blogs: 'Blogs',
  },
  de: {
    blogs: 'Blogs',
  },
})
</script>

<template>
  <main class="mb-16 text-center md:text-left">
    <h1 class="!lg:my-32 !my-16 text-center text-h3 font-bold">{{ t('blogs') }}</h1>
    <section class="flex flex-col gap-8">
      <BlogCard
        :name="
          lang === 'en'
            ? `Exploring CSS where it doesn't make sense`
            : `CSS erkunden, wo es keinen Sinn ergibt`
        "
        :description="
          lang === 'en'
            ? `Ever felt like CSS is playing tricks on you? Despite its outward simplicity, CSS has layers of complexity that can even confuse the best of developers. Beginners often jump into using CSS without fully understanding the why and how behind its behavior. While it's not a bad practice to jump right in and start experimenting, the nature of CSS will eventually lead to confusion and frustration. 😤`
            : `Hast du dich jemals gefühlt, als würde CSS dir Streiche spielen? Trotz seiner äußeren Einfachheit besitzt CSS Schichten von Komplexität, die selbst die besten Entwickler verwirren können. Anfänger stürzen sich oft ohne vollständiges Verständnis für das Warum und Wie hinter seinem Verhalten in die Nutzung von CSS. Obwohl es keine schlechte Praxis ist, direkt einzusteigen und zu experimentieren, wird die Natur von CSS letztendlich zu Verwirrung und Frustration führen. 😤`
        "
        cover="/assets/blogs/3/cover 1x.jpg"
        link="/blog/exploring-css-where-it-doesnt-make-sense"
        date="Feb 23"
      >
      </BlogCard>
      <BlogCard
        :name="
          lang === 'en'
            ? `Naming: Every Developer's Nightmare`
            : `Benennen: Der Alptraum jeden Entwicklers`
        "
        :description="
          lang === 'en'
            ? `Aah.. naming things. A developer's favorite brain sport, nestled somewhere between attending endless meetings and refactoring code. As developers, we know that naming can be both a blessing and a curse. It's a critical part of our work, but it can lead to some hilarious but most likely frustrating names. In this post, I'll show a way we can think of variables and how you can use them effectively. Even if you feel confident naming your variables, are you also using their full potential? 🤔`
            : `Aah.. Dinge benennen. Der Lieblingsgehirnsport eines Entwicklers, irgendwo zwischen endlosen Meetings und Code-Refactoring angesiedelt. Als Entwickler wissen wir, dass das Benennen sowohl ein Segen als auch ein Fluch sein kann. Es ist ein kritischer Teil unserer Arbeit, aber es kann zu einigen lustigen, aber höchstwahrscheinlich frustrierenden Namen führen. In diesem Beitrag werde ich eine Methode vorstellen, wie wir über Variablen nachdenken können und wie Sie sie effektiv nutzen können. Selbst wenn Sie sich beim Benennen Ihrer Variablen sicher fühlen, nutzen Sie auch ihr volles Potenzial? 🤔`
        "
        cover="/assets/blogs/2/cover.webp"
        link="/blog/naming-every-developers-nightmare"
        date="Apr 18 2023"
      >
      </BlogCard>
      <BlogCard
        :name="
          lang === 'en'
            ? `Boost Your JavaScript with JSDoc Typing`
            : `Boosten Sie Ihr JavaScript mit JSDoc`
        "
        :description="
          lang === 'en'
            ? `There are many reasons why you can't or don't want to use TypeScript in your project. One common reason is that you are using a legacy codebase that is not compatible with TypeScript. Or the switch to TypeScript is harder than everyone tells you. For whatever reason, you are stuck with JavaScript. But that doesnt completely mean you have to give up on the benefits of TypeScript. In this article, we will explore the magic of JSDoc typing, with which you can use most TypeScript features right away. 🧙‍♂️`
            : `Es gibt viele Gründe, warum man TypeScript in seinem Projekt nicht verwenden kann oder möchte. Ein häufiger Grund ist, dass man eine ältere Codebasis verwendet, die nicht mit TypeScript kompatibel ist. Oder der Umstieg auf TypeScript ist schwieriger, als alle sagen. Aus welchem Grund auch immer, man bleibt bei JavaScript hängen. Aber das bedeutet nicht vollständig, dass man auf die Vorteile von TypeScript verzichten muss. In diesem Artikel werden wir die Magie der JSDoc-Typisierung erkunden, mit der man die meisten TypeScript-Funktionen sofort nutzen kann. 🧙‍♂️`
        "
        cover="/assets/blogs/1/cover.webp"
        link="/blog/boost-your-javascript-with-jsdoc-typing"
        date="Apr 8 2023"
      >
      </BlogCard>
    </section>
  </main>
</template>
