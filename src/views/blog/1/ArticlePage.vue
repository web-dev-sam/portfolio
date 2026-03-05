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
    title: 'Boost Your JavaScript with JSDoc Typing',
    date: 'Apr 8 2023',
  },
})
</script>

<template>
  <main class="article mb-16 text-center">
    <div class="mt-12! mb-12! lg:mt-24!">
      <img
        class="w-full rounded-lg object-cover"
        src="/assets/blogs/1/cover.jpg"
        alt="Boost Your JavaScript with JSDoc Typing"
      />
    </div>
    <h1 class="text-center text-h3 font-bold">{{ t('title') }}</h1>
    <span class="mt-4 block text-muted">{{ t('date') }}</span>
    <div class="mt-6 flex justify-center gap-2">
      <TextBadge class="bg-light">
        <span class="text-[1.1em] text-[#dbb418]">#</span> javascript
      </TextBadge>
      <TextBadge class="bg-light">
        <span class="text-[1.1em] text-[#1859db]">#</span> typescript
      </TextBadge>
      <TextBadge class="bg-light">
        <span class="text-[1.1em] text-[#8d7619]">#</span> tutorial
      </TextBadge>
      <TextBadge class="bg-light">
        <span class="text-[1.1em] text-[#db5c18]">#</span> tooling
      </TextBadge>
    </div>
    <div class="content mt-12">
      <div class="space-y-4">
        <p>
          There are many reasons why you can't or don't want to use TypeScript in your project. One
          common reason is that you are using a legacy codebase that is not compatible with
          TypeScript. Or the switch to TypeScript is harder than everyone tells you. For whatever
          reason, you are stuck with JavaScript. But that doesnt completely mean you have to give up
          on the benefits of TypeScript. In this article, we will explore the magic of JSDoc typing,
          with which you can use most TypeScript features right away. 🧙‍♂️
        </p>
        <p>So let's dive in! 🏊‍♂️</p>
        <video
          class="mx-auto max-h-96 rounded-lg"
          src="/assets/blogs/1/water.mp4"
          autoplay
          loop
          muted
        ></video>
        <p>
          This is my first blog post so I really appreciate any feedback you have. If you have any
          questions or suggestions, feel free to leave a comment below.
        </p>
        <p>Here is an overview of the topics I'll cover in this post:</p>
        <ol>
          <li>
            <strong>TypeScript Types:</strong> Here, we'll see how TypeScript types can be used in
            JSDoc. Don't worry if you're not familiar with TypeScript. I'll explain everything you
            need to know.
          </li>
          <li>
            <strong>More JSDoc Goodness:</strong> After we've covered how to add types to your
            project, we'll take a look at some of the other features that JSDoc has to offer.
          </li>
          <li>
            <strong>JSDoc in Practice:</strong> Now you know JSDocs power and want to use it in your
            project. But how do you start? In this section, we'll take a look at how to set up
            VSCode to give us the best experience with JavaScript typing.
          </li>
          <li>
            <strong>Best Practices:</strong> Finally, we'll take a look at some best practices for
            using JSDoc in your project.
          </li>
        </ol>
        <h2>TypeScript Types</h2>
        <h3>String, number, boolean, etc. 🎭</h3>
        <p>
          In TypeScript, the most common types are primitive types. These types are special because
          they represent the lowest level building blocks of the language. It's important to write
          primitive types in lowercase as it helps avoid confusion with classes or interfaces. For
          example, if you were to use <code>String</code> instead of <code>string</code>, it might
          be mistaken for the global <code>String</code> constructor, leading to potential confusion
          and bugs. You can read more about this on the
          <a
            href="https://javascript.info/primitives-methods#a-primitive-as-an-object"
            target="_blank"
            rel="noopener noreferrer"
          >
            Modern JavaScript Tutorial</a
          >.
        </p>
        <pre><code class="language-typescript" v-html="`// TypeScript
const name: string = 'John Doe';
const age: number = 25;
const average: number = 3.14;
const isActive: boolean = true;
const nullable: number | null = null;
const unassigned: string | undefined;

// JavaScript JSDoc
/** @type {string} */
const name = 'John Doe';

/** @type {number} */
const age = 25;

/** @type {number} */
const average = 3.14;

/** @type {boolean} */
const isActive = true;

/** @type {number | null} */
let nullable = null;
nullable = 5;

