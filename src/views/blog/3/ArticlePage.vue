<script setup lang="ts">
import Prism from 'prismjs'
import { useTranslator } from '@/composables/useTranslator'
import TextBadge from '@/components/views/TextBadge.vue'
import { onMounted } from 'vue'

import 'prismjs/components/prism-scss'
import '@/views/blogs/styles/prism.css'

onMounted(() => {
  // CodePen embed script
  const script = document.createElement('script')
  script.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js'
  script.async = true
  document.body.appendChild(script)

  // Code blocks highlighting
  Prism.highlightAll()
})

const { t, lang } = useTranslator({
  en: {
    title: "Exploring CSS where it doesn't make sense",
    date: '23 Feb',
  },
})
</script>

<template>
  <main class="mb-16 text-center">
    <div class="!lg:mt-24 !mb-12 !mt-12">
      <img
        class="w-full rounded-lg object-cover"
        src="/assets/blogs/3/cover 2x.jpg"
        alt="Boost Your JavaScript with JSDoc Typing"
      />
    </div>
    <h1 class="text-center text-h3 font-bold">{{ t('title') }}</h1>
    <span class="mt-4 block text-muted">{{ t('date') }}</span>
    <div class="mt-6 flex justify-center gap-2">
      <TextBadge class="bg-light">
        <span class="text-[1.1em] text-[#c743ff]">#</span> webdev
      </TextBadge>
      <TextBadge class="bg-light">
        <span class="text-[1.1em] text-[#2a20f1]">#</span> css
      </TextBadge>
      <TextBadge class="bg-light">
        <span class="text-[1.1em] text-[#af168b]">#</span> frontend
      </TextBadge>
      <TextBadge class="bg-light">
        <span class="text-[1.1em] text-[#0f801d]">#</span> beginners
      </TextBadge>
    </div>
    <div class="content mt-12">
      <div class="space-y-4">
        <p>
          Ever felt like CSS is playing tricks on you? Despite its outward simplicity, CSS has
          layers of complexity that can even confuse the best of developers. Beginners often jump
          into using CSS without fully understanding the why and how behind its behavior. While it's
          not a bad practice to jump right in and start experimenting, the nature of CSS will
          eventually lead to confusion and frustration. 😤
        </p>
        <p>
          In this article, I want to explore some of the generally more unknown and overlooked
          aspects of CSS. Throughout the article, I'll share common practices to bring your CSS
          under control and avoid falling down the "WTF, how did that happen?" rabbit hole.
        </p>
        <p>I hope you'll find this article helpful no matter your level of expertise.</p>
        <p>Let's get started! 🚀</p>
        <video
          class="mx-auto max-h-96 rounded-lg"
          src="/assets/blogs/3/css.mp4"
          autoplay
          loop
          muted
        ></video>

        <h2>Understanding the core of CSS</h2>
        <p>
          Before we dive into more specific CSS traps, let's have a look at core concepts to build a
          fundamental intuition on how CSS works.
          <em
            >Having the right mental model helps a lot in predicting how CSS will behave in
            different scenarios.</em
          >
        </p>
        <p>
          CSS started as a simple language to style documents. You could write paragraphs, headings,
          and lists, and then style them with CSS. But as the web evolved, so did CSS. With this
          evolution, we had to adapt to more and more requirements of the web. Here are a few
          examples:
        </p>
        <ul>
          <li>
            <strong>Responsive design:</strong> Making sure your website looks good on all screen
            sizes, browsers, and devices.
          </li>
          <li>
            <strong>Reliability:</strong> A small syntax error should not crash your entire website.
          </li>
          <li>
            <strong>Customization:</strong> Users should be able to customize your website to their
            liking. Example: dark mode, font size, etc.
          </li>
          <li>
            <strong>Accessibility:</strong> Making sure your website is accessible to everyone,
            including people with disabilities. Adapting to screen readers, keyboard navigation, and
            more.
          </li>
          <li>
            <strong>Reusability:</strong> Making sure that code is easily reusable as you have
            common components like buttons, inputs, etc.
          </li>
          <li>
            <strong>Looks:</strong> While considering all the above, your website should still look
            good.
          </li>
          <li>
            <strong>Developer experience:</strong> Making sure that developers can write and
            maintain CSS easily and quickly.
          </li>
        </ul>
        <p>
          It's impressive how CSS has evolved to meet these requirements while still being simple to
          write. Most of the time! 😅
        </p>
        <p>
          As you can imagine a lot is going on under the hood. There are so many rules that decide
          what to fall back to when a CSS feature is used in a way that was not intended. These
          fallbacks are decided based on the needs of the web as a whole, and not just your website.
          <em>And this is where the confusion starts.</em>
        </p>
        <p>
          There are so many topics I could cover, but I'll only focus on a few and leave the rest up
          to you. At the end, after you have read this article you can have a look at the resources
          section to learn more.
        </p>

        <h3>Formatting context</h3>
        <p>
          The first core concept I want to talk about is the formatting context. If you have worked
          with CSS for a while, you should already have an intuition about how this works. And even
          if you do you'll benefit from knowing the details behind it.
        </p>
        <p>
          On your website, you have a lot of elements. And each element "behaves" in the context of
          its formatting context. The two main formatting contexts are:
        </p>
        <ul>
          <li>
            <strong>Block formatting context:</strong> In this context, the element will take up the
            entire width of its parent and will start on a new line. These elements are called
            block-level elements. Examples are <code>div</code>, <code>p</code>, <code>h1</code>,
            <code>section</code>, etc.
          </li>
          <li>
            <strong>Inline formatting context:</strong> In this context, the element will only take
            up as much width as it needs and will continue on the same line if there is enough
            space. These elements are called inline-level elements. Examples are <code>span</code>,
            <code>a</code>, <code>strong</code>, <code>em</code>, etc.
            <em
              >You can't change the width or height of inline-level elements nor can you add top and
              bottom margins.</em
            >
          </li>
        </ul>
        <p>
          The main way of defining how an element behaves is the <code>display</code> property. The
          newer syntax is <code>display: &lt;outer> &lt;inner></code>. The outer value can be
          <code>block</code> or <code>inline</code> defining the formatting context of the element.
          The inner value is how children of the element will behave. Example:
          <code>display: inline flex;</code> (Older version for browser support:
          <code>display: inline-flex;</code>). This will place the element in the same line as the
          last element if there is enough space and the children will behave like flex items. Here
          are a few more:
        </p>
        <pre><code class="language-css" v-html="`/* Current */ /* New Syntax */
