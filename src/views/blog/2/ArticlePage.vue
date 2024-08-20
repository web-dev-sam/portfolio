<script setup lang="ts">
import Prism from 'prismjs'
import { useTranslator } from '@/composables/useTranslator'
import TextBadge from '@/components/views/TextBadge.vue'
import { onMounted } from 'vue'

import 'prismjs/components/prism-typescript'
import '@/views/blogs/styles/prism.css'

onMounted(() => {
  Prism.highlightAll()
})

const { t } = useTranslator({
  en: {
    title: "Naming: Every Developer's Nightmare",
    date: 'Apr 18 2023',
  },
})
</script>

<template>
  <main class="mb-16 text-center">
    <div class="!lg:mt-24 !mb-12 !mt-12">
      <img
        class="w-full rounded-lg object-cover"
        src="/assets/blogs/2/cover.jpg"
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
        <span class="text-[1.1em] text-[#af962e]">#</span> javascript
      </TextBadge>
      <TextBadge class="bg-light">
        <span class="text-[1.1em] text-[#2aa1ae]">#</span> programming
      </TextBadge>
      <TextBadge class="bg-light">
        <span class="text-[1.1em] text-[#cc3030]">#</span> tutorial
      </TextBadge>
    </div>
    <div class="content mt-12">
      <div class="space-y-4">
        <p>
          Aah.. naming things. A developer's favorite brain sport, nestled somewhere between
          attending endless meetings and refactoring code. As developers, we know that naming can be
          both a blessing and a curse. It's a critical part of our work, but it can lead to some
          hilarious but most likely frustrating names. In this post, I'll show a way we can think of
          variables and how you can use them effectively. Even if you feel confident naming your
          variables, are you also using their full potential? 🤔
        </p>
        <video
          class="mx-auto max-h-96 rounded-lg"
          src="/assets/blogs/2/jeff.mp4"
          autoplay
          loop
          muted
        ></video>
        <h2>A Naming Pattern to Save the Day</h2>
        <p>
          When you find yourself struggling to name a specific variable, function, or class,
          consider using the following pattern and ask yourself the corresponding questions. The
          pattern is <code>[scope][typePrefix][baseName][qualifier][typeSuffix]</code>.
        </p>
        <ol>
          <li>
            <strong>Scope:</strong>
            <ul>
              <li>
                What is the visibility or accessibility of this variable?
                <em>(e.g., private, public, protected, internal, package-private)</em>
              </li>
              <li>
                Is this variable specific to any programming language features or conventions?
                <em
                  >(e.g., double underscore prefix in Python, dollar sign in jQuery, '@' for
                  instance variables in Ruby)</em
                >
              </li>
              <li>
                Is this variable part of a framework or library that requires a specific naming
                pattern?
                <em
                  >(e.g., Angular's 'ng' prefix for directives, React's 'use' prefix for hooks)</em
                >
              </li>
            </ul>
          </li>
          <li>
            <strong>TypePrefix:</strong>
            <ul>
              <li>
                Is this variable a boolean or a function that returns a boolean?
                <em>(e.g., is, has, contains, are, integrates)</em>
              </li>
              <li>
                Does the variable represent a state, condition, or action that can be described with
                words like "is," "has," "contains," or "integrates"?
                <em>(e.g., isEnabled, hasAccess, containsItem)</em>
              </li>
              <li>
                Is this a function responsible for getting, setting, fetching, or updating data?
                <em>(e.g., get, set, fetch, update, retrieve, store, save)</em>
              </li>
            </ul>
          </li>
          <li>
            <strong>BaseName:</strong>
            <ul>
              <li>
                What is the primary purpose of this variable?
                <em>(e.g., user, distance, payment, errorMessage)</em>
              </li>
              <li>
                Can I describe the variable's role in the code with a clear, concise word or phrase?
                <em>(e.g., registrationStatus, totalPrice, elapsedTime)</em>
              </li>
            </ul>
          </li>
          <li>
            <strong>Qualifier:</strong>
            <ul>
              <li>
                Are there any additional details or context that would help distinguish this
                variable from others with a similar purpose?
                <em>(e.g., firstName, lastName, phoneNumber)</em>
              </li>
              <li>
                Does the variable have specific units or properties that should be included in the
                name, such as "InMeters" or "InSeconds"?
                <em>(e.g., distanceInMiles, timeInSeconds)</em>
              </li>
              <li>
                Is there a specific state or condition that this variable represents, such as
                "Valid" or "Removable"? <em>(e.g., isValidEmail, isRemovableItem)</em>
              </li>
            </ul>
          </li>
          <li>
            <strong>TypeSuffix:</strong>
            <ul>
              <li>
                What is the fundamental purpose or structure of this variable?
                <em>(e.g., Count, Index, Sum, Average, List, Map, Array, Set, Queue)</em>
              </li>
              <li>
                Can the variable's role be clarified by adding a suffix for the structure like
                "Count," "Index," "Sum," "Average," "List," or "Map"?
                <em
                  >(e.g., itemCount, currentIndex, totalPriceSum, ratingAverage, userList,
                  settingsMap)</em
                >
              </li>
            </ul>
          </li>
        </ol>
        <p>Here are 6 examples:</p>
        <ol>
          <li>
            <code>__isUserLoggedIn</code>
            <ul>
              <li>scope: __ (Python private variable)</li>
              <li>typePrefix: is (boolean)</li>
              <li>baseName: User</li>
              <li>qualifier: LoggedIn</li>
            </ul>
          </li>
          <li>
            <code>fetchProductById</code>
            <ul>
              <li>scope: “” (Public methods dont have a specific prefix in most languages)</li>
              <li>typePrefix: fetch (function)</li>
              <li>baseName: Product</li>
              <li>qualifier: ById</li>
            </ul>
          </li>
          <li>
            <code>updateEmailPreference</code>
            <ul>
              <li>scope: “” (public)</li>
              <li>typePrefix: update (function)</li>
              <li>baseName: Email</li>
              <li>qualifier: Preference</li>
            </ul>
          </li>
          <li>
            <code>$distanceInMetersInput</code>
            <ul>
              <li>scope: $ (jQuery variable)</li>
              <li>typePrefix: “”</li>
              <li>baseName: distance</li>
              <li>qualifier: InMeters</li>
              <li>typeSuffix: Input</li>
            </ul>
          </li>
          <li>
            <code>getUserByEmail</code>
            <ul>
              <li>typePrefix: get (function)</li>
              <li>baseName: User</li>
              <li>qualifier: ByEmail</li>
            </ul>
          </li>
        </ol>
        <p>
          There may be times where you need to swap the base name and qualifier in order to give the
          variable a more appropriate and meaningful name. Example:
          <strong>getLoggedInUser</strong> instead of <strong><s>getUserLoggedIn</s></strong
          >.
        </p>
        <ul>
          <li>
            <code>getLoggedInUser</code>
            <ul>
              <li>typePrefix: get (function)</li>
              <li>qualifier: LoggedIn</li>
              <li>baseName: User</li>
            </ul>
          </li>
        </ul>
        <h2>Naming Variables Effectively</h2>
        <p>
          Alright, so you've got a solid plan for naming variables 😎. But that's only half the
          battle. The other half? Comments. But not in the way you're thinking.
        </p>
        <p>
          You might have heard the advice to scatter comments throughout your code to make it more
          understandable, especially for your future self. But, in reality, that's not always the
          best approach.
        </p>
        <video
          class="mx-auto max-h-96 rounded-lg"
          src="/assets/blogs/2/table.mp4"
          autoplay
          loop
          muted
        ></video>
        <p>
          Consider this: if your code is incomprehensible without comments, then the problem isn't a
          lack of comments. And if your code is already clear, then you don't need the comments in
          the first place.
        </p>
        <p>So, what's the point I'm trying to make? Use variables as comments.</p>
        <p>
          When you store everything in a variable with a meaningful name, you can often understand
          the entire code just by reading those names and key control structures like if statements.
          Let me show you an example:
        </p>
        <p>
          The other day, I came across a piece of code that took me about 10 minutes to grasp
          completely 🥴.
        </p>
        <pre><code class="language-javascript" v-html="`if (!row.doc[otherField]) {