/** @type {string | undefined} */
let unassigned;
unassigned = 'John Doe';`"></code></pre>
        <p>
          Note that JSDoc comments start with two asterisks <code>/**</code> and end with a regular
          asterisk followed by a forward slash <code>*/</code>. If a comment block starts with a
          single asterisk, it will be treated as a regular comment and will not be parsed by JSDoc.
          To add a JSDoc comment, simply place the comment block directly before the code element
          you want to document.
        </p>
        <h3>Arrays and tuples 🍱</h3>
        <p>
          Arrays and tuples in TypeScript help you handle lists of items. There are two ways of
          typing them in JSDoc. The first is to use the <code>[]</code> syntax, which is the most
          common and widely accepted. The second is to use the <code>Array</code> generic type,
          which is less common.
        </p>
        <pre><code class="language-typescript" v-html="`// arrays
const numbers: number[] = [1, 2, 3];
const names: Array&lt;string&gt; = ['John', 'Jane', 'Doe'];`"></code></pre>
        <p>
          Though the <code>[]</code> syntax is simpler and easier to read, it becomes harder to read
          when we have multidimensional arrays or complex types. In such cases, the
          <code>Array</code> generic type is more readable. In the end, it's a matter of personal
          preference so you can choose whichever you prefer.
        </p>
        <pre><code class="language-typescript" v-html="`// More readable as Array<Array<number>> since it
// clearly shows the nesting structure which makes
// it easier to visualize the array in our heads
const matrix: Array<Array<number>> = [[1, 2], [3, 4]];
const matrix: number[][] = [[1, 2], [3, 4]];

// Using JSDoc
/** @type {number[][]} */
const numbers = [[1, 2], [3, 4]];

/** @type {Array<Array<number>>} */
const numbers = [[1, 2], [3, 4]];`"></code></pre>
        <p>
          Tuples are similar to arrays, but they have a fixed length and each element has a specific
          type. They are useful when you want to represent a value with a fixed number of elements,
          where each element has a specific type. For example, you can use a tuple to represent a
          coordinate in a 2D plane, where the first element is the x-coordinate and the second
          element is the y-coordinate:
        </p>
        <pre><code class="language-typescript" v-html="`// tuples
const coordinates: [number, number] = [40.7128, -74.0060];
const person: [string, number] = ['John Doe', 30];

// Using JSDoc
/** @type {[number, number]} */
const coordinates = [40.7128, -74.0060];

/** @type {[string, number]} */
const person = ['John Doe', 30];`"></code></pre>
        <h3>Objects and interfaces 🏢</h3>
        <p>
          TypeScript allows you to define the structure of objects using object types and
          interfaces. Use the inline object type syntax <code>{ property: Type }</code> to define an
          object type when the structure is simple and not likely to be reused across your codebase.
          If you have a complex type or expect the same structure to be reused multiple times
          throughout your codebase, it becomes increasingly difficult to maintain types which makes
          it easier to introduce bugs. In such cases, it's better to use the
          <code>interface</code> keyword to define reusable object types. Inline object types are
          more suitable when you want to create ad-hoc types for specific functions or components
          without cluttering your code with separate interface declarations.
        </p>
        <pre><code class="language-typescript" v-html="`// inline object typing
const user: { name: string; age: number } = {
  name: 'John Doe',
  age: 25,
};

// interface typing
interface User {
  name: string;
  age: number;
}
const user: User = { name: 'John Doe', age: 25 };

// Using JSDoc
/** @type {{ name: string; age: number }} */
const user = { name: 'John Doe', age: 25 };

/** @type {User} */
const user = { name: 'John Doe', age: 25 };`"></code></pre>
        <p>
          We can define interfaces and custom types in JSDoc using the <code>@typedef</code> tag.
          The tag is followed by the type and the name we want to assign it. There are two ways to
          define the type: The first is to use the <code>@property</code> tag to define each
          property of the type. This allows you to give each property a description revealing more
          information about the property, its purpose and how it should be used. The second is to
          use the <code>@typedef</code> tag to define the type inline. The second method is more
          concise and easier to read, but it doesn't allow you to add descriptions to each property.
        </p>
        <pre><code class="language-typescript" v-html="`// Using @property tag
/**
 * @typedef {Object} User
 * @property {string} name The user's full name.
 * @property {number} age The user's age in days. We use days
 *  instead of years to avoid dealing with leap years.
 */
/** @type {User} */
const user = { name: 'John Doe', age: 25 };