display: block; /* display: block flow; */
display: inline; /* display: inline flow; */
display: inline-block; /* display: inline flow-root; */
display: flex; /* display: block flex; */
display: inline-flex; /* display: inline flex; */
display: grid; /* display: block grid; */
display: inline-grid; /* display: inline grid; */
display: flow-root; /* display: block flow-root; */`"></code></pre>
        <p>This brings us to the next core concept&hellip;</p>

        <h3>Layout Modes</h3>
        <p>
          The second part of the <code>display</code> property is the layout mode. This is how the
          children of the element will behave. The default and most intuitive layout mode is
          <code>flow</code> (Normal flow). Children in a normal flow layout will simply stack on top
          or next to each other based on the formatting context. This is happening by default when
          you start adding elements to your website. Besides the normal flow, there are a few more
          common layout modes:
        </p>
        <ul>
          <li>
            <strong>Flex layout:</strong> This is a one-dimensional layout. You can align items
            horizontally or vertically. This is great for navigation bars, sidebars, and more. This
            layout has a ton of features and gotchas that deserve an article on their own. If you
            want to learn more check out the resources section.
          </li>
          <li>
            <strong>Grid layout:</strong> This is a two-dimensional layout. You can align items in
            rows and columns. This is great for complex layouts like a dashboard, a gallery, and
            more. This layout also has a ton of features and gotchas that deserve an article on
            their own.
          </li>
          <li>
            <strong>Positioned layout:</strong> This is a layout where you can position elements
            anywhere on the page. This is great for tooltips, modals, and more. While we don't use
            the display property to define this layout, it's still part of the layout modes and
            we'll cover its gotchas later.
          </li>
          <li>
            <strong>Float layout:</strong> This is a layout where you can float elements to the left
            or right of inline-level elements. This is great for wrapping text around images. This
            layout is not used as much anymore and has a lot of gotchas. We'll cover this one too.
          </li>
        </ul>
        <p>
          You probably asked yourself what <code>flow-root</code> is. We will get to that when we
          talk about CSS Gotchas next.
        </p>

        <h2>CSS Gotchas</h2>
        <h3>Margin Collapse</h3>
        <p>
          Margin collapse is when the top and bottom margins of two elements collapse into one
          margin. It was originally intended to make the vertical spacing between your elements more
          consistent. There are a TON of rules that decide whether margins collapse or not. No one
          wants to remember all of them and many don't even know about margin collapse. So it's
          important to know how to avoid it and how to fix it when it happens.
        </p>
        <video
          class="mx-auto max-h-96 rounded-lg"
          src="/assets/blogs/3/collapse.mp4"
          autoplay
          loop
          muted
        ></video>
        <p>Margins collapse happens in the following scenarios (these are not all of the rules):</p>
        <ul>
          <li>The elements are adjacent.</li>
          <li>No padding, border, or clearance separates the two elements.</li>
          <li>
            The elements are in the same formatting context. A new formatting context is created
            when:
            <ul>
              <li>
                You have a float, flex item, grid item, or absolutely positioned element (with
                <code>absolute</code> or <code>fixed</code>).
              </li>
              <li>
                The element has a display of <code>inline-block</code>, <code>flow-root</code>,
                <code>flex</code>, <code>grid</code>, <code>inline-flex</code>,
                <code>inline-grid</code>, and a few more.
              </li>
              <li>
                The element has an overflow other than <code>visible</code> and
                <code>clip</code> (<code>hidden</code>, <code>auto</code>, <code>scroll</code>, or
                <code>overlay</code>).
              </li>
              <li>&hellip;</li>
            </ul>
          </li>
          <li>If one of the elements is empty or its height is zero.</li>
          <li>&hellip;</li>
        </ul>
        <p>
          As you can see you don't want to ever see this list again. So let me just give you an
          interactive example of what margin collapse looks like and how to avoid it.
        </p>
        <p
          class="codepen"
          data-height="600"
          data-default-tab="html,result"
          data-slug-hash="JjzQyPj"
          data-user="web-dev-sam"
          style="
            height: 600px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid;
            margin: 1em 0;
            padding: 1em;
          "
        >
          <span
            >See the Pen
            <a href="https://codepen.io/web-dev-sam/pen/JjzQyPj"> Margin Collapse Demo</a> by Samuel
            Braun (<a href="https://codepen.io/web-dev-sam">@web-dev-sam</a>) on
            <a href="https://codepen.io">CodePen</a>.</span
          >
        </p>
        <p>
          Generally, you shouldn't use margins for everything. When you have a card, section,
          button, header, or any other element where you always want to create space around the
          content but inside the element use padding. Margins are mainly for two things:
        </p>
        <ol>
          <li>Horizontal space between elements. Like icons in text for example.</li>
          <li>
            To create vertical space between sections and paragraphs. Here only use
            <code>margin-top</code> to avoid margin collapsing altogether.
          </li>
        </ol>
        <p>
          A tip for avoiding margin collapse for content sections is to use a "Lobotomized Owl"
          selector. With it, you can add <code>margin-top</code> to all children except the first
          one essentially putting a margin between all children just like the
          <code>gap</code> property of flex.
        </p>
        <pre><code class="language-css" v-html="`/* Add margin-top to all children except the first one */
