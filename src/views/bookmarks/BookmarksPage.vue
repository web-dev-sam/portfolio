<script setup lang="ts">
import SkillBadge from '@/components/views/SkillBadge.vue'

type Bookmark = {
  img: string
  title: string
  link: string
  description: string
}

const data: {
  sections: Record<string, Record<string, Bookmark[]>>
} = {
  sections: {
    Installables: {
      Frameworks: [
        {
          title: 'Vue',
          link: 'https://vuejs.org/',
          description: 'Vue.js - The Progressive JavaScript Framework',
          img: 'https://vuejs.org/logo.svg',
        },
        {
          title: 'Nuxt',
          link: 'https://nuxt.com/',
          description: 'Nuxt.js - The Intuitive Vue Framework',
          img: 'https://nuxt.com/icon.png',
        },
        {
          title: 'Angular',
          link: 'https://angular.io/',
          description: 'One framework. Mobile & desktop.',
          img: 'https://angular.io/assets/images/favicons/favicon.ico',
        },
        {
          title: 'Analog',
          link: 'https://analogjs.org/',
          description: 'The fullstack Angular meta-framework.',
          img: 'https://analogjs.org/img/favicon.ico',
        },
        {
          title: 'Svelte',
          link: 'https://svelte.dev/',
          description: 'Cybernetically enhanced web apps',
          img: 'https://svelte.dev/favicon.png',
        },
        {
          title: 'SvelteKit',
          link: 'https://kit.svelte.dev/',
          description: 'The fastest way to build Svelte apps',
          img: 'https://kit.svelte.dev/favicon.png',
        },
        {
          title: 'Astro',
          link: 'https://astro.build/',
          description: 'The best of both worlds: Jamstack and server-rendered sites',
          img: 'https://astro.build/favicon.svg',
        },
        {
          title: 'React',
          link: 'https://reactjs.org/',
          description: 'A JavaScript library for building user interfaces',
          img: 'https://reactjs.org/favicon.ico',
        },
        {
          title: 'Next',
          link: 'https://nextjs.org/',
          description: 'The React Framework for Production',
          img: 'https://nextjs.org/static/favicon/favicon.ico',
        },
        {
          title: 'Remix',
          link: 'https://remix.run/',
          description: 'Remix is a full stack web framework for React.',
          img: 'https://remix.run/favicon-32.png',
        },
        {
          title: 'Gatsby',
          link: 'https://www.gatsbyjs.com/',
          description:
            'Gatsby is a React-based open source framework for creating websites and apps.',
          img: 'https://www.gatsbyjs.com/favicon-32x32.png',
        },
        {
          title: 'T3',
          link: 'https://create.t3.gg/',
          description: 'The best way to start a full-stack, typesafe Next.js app.',
          img: 'https://create.t3.gg/images/t3-dark.svg',
        },
        {
          title: 'Redwood',
          link: 'https://redwoodjs.com/',
          description:
            'Redwood is an opinionated, full-stack, serverless web application framework that will allow you to build and deploy JAMstack applications with ease.',
          img: 'https://redwoodjs.com/favicon.png',
        },
        {
          title: 'ExpressoTS',
          link: 'https://expresso-ts.com/',
          description:
            'The Developer-Friendly Node.js framework for creating highly maintainable server-side applications.',
          img: 'https://expresso-ts.com/favicon.ico',
        },
        {
          title: 'Nest',
          link: 'https://nestjs.com/',
          description:
            'A progressive Node.js framework for building efficient, reliable and scalable server-side applications.',
          img: 'https://nestjs.com/favicon-32x32.0a29681d.png',
        },
      ],
      Tools: [
        {
          title: 'Vite',
          link: 'https://vitejs.dev/',
          description: 'Next Generation Frontend Tooling',
          img: 'https://vitejs.dev/logo.svg',
        },
        {
          title: 'ESLint',
          link: 'https://eslint.org/',
          description: 'Find and fix problems in your JavaScript code',
          img: 'https://eslint.org/favicon.ico',
        },
        {
          title: 'Prettier',
          link: 'https://prettier.io/',
          description: 'Opinionated Code Formatter',
          img: 'https://prettier.io/icon.png',
        },
        {
          title: 'Vitest',
          link: 'https://vitest.dev/',
          description: "A Vite-native testing framework. It's fast!",
          img: 'https://vitest.dev/favicon.ico',
        },
        {
          title: 'Jest',
          link: 'https://jestjs.io/',
          description: 'Delightful JavaScript Testing',
          img: 'https://jestjs.io/img/favicon/favicon.ico',
        },
        {
          title: 'Cypress',
          link: 'https://www.cypress.io/',
          description: 'Fast, easy and reliable testing for anything that runs in a browser.',
          img: 'https://www.cypress.io/favicon.ico',
        },
        {
          title: 'Playwright',
          link: 'https://playwright.dev/',
          description:
            'Playwright is a Node library to automate the Chromium, WebKit and Firefox browsers with a single API.',
          img: 'https://playwright.dev/img/playwright-logo.svg',
        },
        {
          title: 'Husky',
          link: 'https://typicode.github.io/husky/#/',
          description: 'Modern native Git hooks made easy',
          img: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="85">🐶</text></svg>',
        },
        {
          title: 'Lint Staged',
          link: 'https://github.com/lint-staged/lint-staged',
          description: 'Run linters on git staged files',
          img: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="85">🚫</text></svg>',
        },
        {
          title: 'PostCSS',
          link: 'https://postcss.org/',
          description: 'A tool for transforming CSS with JavaScript plugins',
          img: 'https://postcss.org/assets/favicon-2xqjYSmg.ico',
        },
        {
          title: 'Auto Import',
          link: 'https://github.com/unplugin/unplugin-auto-import',
          description: 'Auto import on the fly',
          img: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="85">🚀</text></svg>',
        },
      ],
      DB: [
        {
          title: 'MongoDB',
          link: 'https://www.mongodb.com/',
          description: 'The most popular database for modern apps',
          img: 'https://www.mongodb.com/favicon.ico',
        },
        {
          title: 'PostgreSQL',
          link: 'https://www.postgresql.org/',
          description: 'The world’s most advanced open source database',
          img: 'https://www.postgresql.org/favicon.ico',
        },
        {
          title: 'SQLite',
          link: 'https://www.sqlite.org/',
          description:
            'SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.',
          img: 'https://www.sqlite.org/favicon.ico',
        },
        {
          title: 'MySQL',
          link: 'https://www.mysql.com/',
          description: 'MySQL is an open-source relational database management system.',
          img: 'https://www.mysql.com/common/themes/sakila/favicon.ico',
        },
        {
          title: 'MariaDB',
          link: 'https://mariadb.org/',
          description:
            'MariaDB is an open source database that supports continuity and open collaboration.',
          img: 'https://mariadb.org/wp-content/uploads/2019/02/cropped-mariadb_org_rgb_r_512-1-32x32.png',
        },
        {
          title: 'SQL Server',
          link: 'https://www.microsoft.com/en-us/sql-server/sql-server-2019',
          description:
            'SQL Server is a relational database management system developed by Microsoft.',
          img: 'https://www.microsoft.com/favicon.ico',
        },
        {
          title: 'Redis',
          link: 'https://redis.io/',
          description:
            'Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker.',
          img: 'https://redis.io/wp-content/themes/wpx/assets/images/favicons/favicon-32x32.png?v=A0mpW2gQlj',
        },
        {
          title: 'Prisma',
          link: 'https://www.prisma.io/',
          description: 'Next-generation Node.js and TypeScript ORM',
          img: 'https://www.prisma.io/images/favicon-32x32.png',
        },
        {
          title: 'Drizzle ORM',
          link: 'https://orm.drizzle.team/',
          description:
            'DrizzleORM is a simple, fast, and lightweight ORM for Node.js and TypeScript.',
          img: 'https://orm.drizzle.team/favicon.ico',
        },
        {
          title: 'TypeORM',
          link: 'https://typeorm.io/',
          description:
            'TypeORM is an ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms.',
          img: 'https://typeorm.io/image/favicon/favicon-32x32.png',
        },
      ],
    },
    Services: {
      Hosting: [
        {
          title: 'Vercel',
          link: 'https://vercel.com/',
          description: 'Vercel is a cloud platform for static sites and Serverless Functions',
          img: 'https://assets.vercel.com/image/upload/front/favicon/vercel/57x57.png',
        },
        {
          title: 'Netlify',
          link: 'https://www.netlify.com/',
          description:
            'Netlify is a San Francisco-based cloud computing company that offers hosting and serverless backend services for web applications and static websites.',
          img: 'https://www.netlify.com/favicon/favicon.ico',
        },
        {
          title: 'Render',
          link: 'https://render.com/',
          description:
            'Render is a unified platform to build and run all your apps and websites with free SSL, a global CDN, private networks and auto deploys from Git.',
          img: 'https://cdn.sanity.io/images/hvk0tap5/production/0ea63c1b6854bd803489557afb4ea54b85239418-128x128.png?fit=max&auto=format',
        },
        {
          title: 'Railway',
          link: 'https://railway.app/',
          description: 'Railway is the easiest way to deploy web services and applications.',
          img: 'https://railway.app/favicon.ico',
        },
        {
          title: 'Digital Ocean',
          link: 'https://www.digitalocean.com/',
          description: 'Simplify your cloud infrastructure with DigitalOcean',
          img: 'https://www.digitalocean.com/_next/static/media/android-chrome-192x192.f09059d8.png',
        },
        {
          title: 'Vultr',
          link: 'https://www.vultr.com/',
          description:
            'Global, automated cloud infrastructure from the broadest array of NVIDIA GPUs to virtual CPUs, bare metal, Kubernetes, storage, and networking solutions.',
          img: 'https://www.vultr.com/favicon.ico',
        },
        {
          title: 'Linode',
          link: 'https://www.linode.com/',
          description: 'Simplify your cloud infrastructure with Linode',
          img: 'https://www.linode.com/favicon.ico',
        },
      ],
      DB: [
        {
          title: 'Supabase',
          link: 'https://supabase.io/',
          description: 'Supabase is an open-source Firebase alternative',
          img: 'https://supabase.com/favicon/favicon-32x32.png',
        },
        {
          title: 'Firebase',
          link: 'https://firebase.google.com/',
          description:
            'Firebase is Google’s mobile platform that helps you quickly develop high-quality apps and grow your business.',
          img: 'https://firebase.google.com/favicon.ico',
        },
        {
          title: 'Hasura',
          link: 'https://hasura.io/',
          description:
            'Hasura gives you instant realtime GraphQL on any Postgres application, existing or new.',
          img: 'https://hasura.io/favicon.ico',
        },
        {
          title: 'Fauna',
          link: 'https://fauna.com/',
          description:
            'Fauna is a flexible, developer-friendly, transactional database delivered to you as a secure, web-native API.',
          img: 'https://images.ctfassets.net/po4qc9xpmpuh/748wU03wXxETyOXXz54j9P/93d6bcdcefcca69f0c3b3d23af032efe/favicon.png',
        },
        {
          title: 'Turso',
          link: 'https://turso.tech/',
          description:
            'Turso is SQLite for production: great developer experience and efficiency with essential quality of life improvements for modern applications.',
          img: 'https://turso.tech/favicon.ico',
        },
        {
          title: 'AWS',
          link: 'https://aws.amazon.com/',
          description:
            'Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.',
          img: 'https://aws.amazon.com/favicon.ico',
        },
        {
          title: 'Azure',
          link: 'https://azure.microsoft.com/',
          description:
            'Invent with purpose, realize cost savings, and make your organization more efficient with Microsoft Azure’s open and flexible cloud computing platform.',
          img: 'https://azure.microsoft.com/favicon.ico',
        },
        {
          title: 'Google Cloud',
          link: 'https://cloud.google.com/',
          description:
            'Google Cloud Platform lets you build, deploy, and scale applications, websites, and services on the same infrastructure as Google.',
          img: 'https://cloud.google.com/favicon.ico',
        },
      ],
      APIs: [
        {
          title: 'Resend',
          link: 'https://resend.com/',
          description:
            'The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.',
          img: 'https://resend.com/static/favicons/favicon@57x57.png',
        },
        {
          title: 'Mailgun',
          link: 'https://www.mailgun.com/',
          description:
            'Powerful APIs that enable you to send, receive and track email effortlessly.',
          img: 'https://www.mailgun.com/favicon.ico',
        },
        {
          title: 'Mailchimp',
          link: 'https://mailchimp.com/',
          description:
            'Mailchimp is the All-In-One integrated marketing platform for small businesses, to grow your business on your terms.',
          img: 'https://mailchimp.com/favicon.ico',
        },
        {
          title: 'Twilio',
          link: 'https://www.twilio.com/',
          description:
            'Twilio is a cloud communications platform as a service company based in San Francisco, California.',
          img: 'https://www.twilio.com/favicon.ico',
        },
        {
          title: 'Stripe',
          link: 'https://stripe.com/',
          description: 'Online payment processing for internet businesses',
          img: 'https://stripe.com/favicon.ico',
        },
        {
          title: 'Pusher',
          link: 'https://pusher.com/',
          description:
            'Pusher is a hosted service that makes it super-easy to add real-time data and functionality to web and mobile applications.',
          img: 'https://pusher.com/favicon.ico',
        },
      ],
    },
    Tools: {
      General: [
        {
          img: 'https://static.figma.com/app/icon/1/icon-192.png',
          title: 'Figma',
          link: 'https://www.figma.com/',
          description: 'Figma is a vector graphics editor and prototyping tool',
        },
        {
          img: 'https://excalidraw.com/favicon.ico',
          title: 'Excalidraw',
          link: 'https://excalidraw.com/',
          description: 'Virtual whiteboard for sketching hand-drawn like diagrams',
        },
        {
          img: 'https://www.notion.so/images/favicon.ico',
          title: 'Notion',
          link: 'https://www.notion.so/',
          description: 'All-in-one workspace for notes, tasks, wikis, and databases',
        },
        {
          img: 'https://obsidian.md/favicon.ico',
          title: 'Obsidian',
          link: 'https://obsidian.md/',
          description: 'A second brain, for you, forever',
        },
        {
          img: 'https://spline.design/images/icon_favicon32x32.png',
          title: 'Spline',
          link: 'https://spline.design/',
          description: 'Create 3D web experiences',
        },
        {
          img: 'https://framerusercontent.com/images/3ydDYhTbVKKzF5xDzZpZKoMmc.png',
          title: 'Framer',
          link: 'https://www.framer.com/',
          description: 'Design, prototype, and animate—all in one place',
        },
        {
          img: 'https://miro.com/favicon.ico',
          title: 'Miro',
          link: 'https://miro.com/',
          description: 'The online collaborative whiteboard platform to bring teams together',
        },
      ],
      Icons: [
        {
          title: 'Icon Buddy',
          link: 'https://www.iconbuddy.com/',
          description: 'Icon Buddy is a free online tool to generate icons for your website.',
          img: 'https://c1.tablecdn.com/iconbuddy/iconbuddy-logo.png',
        },
        {
          title: 'Icon Finder',
          link: 'https://www.iconfinder.com/',
          description:
            'Iconfinder is the leading search engine and market place for vector icons in SVG, PNG, CSH and AI format.',
          img: 'https://www.iconfinder.com/static/img/favicons/favicon-32x32.png',
        },
        {
          title: 'Noun Project',
          link: 'https://thenounproject.com/',
          description: 'Creating, Sharing and Celebrating the World’s Visual Language.',
          img: 'https://thenounproject.com/favicon.ico',
        },
        {
          title: 'Icons8',
          link: 'https://icons8.com/',
          description:
            'Download design elements for free: icons, photos, vector illustrations, and music for your videos.',
          img: 'https://maxst.icons8.com/vue-static/landings/primary-landings/favs/icons8_fav_32×32.png',
        },
        {
          title: 'Flaticon',
          link: 'https://www.flaticon.com/',
          description:
            "Download now the free icon pack 'Flaticon'. Available source files and icon fonts for both personal and commercial use.",
          img: 'https://www.flaticon.com/favicon.ico',
        },
        {
          title: 'Iconic',
          link: 'https://iconic.app/',
          description:
            'Iconic is an open source icon set consisting of 223 marks in raster, vector and font formats.',
          img: 'https://iconic.app/wp-content/themes/basis-iconic/icon.png',
        },
      ],
      Images: [
        {
          title: 'FreePik',
          link: 'https://www.freepik.com/',
          description: 'Find & Download the most popular Free Vectors over 10,000,000+ on Freepik',
          img: 'https://fps.cdnpk.net/favicons/favicon.ico',
        },
        {
          title: 'Unsplash',
          link: 'https://unsplash.com/',
          description:
            'Beautiful, free images and photos that you can download and use for any project.',
          img: 'https://unsplash.com/favicon.ico',
        },
        {
          title: 'Pexels',
          link: 'https://www.pexels.com/',
          description:
            'Free stock photos you can use everywhere. ✓ Free for commercial use ✓ No attribution required',
          img: 'https://www.pexels.com/favicon.ico',
        },
        {
          title: 'Flickr',
          link: 'https://www.flickr.com/',
          description:
            'Flickr is almost certainly the best online photo management and sharing application in the world.',
          img: 'https://www.flickr.com/favicon.ico',
        },
        {
          title: 'Pixabay',
          link: 'https://pixabay.com/',
          description:
            'Discover the best source for free images and videos. Free for commercial use ✓ No attribution required',
          img: 'https://pixabay.com/favicon.ico',
        },
      ],
    },
    Libraries: {
      Icons: [
        {
          title: 'Lucide',
          link: 'https://lucide.dev/',
          description: 'Simply beautiful open source icons.',
          img: 'https://lucide.dev/favicon.ico',
        },
        {
          title: 'Feather Icons',
          link: 'https://feathericons.com/',
          description: 'Simply beautiful open source icons.',
          img: 'https://feathericons.com/favicon.ico',
        },
        {
          title: 'Tabler Icons',
          link: 'https://tabler.io/icons',
          description: '5000+ Highly customizable & free SVG icons.',
          img: 'https://tabler.io/favicon.ico',
        },
        {
          title: 'Phosphor Icons',
          link: 'https://phosphoricons.com/',
          description:
            'Phosphor is a flexible icon family for interfaces, diagrams, presentations — whatever, really.',
          img: 'https://phosphoricons.com/favicon.ico',
        },
        {
          title: 'Font Awesome',
          link: 'https://fontawesome.com/',
          description:
            "The world's most popular and easiest to use icon set just got an upgrade. More icons. More styles. More Options.",
          img: 'https://fontawesome.com/favicon.ico',
        },
        {
          title: 'Remix Icon',
          link: 'https://remixicon.com/',
          description:
            'Remix Icon is a set of open-source neutral style system symbols elaborately crafted for designers and developers.',
          img: 'https://remixicon.com/favicon.ico',
        },
        {
          title: 'Heroicons',
          link: 'https://heroicons.com/',
          description:
            'A set of free MIT-licensed high-quality SVG icons for you to use in your web projects.',
          img: 'https://heroicons.com/_next/static/media/favicon-32x32.2a23e45f.png',
        },
        {
          title: 'Ionicons',
          link: 'https://ionicons.com/',
          description: 'The premium icon font for Ionic Framework.',
          img: 'https://ionic.io/ionicons/assets/img/meta/favicon-32x32.png',
        },
        {
          title: 'Octicons',
          link: 'https://primer.style/octicons/',
          description: "Your project. GitHub's icons.",
          img: 'https://primer.style/favicon-32x32.png',
        },
        {
          title: 'Material Icons (Google)',
          link: 'https://material.io/resources/icons/',
          description:
            'Material icons are delightful, beautifully crafted symbols for common actions and items.',
          img: 'https://material.io/favicon.ico',
        },
        {
          title: 'Material Deez Icons (MDI)',
          link: 'https://pictogrammers.com/library/mdi/',
          description:
            "Material Design Icons' growing icon collection allows designers and developers targeting various platforms to download icons in the format, color and size they need for any project.",
          img: 'https://pictogrammers.com/images/apple-touch-icon.png',
        },
      ],
      // Libs: Shadcn, Flowbite, Cirrus, Flowbite, Tailwind, Bulma, Radix, Carbon Components, Chakra UI,
      'UI/UX': [
        {
          title: 'Tailwind',
          link: 'https://tailwindcss.com/',
          description: 'A utility-first CSS framework for rapidly building custom designs.',
          img: 'https://tailwindcss.com/favicons/favicon-32x32.png',
        },
        {
          title: 'Shadcn',
          link: 'https://ui.shadcn.com/',
          description:
            'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.',
          img: 'https://ui.shadcn.com/favicon.ico',
        },
        {
          title: 'Flowbite',
          link: 'https://flowbite.com/',
          description:
            'Open-source library of accessible, production-ready components for Tailwind CSS.',
          img: 'https://flowbite.com/favicon.ico',
        },
        {
          title: 'Radix',
          link: 'https://www.radix-ui.com/',
          description:
            'An open source component library optimized for fast development, easy maintenance, and accessibility. Just import and go—no configuration required.',
          img: 'https://www.radix-ui.com/favicon.png',
        },
        {
          title: 'Chakra UI',
          link: 'https://chakra-ui.com/',
          description:
            'Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.',
          img: 'https://chakra-ui.com/favicon.png',
        },
        {
          title: 'Bulma',
          link: 'https://bulma.io/',
          description:
            'Bulma is a free, open source framework that provides ready-to-use frontend components that you can easily combine to build responsive web interfaces.',
          img: 'https://bulma.io/favicons/favicon-32x32.png',
        },
        {
          title: 'Cirrus',
          link: 'https://cirrus-ui.netlify.app/',
          description:
            'Cirrus is a fully responsive and comprehensive CSS framework with beautiful controls and simplistic structure.',
          img: 'https://cirrus-ui.netlify.app/favicon.ico',
        },
        {
          title: 'Carbon Components',
          link: 'https://www.carbondesignsystem.com/',
          description:
            "Carbon is IBM's open-source design system for products and digital experiences.",
          img: 'https://carbondesignsystem.com/favicon-32x32.png',
        },
      ],
      Other: [
        {
          title: 'Prism',
          link: 'https://prismjs.com/',
          description:
            'Prism is a lightweight, robust, elegant syntax highlighting library. It’s a spin-off from Dabblet.',
          img: 'https://prismjs.com/assets/favicon.png',
        },
        {
          title: 'GSAP',
          link: 'https://greensock.com/gsap/',
          description:
            'GSAP is a suite of tools for scripted, high-performance HTML5 animations that work in all major browsers.',
          img: 'https://gsap.com/favicon-32x32.png',
        },
      ],
    },
    Websites: {
      Educational: [
        {
          img: 'https://www.frontendmentor.io/static/favicon/favicon-32x32.png',
          title: 'Frontend Mentor',
          link: 'https://www.frontendmentor.io/',
          description: 'Improve your coding skills by building real projects',
        },
        {
          img: 'https://www.codecademy.com/favicon.ico',
          title: 'Codecademy',
          link: 'https://www.codecademy.com/',
          description: 'Learn the technical skills you need for the job you want',
        },
        {
          img: 'https://developer.mozilla.org/favicon-48x48.cbbd161b.png',
          title: 'MDN Web Docs',
          link: 'https://developer.mozilla.org/en-US/',
          description: 'The information you need to build the web',
        },
        {
          img: 'https://www.w3schools.com/favicon.ico',
          title: 'W3Schools',
          link: 'https://www.w3schools.com/',
          description: "The world's largest web developer site",
        },
        {
          img: 'https://unicorn-utterances.com/favicon.ico',
          title: 'Frameworks Guide',
          link: 'https://unicorn-utterances.com/collections/framework-field-guide',
          description: 'A free and practical way to learn Angular, React & Vue all at once',
        },
        {
          img: 'https://javascript.info/img/favicon/favicon.png',
          title: 'JavaScript.info',
          link: 'https://javascript.info/',
          description: 'The Modern JavaScript Tutorial',
        },
        {
          img: 'https://www.gstatic.com/devrel-devsite/prod/ve5ef9ac7b497e19ece9427facc78d0c59aaab7a2bc6a0f75fdae93f4ee589f67/web/images/favicon.png',
          title: 'Web.dev',
          link: 'https://web.dev/',
          description:
            "Get the web's modern capabilities on your own sites and apps with useful guidance and analysis from web.dev",
        },
      ],
    },
  },
}
</script>

<template>
  <main class="mb-16 text-center md:text-left">
    <h1 class="!lg:my-32 !my-16 text-center text-h3 font-bold">My Bookmarks</h1>
    <div class="flex flex-col justify-around gap-16">
      <section v-for="(bookmarks, section) in data.sections" :key="section">
        <h2 class="mb-4 text-center text-h6 font-bold">{{ section }}</h2>

        <div class="flex flex-col justify-around md:flex-row">
          <div v-for="(bookmarkItems, bookmark) in bookmarks" :key="bookmark">
            <h3 class="text-overline mb-4 mt-8 text-muted">{{ bookmark }}</h3>
            <div class="space-y-2">
              <SkillBadge
                v-for="bookmarkItem in bookmarkItems"
                :key="bookmarkItem.title"
                :title="bookmarkItem.title"
                :link="bookmarkItem.link"
              >
                <img :src="bookmarkItem.img" />
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