// Using inline type definition
/** @typedef {{ name: string; age: number }} User */
const user = { name: 'John Doe', age: 25 };`"></code></pre>
        <h3>Optional properties 📝</h3>
        <p>
          To mark properties as optional, add a question mark <code>?</code> after the property
          name. This tells TypeScript that the property may or may not be present in the object. You
          can use the <code>@property</code> tag to mark a property as optional in JSDoc by wrapping
          the property name in square brackets <code>[property]</code>.
        </p>
        <pre><code class="language-typescript" v-html="`// Using optional properties
interface User {
  name: string;
  age?: number;
}

// Using @property tag
/**
 * @typedef {Object} User
 * @property {string} name The user's full name.
 * @property {number} [age] The user's age.
 */`"></code></pre>
        <h3>Enums and unions 🎲</h3>
        <p>
          TypeScript introduces enums and unions to help you manage a set of named constants and
          combine multiple types, respectively. JavaScript doesn't have enums, but we can tell JSDoc
          to treat a regular object as an enum by using the <code>@enum</code> tag. The
          <code>@typedef</code> tag can be used to define a union type. You could also use the type
          <code>Record&lt;string, string></code> to define an enum, but the <code>@enum</code> tag
          is more concise and readable. More on utility types later.
        </p>
        <pre><code class="language-typescript" v-html="`// enums
/** @enum {string} */
const Color = {
  Red: 'red',
  Green: 'green',
  Blue: 'blue',
  Age: 42, // Error: Type 'number' is not assignable to type 'string'
};

/** @type {Color} */
const color = Color.Red;

// unions
/** @typedef {string | number} StringOrNumber */
/** @type {StringOrNumber} */
let value = 'Hello'; // Can be a string
value = 42; // Or a number`"></code></pre>
        <h3>Type aliases 🏷️</h3>
        <p>
          Type aliases are a way to create a new name for an existing type. They can be used to
          improve code readability and maintainability by giving a more meaningful name to a complex
          type. In TypeScript, there is the <code>type</code> keyword to create type aliases. In
          JSDoc however, you can use the <code>@typedef</code> tag we have seen before to define a
          type alias.
        </p>
        <pre><code class="language-typescript" v-html="`// In TypeScript
type Age = number;
type Name = string;
type User = { name: Name; age: Age };

const user: User = { name: 'John Doe', age: 25 };

// Using JSDoc
/** @typedef {number} Age */
/** @typedef {string} Name */
/** @typedef {{ name: Name; age: Age }} User */

/** @type {User} */
const user = { name: 'John Doe', age: 25 };`"></code></pre>
        <h3>Literal types 🔠</h3>
        <p>
          Literal types in TypeScript are a way to define types that can only be of a specific
          value. They can be used with strings, numbers, or booleans. To create a literal type,
          simply use the desired value as the type.
        </p>
        <pre><code class="language-typescript" v-html="`// In TypeScript
type Red = 'red';
type Blue = 'blue';
type Green = 'green';
type Color = Red | Blue | Green;

const color: Color = 'red'; // Allowed
color = 'yellow'; // Error: Type 'yellow' is not assignable to type 'Color'

// In JSDoc
/** @typedef {'red' | 'blue' | 'green'} Color */
/** @type {Color} */
const color3 = 'red'; // Allowed
color3 = 'yellow'; // Error: Type 'yellow' is not assignable to type 'Color'`"></code></pre>
        <h3>Utility types 🧰</h3>
        <p>
          TypeScript provides a set of predefined utility types that can help you manipulate and
          transform types. This way you can create new types based on existing types. Some of the
          most common are <code>Partial</code>, <code>Readonly</code>, <code>Record</code>,
          <code>Pick</code> and <code>Omit</code>. But there are many more available and you can
          find a list in the
          <a
            href="https://www.typescriptlang.org/docs/handbook/utility-types.html"
            target="_blank"
            rel="noopener noreferrer"
            >TypeScript documentation</a
          >.
        </p>
        <pre><code class="language-typescript" v-html="`interface User {
  name: string;
  age: number;
}

// Partial: Make all properties in User optional
type PartialUser = Partial<User>;
// {
//   name?: string | undefined;
//   age?: number | undefined;
// }

// Readonly: Make all properties in User readonly
type ReadonlyUser = Readonly<User>;
// {
//   readonly name: string;
//   readonly age: number;
// }

// Record: Create a new type with keys from a union and values of a specific type
type UserRole = 'admin' | 'user';
type Roles = Record<UserRole, boolean>;
// {
//   admin: boolean;
//   user: boolean;
// }