.section > * + * {
  margin-top: 1rem;
}`"></code></pre>
        <p>
          If you use Tailwind CSS you can use the <code>space-y</code> class to achieve the same
          effect.
        </p>
        <pre><code class="language-html">&lt;div class=&quot;space-y-4&quot;&gt;
  &lt;p&gt;...&lt;/p&gt;
  &lt;p&gt;...&lt;/p&gt;
  &lt;p&gt;...&lt;/p&gt;
&lt;/div&gt;</code></pre>
        <p>
          Another tip is to always check your elements with the developer tools to see where your
          margins end up. And if they collapse and you don't want them to, now you know how to fix
          it (for example by creating a new formatting context with
          <code>display: flow-root;</code>). Often you accidentally create a new formatting context
          and your paddings look like they got bigger. Now you know why.
        </p>
        <h3>Stacking Context</h3>
        <p>
          Visualize a series of nested boxes, where each box can contain several smaller boxes
          inside. Each of these smaller boxes can, in turn, contain even more boxes, creating a
          complex, multi-layered structure. This analogy shows the concept of stacking contexts in
          CSS.
        </p>
        <p>
          In this metaphor, each box represents an element with its own stacking context. The
          <code>z-index</code> property determines the stacking order of elements within their
          particular box. However, it's important to realize that z-index values only apply within
          the same box or stacking context. This means a smaller box nested inside cannot be placed
          above its containing box, regardless of its z-index value. This is where the gotcha comes
          in.
        </p>
        <p>
          Many assume z-index is a universal scale, where higher values always appear on top of
          lower values across the entire page, similar to expecting a small, inner box to sit on top
          all outer boxes if it's marked with a higher number. The reality is that z-index only
          organizes elements within their immediate box or stacking context. An element with a
          z-index of 1000 inside a nested box won't necessarily be above an element with a z-index
          of 1 in another, outer box.
        </p>
        <p>
          This is a common source of confusion, especially when working with complex layouts or
          nested components. I'm sure you've encountered a situation before where you put the
          z-index at 9999999 and it still didn't work. So let's see when these boxes (stacking
          contexts) are created.
        </p>
        <p>Oh no, here we go again 💀:</p>
        <ul>
          <li>The <code>&lt;html></code> element creates a stacking context by default.</li>
          <li>An element with an <code>opacity</code> value less than 1.</li>
          <li>
            An element with one of these properties:
            <code>transform</code>, <code>filter</code>, <code>backdrop-filter</code>,
            <code>perspective</code>, <code>clip-path</code>, <code>mask</code>.
          </li>
          <li>
            An element with a <code>position</code> value <code>absolute</code> or
            <code>relative</code> and <code>z-index</code> value other than <code>auto</code>.
          </li>
          <li>An element with a <code>position</code> value of <code>fixed</code>.</li>
          <li>An element with a <code>mix-blend-mode</code>.</li>
          <li>An element with an <code>isolation</code> value of <code>isolate</code>.</li>
          <li>
            A flex or grid item with a <code>z-index</code> value other than <code>auto</code>.
          </li>
          <li>An element with a <code>will-change</code> value of any of the above properties.</li>
          <li>And a few more&hellip;</li>
        </ul>
        <video
          class="mx-auto max-h-96 rounded-lg"
          src="/assets/blogs/3/flashback.mp4"
          autoplay
          loop
          muted
        ></video>
        <p>
          Oof, that's a lot of ways to create a stacking context. So how can we avoid this? Well,
          you can't really avoid it but you can decrease the chance of fighting with z-index in the
          following ways:
        </p>
        <ul>
          <li>Avoid using <code>position: absolute;</code> just to center elements.</li>
          <li>
            Don't use <code>z-index</code> on non-positioned elements. (Elements without a
            position).
          </li>
          <li>Use consistent z-index values. For example, use only 10, 20, 30, 40, 50, etc.</li>
        </ul>
        <p>
          Lastly, keep stacking context in mind when working with properties like
          <code>opacity</code>, <code>transform</code>, <code>filter</code>, and
          <code>mix-blend-mode</code>.
        </p>
        <h3>Specificity</h3>
        <p>
          In CSS, specificity is the set of rules that determines which style declarations are
          applied to an element when more than one rule could apply. However, complexity in
          specificity can lead to a CSS labyrinth, making it challenging to predict and control
          which styles will win. To understand specificity, consider an example where we have an
          HTML element with both a class and an ID selector applied to it:
        </p>
        <pre><code class="language-css" v-html="`#product-highlight {
  background-color: yellow;
}