let val;

if(currentField == 'left') {
    val = row.doc[currentField].charAt(0) === '-' ? row.doc[currentField].slice(1) : row.doc[currentField];
}

if(currentField == 'right') {
    val = row.doc[currentField].charAt(0) === '-' ? row.doc[currentField] : \`-\${row.doc[currentField]}\`;
}

row.doc[otherField] = val === '-0' ? '0' : val;
row.refreshField(otherField);
}

if (currentField === 'left' && row.doc['left'] && row.doc['left'].charAt(0) !== '-') {
row.doc['left'] = row.doc['left'] === '0' ? row.doc['left'] : \`-\${row.doc['left']}\`;
row.refreshField('left');
}

if (currentField === 'right' && row.doc['right'] && row.doc['right'].charAt(0) === '-') {
row.doc['right'] = row.doc['right'].slice(1);
row.refreshField('right');
}`"></code></pre>
        <p>
          So let's clean it up by putting stuff into variables and giving them meaningful names:
        </p>
        <pre><code class="language-javascript" v-html="`const valueOfOtherField = row.doc[otherField];
const valueOfCurrentField = row.doc[currentField];
const valueOfLeftField = row.doc['left'];
const valueOfRightField = row.doc['right'];
const isCurrentFieldOnLeft = currentField === 'left';
const isCurrentFieldOnRight = currentField === 'right';

const startsWithMinusSign = (str) => str.charAt(0) === '-';
const removeMinusFromZero = (str) => str === '-0' ? '0' : str;
const ensureMinusAtStart = (str) => startsWithMinusSign(str) ? str : \`-\${str}\`;
const removeMinusFromStart = (str) => str.replace(/^-/, '');

if (!valueOfOtherField) {
    let val;
    if (isCurrentFieldOnLeft) {
        val = startsWithMinusSign(valueOfCurrentField) ?
            removeMinusFromStart(valueOfCurrentField) :
            valueOfCurrentField;
    } else if (isCurrentFieldOnRight) {
        val = startsWithMinusSign(valueOfCurrentField) ?
            valueOfCurrentField :
            ensureMinusAtStart(valueOfCurrentField);
    }

    row.doc[otherField] = removeMinusFromZero(val);
    row.refreshField(otherField);
}

if (isCurrentFieldOnLeft && valueOfLeftField && !startsWithMinusSign(valueOfLeftField)) {
    row.doc['left'] = removeMinusFromZero(ensureMinusAtStart(valueOfLeftField));
    row.refreshField('left');
}

if (isCurrentFieldOnRight && valueOfRightField && startsWithMinusSign(valueOfRightField)) {
    row.doc['right'] = removeMinusFromStart(valueOfRightField);
    row.refreshField('right');
}`"></code></pre>
        <p>
          With this change, the code reads almost like plain English. However, upon closer
          inspection, we can identify some unnecessary logic steps that can be removed and
          simplified. Take this line, for example:
        </p>
        <pre><code class="language-javascript" v-html="`val = startsWithMinusSign(valueOfCurrentField) ?
            valueOfCurrentField :
            ensureMinusAtStart(valueOfCurrentField);`"></code></pre>
        <p>
          Logically, it can be further simplified. If the value starts with a minus sign, we keep
          it; otherwise, we add a new minus sign. Essentially, this means we can simply add a minus
          sign at the beginning. So, the line can be simplified to:
        </p>
        <pre><code class="language-javascript" v-html="`val = startsWithMinusSign(valueOfCurrentField) ?
            valueOfCurrentField :
            ensureMinusAtStart(valueOfCurrentField);`"></code></pre>
        <p>
          Logically, it can be further simplified. If the value starts with a minus sign, we keep
          it; otherwise, we add a new minus sign. Essentially, this means we can simply add a minus
          sign at the beginning. So, the line can be simplified to:
        </p>
        <pre><code class="language-javascript" v-html="`val = ensureMinusAtStart(valueOfCurrentField);`"></code></pre>
        <p>
          Assuming the performance of row.refreshField is negligible, the same logic can be applied
          to the if statements by removing the
          <code>&& startsWithMinusSign(valueOfRightField)</code> and
          <code>&& !startsWithMinusSign(valueOfLeftField)</code> conditions. The entire code should
          now look like this:
        </p>
        <pre><code class="language-javascript" v-html="`const valueOfOtherField = row.doc[otherField];
const valueOfCurrentField = row.doc[currentField];
const valueOfLeftField = row.doc['left'];
const valueOfRightField = row.doc['right'];
const isCurrentFieldOnLeft = currentField === 'left';
const isCurrentFieldOnRight = currentField === 'right';

const startsWithMinusSign = (str) => str.charAt(0) === '-';
const removeMinusFromZero = (str) => str === '-0' ? '0' : str;
const ensureMinusAtStart = (str) => removeMinusFromZero(
    startsWithMinusSign(str) ? str : \`-\${str}\`
);
const removeMinusFromStart = (str) => str.replace(/^-/, '');

if (!valueOfOtherField) {

  // If the current input field is on the left, let's remove the minus from the start
  // and if its on the right, let's add the minus at the start. And put it into the
  // other field. (NOTE: In the original code there were exactly two fields, left and right.)
    const newValue = isCurrentFieldOnLeft ?
        removeMinusFromStart(valueOfCurrentField) :
        ensureMinusAtStart(valueOfCurrentField);

    row.doc[otherField] = newValue;
    row.refreshField(otherField);
}

// If the current field is the left one and there is an inputted value then
// make sure to add the minus at the start
if (isCurrentFieldOnLeft && valueOfLeftField) {
    row.doc['left'] = ensureMinusAtStart(valueOfLeftField);
    row.refreshField('left');
}

// If the current field is the right one and there is an inputted value then
// make sure to remove the minus from the start
if (isCurrentFieldOnRight && valueOfRightField) {
    row.doc['right'] = removeMinusFromStart(valueOfRightField);
    row.refreshField('right');
}`"></code></pre>
        <p>
          At this point, we can easily read through the code without tearing our hair out. The code
          accomplishes two main tasks:
        </p>
        <ol>
          <li>
            It ensures that when the user enters values in the left and right fields, the right one
            will always be positive, and the left one will be negative.
          </li>
          <li>
            If one of the fields hasn't been filled in yet, the code copies the value of the current
            input field to the other field.
          </li>
        </ol>
        <p>
          Understanding this behavior with the original code would have been quite challenging.
          However, by using variables more effectively, we can abstract away the complicated syntax
          mess and make the code read more naturally 💪.
        </p>
        <p>
          Let me know what you think in the comments. Maybe you have some more suggestions. If you
          found this post helpful, consider liking it and following for more posts in the future.
          Your support means a lot and encourages me to keep sharing more ❤. Happy coding!
        </p>
        <video
          class="mx-auto max-h-96 rounded-lg"
          src="/assets/blogs/2/thor.mp4"
          autoplay
          loop
          muted
        ></video>
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