// Pick: Create a new type by picking specific properties from another type
type UserWithoutAge = Pick<User, 'name'>;
// {
//   name: string;
// }

// Omit: Create a new type by omitting specific properties from another type
type UserWithoutName = Omit<User, 'name'>;
// {
//   age: number;
// }`"></code></pre>
        <p>These utility types can be used in JSDoc like this:</p>
        <pre><code class="language-typescript" v-html="`/** @typedef {{ name: string; age: number }} User */
/** @typedef {Partial<User>} PartialUser */
/** @typedef {Readonly<User>} ReadonlyUser */
/** @typedef {Record<'admin' | 'user', boolean>} Roles */
/** @typedef {Pick<User, 'name'>} UserWithoutAge */
/** @typedef {Omit<User, 'name'>} UserWithoutName */`"></code></pre>
        <h3>Generics 🧬</h3>
        <p>
          Generics are a way to create reusable components that can work with a variety of types.
          They allow you to define a dynamic type that can be used in multiple places with different
          types. Sounds very complex, but you can think of them as a function parameter where the
          type you want to create is the function and the generic type is the parameter. The
          function/type then uses the generic type to create a new type. To create one, use the
          <code>&lg;></code> syntax and specify the name of it. You can then use the generic in the
          type definition. To specify multiple generic types use a comma-separated list. In the
          following example <code>T</code> and <code>U</code> are the generic types.
        </p>
        <pre><code class="language-typescript" v-html="`// In TypeScript
type TypeT<T> = T;
type TypeTorU<T, U> = T | U;
type TypeBoolean = TypeT<boolean>;
type TypeStringOrNumber = TypeTorU<string, number>;

const value: TypeStringOrNumber = 'Hello'; // Allowed
const value2: TypeBoolean = true; // Allowed

// In JSDoc
/**
 * @template T
 * @typedef {T} TypeT
 */
/**
 * @template T,U
 * @typedef {T | U} TypeTorU
 */
/** @typedef {TypeT<boolean>} TypeBoolean */
/** @typedef {TypeTorU<string, number>} TypeStringOrNumber */`"></code></pre>
        <h3>Mapped types 🗺️</h3>
        <p>
          Mapped types allow you to create new types by transforming the properties of existing
          types. You can think of them as you would think of the <code>map</code> array method in
          JavaScript. They can be particularly useful when you want to modify the shape of an object
          type based on a set of keys or apply specific transformations to the properties of a type.
          To create a mapped type, use the <code>in</code> and <code>keyof</code> keywords within a
          type definition.
        </p>
        <p>
          The <code>in keyof</code> keywords are used to iterate over the keys of a type.
          <code>P</code> represents the keys of <code>T</code> and <code>T[P]</code> is the type of
          the property <code>P</code> in <code>T</code>:
        </p>
        <pre><code class="language-typescript" v-html="`type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

interface User {
  name: string;
  age: number;
}

type NullableUser = Nullable<User>;
// {
//   name: string | null;
//   age: number | null;
// }`"></code></pre>
        <p>
          In JSDoc, you can use the <code>@template</code> tag to define a generic and the
          <code>@typedef</code> tag to define a mapped type.
        </p>
        <pre><code class="language-typescript" v-html="`/**
 * @template T
 * @typedef {{ [P in keyof T]: T[P] | null }} Nullable<T>
 */

/** @typedef {{ name: string; age: number }} User */
/** @typedef {Nullable<User>} NullableUser */
// {
//   name: string | null;
//   age: number | null;
// }`"></code></pre>
        <h3>Conditional types 🌓</h3>
        <p>
          Conditional types in TypeScript enable you to create types based on conditions, allowing
          for more flexible and dynamic typing. You can think of them as you would think of the if
          statement in JavaScript. They use the ternary operator syntax within a type definition.
          <code>extends</code> is used to define the condition, and <code>?</code> and
          <code>:</code> are used to define the types that will be returned if the condition is true
          or false, respectively.
        </p>
        <pre><code class="language-typescript" v-html="`type IsString<T> = T extends string ? 'yes' : 'no';

type A = IsString<string>; // 'yes'
type B = IsString<number>; // 'no'
// A and B are now literal types of 'yes' and 'no', respectively

// JSDoc
/**
 * @template T
 * @typedef {T extends string ? 'yes' : 'no'} IsString<T>
 */