.product {
  background-color: blue;
}`"></code></pre>
        <p>
          Despite both styles applying to the same element, the background color will be yellow
          because ID selectors have a higher specificity than class selectors. The same goes for
          complex selectors like <code>.product > .highlight</code> or
          <code>.product.highlight</code>. The former has a higher specificity because it's more
          specific. Most of the time you'll be fine but as your project grows you will run into
          specificity issues more often and the solution is not always simple.
          <em>To avoid these issues, it's best to keep specificity as low as possible.</em>
        </p>
        <p>
          To solve this while keeping CSS readability high you could adopt naming conventions like
          BEM (Block Element Modifier). BEM aims to make CSS more maintainable by reducing
          specificity conflicts through a flat structure of class names. This involves naming your
          CSS classes like this: <code>.block__element--modifier</code>.
        </p>
        <ul>
          <li>
            <strong>Block:</strong> Standalone entity that is meaningful on its own. (Like a card,
            button, or header)
          </li>
          <li>
            <strong>Element:</strong> A part of a block that has no standalone meaning and is
            semantically tied to its block. (Like a title, subtitle, or button text)
          </li>
          <li>
            <strong>Modifier:</strong> A flag on a block or element. Used to change appearance or
            behavior. (Like a button with a primary color or a card with a shadow)
          </li>
        </ul>
        <pre><code class="language-html">&lt;div class=&quot;card card--highlight&quot;&gt;
  &lt;h2 class=&quot;card__title&quot;&gt;Product Name&lt;/h2&gt;
  &lt;p class=&quot;card__description&quot;&gt;Product Description&lt;/p&gt;
&lt;/div></code></pre>
        <pre><code class="language-css" v-html="`.card {
  ...;
}

.card--highlight {
  ...;
}

.card__title {
  ...;
}
.card__description {
  ...;
}`"></code></pre>
        <p>
          By using only class selectors, all selectors have the same specificity level and you won't
          run into specificity issues. Another issue I've often seen is with using SCSS. People
          (especially beginners) often nest their selectors just like their HTML. This wouldn't only
          lead to a specificity nightmare but also to big CSS files. So avoid nesting your selectors
          if you don't benefit from it.
        </p>
        <pre><code class="language-html">&lt;div class=&quot;card card--highlight&quot;&gt;
  &lt;h2 class=&quot;card__title&quot;&gt;Product Name&lt;/h2&gt;
  &lt;p class=&quot;card__description&quot;&gt;Product Description&lt;/p&gt;
&lt;/div></code></pre>
        <pre><code class="language-scss" v-html="`/* I'm sorry but this just hurts to look at */
