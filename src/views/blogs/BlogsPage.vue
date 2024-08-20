<script setup lang="ts">
import BlogCard from '@/views/blogs/components/BlogCard.vue'
import { useTranslator } from '@/composables/useTranslator'

const { t } = useTranslator({
  en: {
    blogs: 'Blogs',
  },
})
</script>

<template>
  <main class="mb-16 text-center md:text-left">
    <h1 class="!lg:my-32 !my-16 text-center text-h3 font-bold">{{ t('blogs') }}</h1>
    <section class="flex flex-col gap-8">
      <BlogCard
        :name="`Exploring CSS where it doesn't make sense`"
        :description="`Ever felt like CSS is playing tricks on you? Despite its outward simplicity, CSS has layers of complexity that can even confuse the best of developers. Beginners often jump into using CSS without fully understanding the why and how behind its behavior. While it's not a bad practice to jump right in and start experimenting, the nature of CSS will eventually lead to confusion and frustration. 😤`"
        cover="/assets/blogs/3/cover 1x.jpg"
        link="/blog/exploring-css-where-it-doesnt-make-sense"
        date="Feb 23"
      >
      </BlogCard>
      <BlogCard
        :name="`Naming: Every Developer's Nightmare`"
        :description="`Aah.. naming things. A developer's favorite brain sport, nestled somewhere between attending endless meetings and refactoring code. As developers, we know that naming can be both a blessing and a curse. It's a critical part of our work, but it can lead to some hilarious but most likely frustrating names. In this post, I'll show a way we can think of variables and how you can use them effectively. Even if you feel confident naming your variables, are you also using their full potential? 🤔`"
        cover="/assets/blogs/2/cover.webp"
        link="/blog/naming-every-developers-nightmare"
        date="Apr 18 2023"
      >
      </BlogCard>
      <BlogCard
        :name="`Boost Your JavaScript with JSDoc Typing`"
        :description="`There are many reasons why you can't or don't want to use TypeScript in your project. One common reason is that you are using a legacy codebase that is not compatible with TypeScript. Or the switch to TypeScript is harder than everyone tells you. For whatever reason, you are stuck with JavaScript. But that doesnt completely mean you have to give up on the benefits of TypeScript. In this article, we will explore the magic of JSDoc typing, with which you can use most TypeScript features right away. 🧙‍♂️`"
        cover="/assets/blogs/1/cover.webp"
        link="/blog/boost-your-javascript-with-jsdoc-typing"
        date="Apr 8 2023"
      >
      </BlogCard>
    </section>
  </main>
</template>