/** @typedef {IsString<string>} A */ // 'yes'
/** @typedef {IsString<number>} B */ // 'no'`"></code></pre>
        <h3>Indexed access types 🔍</h3>
        <p>
          For the last type feature, we'll explore indexed access types. Indexed access types allow
          you to access the type of a property in another type. They can be helpful when you want to
          extract the type of a specific property or create more complex types based on the
          properties of existing types.
        </p>
        <pre><code class="language-typescript" v-html="`interface User {
  name: string;
  age: number;
}

type UserName = User['name']; // string
type UserAge = User['age']; // number

// JSDoc
/** @typedef {{ name: string; age: number }} User */
/** @typedef {User['name']} UserName */ // string
/** @typedef {User['age']} UserAge */ // number`"></code></pre>
        <h3>Casting Types 🎭</h3>
        <p>
          Now that we have experienced the glory of TypeScript, let's see how we can use type
          casting to tell the compiler that you know better than it does. It can be useful when you
          want to override the type inference of the compiler. To cast a type, use the
          <code>@type</code> tag and specify the type you want to cast to. Note that you have to put
          the expression you want to cast in parentheses.
        </p>
        <pre><code class="language-typescript" v-html="`const input = document.querySelector('input[type=text]');

// TypeScript infers the type of input to be \`Element | null\`
// But now if we try to access a property that is not available
// on \`Element\`, we get an error

if (input) {
  input.value; // ERROR: Property 'value' does not exist on type 'Element'
}

// To fix this we can cast the type to \`HTMLInputElement\` like this:
if (input) {
  const value = /** @type {HTMLInputElement} */ (input).value;
  // Now TypeScript knows that the type of \`value\` is \`string\`
}`"></code></pre>
        <p>
          With these powerful features, you can create dynamic and expressive types. One last thing
          I want to mention before moving on, is that you can install libraries with which you can
          add more types to your project like
          <a
            href="https://github.com/sindresorhus/type-fest"
            target="_blank"
            rel="noopener noreferrer"
            >type-fest</a
          >
          or
          <a
            href="https://github.com/piotrwitek/utility-types"
            target="_blank"
            rel="noopener noreferrer"
            >utility-types</a
          >. These libraries contain a lot of useful types that you can use in your project.
        </p>
        <p>
          Great!!! Now that we've explored the different type features that TypeScript has to offer,
          let's see what else we can do with JSDoc.
        </p>
        <video
          class="mx-auto max-h-96 rounded-lg"
          src="/assets/blogs/1/burn.mp4"
          autoplay
          loop
          muted
        ></video>
      </div>
      <div class="space-y-4">
        <h2>More JSDoc Goodness 📚</h2>
        <p>
          There are a few more JSDoc tags that you should know about. These tags are not directly
          related to types, but they can still be useful when you're working with JSDoc. So let's
          take a look at them.
        </p>
        <h3>Quick recap 📝</h3>
        <ul>
          <li><code>@type</code> is used to define the type of a variable.</li>
          <li><code>@typedef</code> is used to define a type alias.</li>
          <li>
            <code>@property</code> or <code>@prop</code> is used to define the properties of an
            object.
          </li>
          <li><code>@template</code> is used to define a generic.</li>
          <li><code>@enum</code> is used to define an enum.</li>
          <li><code>@param</code> is used to define the parameters of a function.</li>
          <li>
            <code>@returns</code> or <code>@return</code> is used to define the return type of a
            function.
          </li>
        </ul>
        <p>Let's continue with some more tags.</p>
        <h3>The see and link tags</h3>
        <p>
          The <code>@see</code> and <code>@link</code> tags help you connect different parts of your
          documentation. Use the <code>@see</code> tag when you want to point to related items like
          classes or types. The <code>@link</code> tag is for linking to other documents that aren't
          directly connected to what you're currently documenting. You can use both tags to link to
          things inside your project or to other resources online.
        </p>
        <p>
          With the <code>@link</code> tag, you can also direct readers to a specific section in the
          documentation or a particular line of code. To link to a section, use the # symbol
          followed by the section name. To link to a line of code, use the <code>#L</code> symbol
          and add the line number you want to point to. To reference multiple lines of code, use the
          <code>-</code> symbol to separate the start and end line numbers (e.g.
          <code>#L6-L13</code>).
        </p>
        <pre><code class="language-typescript" v-html="`/** @typedef {{ name: string; age: number }} Person */