section {
  .card {
    .title {
      i {
        font-size: 13px;
      }
    }
  }
}`"></code></pre>
        <video
          class="mx-auto max-h-96 rounded-lg"
          src="/assets/blogs/3/burn.mp4"
          autoplay
          loop
          muted
        ></video>
        <h3>Floats</h3>
        <p>
          For the last gotcha, I want to talk about floats. Floats were mainly used to wrap text
          around images. They were also used to create complex layouts before Flexbox and Grid
          became a thing. But nowadays you should avoid using floats as much as possible. They have
          a lot of gotchas and are often misunderstood by newer developers.
        </p>
        <p>
          Floats are often used to just put stuff on the left or right. This might work but will
          lead to headaches later on. Here is what happens when you use floats:
        </p>
        <ul>
          <li>They are removed from the normal flow.</li>
          <li>They are placed to the left or right of only inline-level elements.</li>
          <li>They become block-level elements.</li>
          <li>They create a new formatting context. (Meaning they disallow margin collapse)</li>
          <li>
            They have their own stacking rules (between non-positioned elements and positioned
            elements)
          </li>
        </ul>
        <p>
          As you can see, they do a bit more than just putting stuff on the left or right. If you
          don't intend to absolutely position the element in a way where only inline-level elements
          are affected (like text) don't use floats.
        </p>
        <p>
          <em
            >Instead, use Flexbox or Grid. They are much more powerful and easier to use. For
            aligning inline-level elements use <code>text-align</code> instead.</em
          >
        </p>
        <h3>Conclusion</h3>
        <p>
          I'd love to continue listing more gotchas but
          <em>I want to encourage you to explore the MDN Web Docs</em> on your own. They are
          extremely valuable and when you understand more and more of the underlying concepts of CSS
          you will have fewer and fewer issues writing it. I hope this article was helpful and you
          learned something new 😊.
        </p>
        <p>
          If you have any questions or feedback, feel free to leave a comment. I'd love to hear from
          you. Otherwise, feel free to share this article and give it a like. Thank you for reading
          and happy coding! 🚀
        </p>
        <video
          class="mx-auto max-h-96 rounded-lg"
          src="/assets/blogs/3/cool.mp4"
          autoplay
          loop
          muted
        ></video>
        <h2>Resources</h2>
        <ul>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model"
              target="_blank"
              rel="noopener noreferrer"
              >Box Model</a
            >
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context"
              target="_blank"
              rel="noopener noreferrer"
              >Stacking Context</a
            >
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_mode"
              target="_blank"
              rel="noopener noreferrer"
              >Layout Mode</a
            >
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/display"
              target="_blank"
              rel="noopener noreferrer"
              >Display</a
            >
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing"
              target="_blank"
              rel="noopener noreferrer"
              >Margin Collapse</a
            >
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block"
              target="_blank"
              rel="noopener noreferrer"
              >Containing Block</a
            >
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity"
              target="_blank"
              rel="noopener noreferrer"
              >Specificity</a
            >
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/float"
              target="_blank"
              rel="noopener noreferrer"
              >Float</a
            >
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox"
              target="_blank"
              rel="noopener noreferrer"
              >Flexbox</a
            >
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids"
              target="_blank"
              rel="noopener noreferrer"
              >Grid</a
            >
          </li>
          <li>
            <a href="https://getbem.com/introduction/" target="_blank" rel="noopener noreferrer"
              >BEM</a
            >
          </li>
          <li>
            <a
              href="https://css-tricks.com/lobotomized-owls/"
              target="_blank"
              rel="noopener noreferrer"
              >Lobotomized Owl</a
            >
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped>
h2 {
  @apply !mt-12 mb-3 text-h4 font-bold;
}

h3 {
  @apply !mt-8 mb-2 text-h5 font-bold;
}

ol {
  @apply my-2 ml-4 list-inside list-decimal;
}

ul {
  @apply my-2 ml-4 list-inside list-disc;
}

a {
  @apply underline;
}

pre {
  border: none !important;
  background-color: #141414 !important;
}

:not(pre) > code {
  @apply text-nowrap rounded bg-light px-2 py-1;
}

.content {
  @apply text-center leading-8 sm:text-justify;
}
</style>