/**
 * @see {Person}
 * @see {@link https://webry.com}
 * @link https://github.com/sindresorhus/type-fest#install
 * @link https://github.com/sindresorhus/type-fest/blob/main/source/primitive.d.ts#L6-L13
 */`"></code></pre>
        <h3>The example tag</h3>
        <p>
          The <code>@example</code> tag is used to add examples to your documentation. You can use
          it to show how to use a function or to show how a certain type works. You can also use it
          to show how to use a library or to show how to use a specific feature of a library.
        </p>
        <pre><code class="language-typescript" v-html="`/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @example
 * add(1, 2) // 3
 */`"></code></pre>
        <h3>The summary and description tags</h3>
        <p>
          The <code>@summary</code> tag is used to add a short description to your documentation.
          It's used to give a quick overview of what the item you're documenting does. The
          <code>@description</code> tag is used to add a longer description to your documentation.
          It's used to give more detailed information about the item you're documenting.
        </p>
        <pre><code class="language-typescript" v-html="`/**
 * @summary Adds two numbers together.
 * @description This function adds two numbers together and returns the result.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */`"></code></pre>
        <h3>Formatting of JSDoc comments 🎨</h3>
        <p>
          You can use Markdown in your JSDoc comments. This means that you can use headings, lists,
          and other Markdown features to make your documentation more readable. You can also use
          some HTML tags like <code>&lt;br></code> to add more styling to your documentation.
        </p>
        <pre><code class="language-typescript" v-html="`/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @example
 * ### Example usage
 * You can use this **function** _like_ ~this~:
 *\`\`js
 * add(1, 2) // 3
 * \`\`
 */
function add(a, b) {
    return a + b;
}`"></code></pre>
        <p>
          You can also use more complex Markdown features like lists and tables. Check out the
          <a
            href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
            target="_blank"
            rel="noopener noreferrer"
            >Markdown Cheatsheet</a
          >
          from Adam Pritchard for more information.
        </p>
        <h3>Other JSDoc tags 📚</h3>
        <p>There are a few other JSDoc tags that you may find useful:</p>
        <ul>
          <li><code>@function</code> or <code>@func</code>: Documents a function or method.</li>
          <li><code>@class</code>: Documents a class constructor.</li>
          <li>
            <code>@constructor</code>: Indicates that a function is a constructor for a class.
          </li>
          <li>
            <code>@extends</code> or <code>@augments</code>: Indicates that a class or type extends
            another class or type.
          </li>
          <li><code>@implements</code>: Indicates that a class or type implements an interface.</li>
          <li>
            <code>@namespace</code>: Groups related items, such as functions, classes, or types,
            under a common namespace.
          </li>
          <li>
            <code>@memberof</code>: Specifies that an item belongs to a class, namespace, or module.
          </li>
          <li>
            <code>@ignore</code>: Tells JSDoc to exclude an item from the generated documentation.
          </li>
          <li>
            <code>@deprecated</code>: Marks a function, class, or property as deprecated, indicating
            it should no longer be used.
          </li>
          <li>
            <code>@since</code>: Documents the version when an item was introduced. And many more.
            You can find a full list of JSDoc tags
            <a href="https://jsdoc.app/" target="_blank">here</a>.
          </li>
        </ul>
        <p>Ok ok, enough of the theory. Let's see how we can use JSDoc in practice.</p>
        <video
          class="mx-auto max-h-96 rounded-lg"
          src="/assets/blogs/1/lamp.mp4"
          autoplay
          loop
          muted
        ></video>
      </div>
      <div class="space-y-4">
        <h2>Using JSDoc in practice 🏄‍♂️</h2>
        <p>
          There are a few challenges when starting to use JSDoc in your project. So this section
          will focus on these challenges and how you can overcome them.
        </p>
        <h3>How to get the most out of JSDoc</h3>
        <p>
          In this post I'm going to stick with VSCode. If you're using another editor, you can still
          follow along, but you might have to look up how to configure things in your editor.
        </p>
        <p>
          VSCode has built-in support for JSDoc. This means that you can get a lot of the JSDoc
          benefits without having to install any additional extensions. But there are a few things
          that you can do to get even more out of JSDoc. Enabling the checkJs option in your
          <code>jsconfig.json</code> file will make the editor display errors for type mismatches,
          even in JavaScript files. Place it in the root of your project or in the folder where you
          want to enable type checking. This file can look like this:
        </p>
        <pre><code class="language-typescript" v-html="`{
  &quot;compilerOptions&quot;: {
    &quot;checkJs&quot;: true,
  }
}`"></code></pre>
        <p>
          To apply this option across all your projects, access the VSCode settings by pressing
          <code>cmd + ,</code>, search for checkJs, and enable it there. For more strict type
          checking, consider enabling other options in your jsconfig, such as
          <code>strict</code> and <code>noImplicitAny</code>.
        </p>
        <p>
          <code>strict</code> enforces a set of stricter type checking rules, which can help
          identify potential issues in your code. When this option is enabled, the following
          type-related flags are set to true as of the time of writing this post:
        </p>
        <ul>
          <li>
            <strong>noImplicitAny</strong>: This will cause an error to be reported when an
            expression or declaration has an implied any type. If you don't specify a type for a
            variable, it will be inferred as any and you'll get an error.
          </li>
          <li>
            <strong>noImplicitThis</strong>: If TypeScript can't determine the type of this, it will
            report an error.
          </li>
          <li>
            <strong>alwaysStrict</strong>: Treats all files as if they have the strict mode
            directive ("use strict") at the top of the file.
          </li>
          <li>
            and other options like <strong>strictBindCallApply</strong>,
            <strong>strictNullChecks</strong>, <strong>strictFunctionTypes</strong>,
            <strong>strictPropertyInitialization</strong>,
            <strong>useUnknownInCatchVariables</strong>.
          </li>
        </ul>
        <p>
          You can read more about these options in the
          <a href="https://www.typescriptlang.org/tsconfig#strict" target="_blank"
            >TypeScript documentation</a
          >.
        </p>
        <p>
          Often you just want to enable a subset of these options. You can do this by enabling
          <code>strict</code> and then disabling the options that you don't want to use. For
          example, if you want to enable <code>strictNullChecks</code> but not
          <code>strictFunctionTypes</code>, you can do this by enabling <code>strict</code> and then
          disabling <code>strictFunctionTypes</code> in your jsconfig. There are also a couple of
          other relevant options that you might want to enable depending on your use case:
        </p>
        <ul>
          <li>
            <code>allowUmdGlobalAccess</code> allows you to access global variables in UMD modules.
            I won't go into detail about JavaScript modules here, but you can read more about them
            in this
            <a
              href="https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm"
              target="_blank"
              >post</a
            >
            from Igor Irianto. In short, you'll most probably want to enable this option if you're
            using a library like jQuery or Lodash and you want to access their global variables $
            and _, respectively without importing them.
          </li>
          <li>
            <code>typeAcquisition</code> allows you to specify which libraries you want to use in
            your project. It will then automatically download the type definitions for these
            libraries from the
            <a href="https://github.com/DefinitelyTyped/DefinitelyTyped" target="_blank"
              >DefinitelyTyped</a
            >
            project. This community project contains type definitions for npm packages that don't
            ship with their own type definitions. This is how it may look like:
          </li>
        </ul>
        <pre><code class="language-typescript" v-html="`{
  &quot;compilerOptions&quot;: {
    &quot;typeAcquisition&quot;: {
      &quot;include&quot;: [&quot;jquery&quot;, &quot;lodash&quot;]
    }
  }
}`"></code></pre>
        <h3>.d.ts files</h3>
        <p>
          TypeScript uses <code>.d.ts</code> files to store type definitions. These files are often
          used to define types for JavaScript libraries that don't ship with their own type
          definitions. You can also use them to define types for your own JavaScript code. Here's an
          example of what a <code>.d.ts</code> file might look like:
        </p>
        <pre><code class="language-typescript" v-html="`declare const foo: string;
declare function bar(): User;
declare class Baz {}

interface User {
  name: string;
  age?: number;
}`"></code></pre>
        <p>And this is how you can use it in your JavaScript code:</p>
        <pre><code class="language-typescript" v-html="`foo; // string
bar(); // User
new Baz(); // Baz`"></code></pre>
        <p>
          In <code>.d.ts</code> files, you can use all the TypeScript features we have seen before
          and more. TypeScript will automatically pick up your <code>.d.ts</code> files as well as
          those from npm packages you install. In practice, you can create the file near the
          JavaScript file you want to add types to. For global types, you can create a file called
          <code>globals.d.ts</code> in the root of your project and add them there.
        </p>
        <p>
          There are two ways to import types from a <code>.d.ts</code> file in JavaScript. The first
          way is to use triple-slash directives. These directives will tell TypeScript to include
          the type definitions from the specified modules. This is how it may look like:
        </p>
        <pre><code class="language-typescript" v-html="`// If you want to use a .d.ts file
/// <reference path=&quot;./foo.d.ts&quot; />

// If you want to use jQuery
/// <reference types=&quot;jquery&quot; />

// If you want to use es2017 string features like .padStart()
/// <reference lib=&quot;es2017.string&quot; />`"></code></pre>
        <p>
          More on triple-slash directives can be found in the
          <a
            href="https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html"
            target="_blank"
            rel="noopener noreferrer"
            >TypeScript documentation</a
          >.
        </p>
        <p>
          The second way is to use the <code>import</code> keyword. This will import the type
          definitions from the specified module. Here's an example:
        </p>
        <pre><code class="language-typescript" v-html="`/** @typedef {import('./foo.d.ts').Foo} Foo */
/** @typedef {import('type-fest').JsonValue} JsonValue */`"></code></pre>
        <p>
          For the last chapter, I want to share some best practices for writing JSDoc comments. I'll
          also share some resources that you can use to learn more about JSDoc and TypeScript.
        </p>
        <video
          class="mx-auto max-h-96 rounded-lg"
          src="/assets/blogs/1/wiggle.mp4"
          autoplay
          loop
          muted
        ></video>
      </div>
      <div class="space-y-4">
        <h2>Best Practices</h2>
        <p>
          The level of detail in your code documentation depends on the specific use case, project
          size, and audience. It is important to strike a balance between providing enough
          information to help users understand the code and avoiding clutter. Here are some best
          practices you can use:
        </p>
        <ol>
          <li>
            <strong>Consider your audience:</strong> If you're working on a library, your
            documentation should be comprehensive and include detailed descriptions of all types,
            functions, and interfaces. This helps users of the library understand how to use it
            effectively. On the other hand, if you're working on an internal project with a smaller
            team, you might choose to focus on high-level explanations and important edge cases.
          </li>
          <li>
            <strong>Keep comments up to date:</strong> As your code evolves, make sure to update the
            corresponding comments and documentation. Outdated comments can be misleading and cause
            confusion for developers working with your code.
          </li>
          <li>
            <strong>Be concise and clear:</strong> Aim for concise, clear explanations in your
            comments. Avoid overly technical jargon, and focus on providing information that is easy
            to understand. Remember that your documentation should be helpful to both experienced
            developers and newcomers alike.
          </li>
          <li>
            <strong>Include code examples:</strong> Where appropriate, include code examples to
            illustrate how a particular function or type should be used. This can be especially
            helpful for users who are new to your codebase or the concepts it involves.
          </li>
          <li>
            <strong>Follow a consistent style:</strong> Use a consistent style for your comments and
            documentation. This helps create a cohesive and professional appearance, making it
            easier for users to read and understand your documentation.
          </li>
        </ol>
        <p>
          If you have made it this far, kudos to you! I'm happy that you've learned something new
          today. Now you can start adding JSDoc comments to your JavaScript code and make it almost
          TypeScript-like 🎉. You can support me by following and leaving a comment. I'd love to
          hear your thoughts and feedback.
        </p>
        <video
          class="mx-auto max-h-96 rounded-lg"
          src="/assets/blogs/1/done.mp4"
          autoplay
          loop
          muted
        ></video>
      </div>
      <div class="space-y-4">
        <h2>Additional Resources</h2>
        <ul>
          <li>
            <a href="https://jsdoc.app/" target="_blank" rel="noopener noreferrer"
              >JSDoc documentation</a
            >
          </li>
          <li>
            <a
              href="https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html"
              target="_blank"
              rel="noopener noreferrer"
              >TypeScripts JSDoc documentation</a
            >
          </li>
          <li>
            <a href="https://roadmap.sh/typescript" target="_blank" rel="noopener noreferrer"
              >TypeScript Roadmap</a
            >
          </li>
          <li>
            <a href="https://roadmap.sh/javascript" target="_blank" rel="noopener noreferrer"
              >JavaScript Roadmap</a
            >
          </li>
          <li>
            <a
              href="https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm"
              target="_blank"
              rel="noopener noreferrer"
              >What the heck are CJS, AMD, UMD, and ESM in Javascript? by Igor Irianto</a
            >
          </li>
          <li>
            <a href="https://javascript.info/" target="_blank" rel="noopener noreferrer"
              >The Modern JavaScript Tutorial</a
            >
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
