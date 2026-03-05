<script setup lang="ts">
type Tag = 'framework' | 'db' | 'icon' | 'learn' | 'tool' | 'ui'
type Bookmark = {
  img: string
  title: string
  link: string
  description: string
  tags: Tag[]
}

const data: Bookmark[] = [
  {
    title: 'Vue',
    link: 'https://vuejs.org/',
    description: 'Vue.js - The Progressive JavaScript Framework',
    img: 'https://vuejs.org/logo.svg',
    tags: ['framework'],
  },
  {
    title: 'Nuxt',
    link: 'https://nuxt.com/',
    description: 'Nuxt.js - The Intuitive Vue Framework',
    img: 'https://nuxt.com/icon.png',
    tags: ['framework'],
  },
  {
    title: 'Angular',
    link: 'https://angular.io/',
    description: 'One framework. Mobile & desktop.',
    img: 'https://angular.io/assets/images/favicons/favicon.ico',
    tags: ['framework'],
  },
  {
    title: 'Analog',
    link: 'https://analogjs.org/',
    description: 'The fullstack Angular meta-framework.',
    img: 'https://analogjs.org/img/favicon.ico',
    tags: ['framework'],
  },
  {
    title: 'Svelte',
    link: 'https://svelte.dev/',
    description: 'Cybernetically enhanced web apps',
    img: 'https://svelte.dev/favicon.png',
    tags: ['framework'],
  },
  {
    title: 'SvelteKit',
    link: 'https://kit.svelte.dev/',
    description: 'The fastest way to build Svelte apps',
    img: 'https://kit.svelte.dev/favicon.png',
    tags: ['framework'],
  },
  {
    title: 'Astro',
    link: 'https://astro.build/',
    description: 'The best of both worlds: Jamstack and server-rendered sites',
    img: 'https://astro.build/favicon.svg',
    tags: ['framework'],
  },
  {
    title: 'React',
    link: 'https://reactjs.org/',
    description: 'A JavaScript library for building user interfaces',
    img: 'https://reactjs.org/favicon.ico',
    tags: ['framework'],
  },
  {
    title: 'Next',
    link: 'https://nextjs.org/',
    description: 'The React Framework for Production',
    img: 'https://nextjs.org/static/favicon/favicon.ico',
    tags: ['framework'],
  },
  {
    title: 'Remix',
    link: 'https://remix.run/',
    description: 'Remix is a full stack web framework for React.',
    img: 'https://remix.run/favicon-32.png',
    tags: ['framework'],
  },
  {
    title: 'Gatsby',
    link: 'https://www.gatsbyjs.com/',
    description: 'Gatsby is a React-based open source framework for creating websites and apps.',
    img: 'https://www.gatsbyjs.com/favicon-32x32.png',
    tags: ['framework'],
  },
  {
    title: 'T3',
    link: 'https://create.t3.gg/',
    description: 'The best way to start a full-stack, typesafe Next.js app.',
    img: 'https://create.t3.gg/images/t3-dark.svg',
    tags: ['framework'],
  },
  {
    title: 'Redwood',
    link: 'https://redwoodjs.com/',
    description:
      'Redwood is an opinionated, full-stack, serverless web application framework that will allow you to build and deploy JAMstack applications with ease.',
    img: 'https://redwoodjs.com/favicon.png',
    tags: ['framework'],
  },
  {
    title: 'ExpressoTS',
    link: 'https://expresso-ts.com/',
    description:
      'The Developer-Friendly Node.js framework for creating highly maintainable server-side applications.',
    img: 'https://expresso-ts.com/favicon.ico',
    tags: ['framework'],
  },
  {
    title: 'Nest',
    link: 'https://nestjs.com/',
    description:
      'A progressive Node.js framework for building efficient, reliable and scalable server-side applications.',
    img: 'https://nestjs.com/favicon-32x32.0a29681d.png',
    tags: ['framework'],
  },
  {
    title: 'Vite',
    link: 'https://vitejs.dev/',
    description: 'Next Generation Frontend Tooling',
    img: 'https://vitejs.dev/logo.svg',
    tags: ['tool'],
  },
  {
    title: 'ESLint',
    link: 'https://eslint.org/',
    description: 'Find and fix problems in your JavaScript code',
    img: 'https://eslint.org/favicon.ico',
    tags: ['tool'],
  },
  {
    title: 'Prettier',
    link: 'https://prettier.io/',
    description: 'Opinionated Code Formatter',
    img: 'https://prettier.io/icon.png',
    tags: ['tool'],
  },
  {
    title: 'Vitest',
    link: 'https://vitest.dev/',
    description: "A Vite-native testing framework. It's fast!",
    img: 'https://vitest.dev/favicon.ico',
    tags: ['tool', 'testing'],
  },
  {
    title: 'Jest',
    link: 'https://jestjs.io/',
    description: 'Delightful JavaScript Testing',
    img: 'https://jestjs.io/img/favicon/favicon.ico',
    tags: ['tool', 'testing'],
  },
  {
    title: 'Cypress',
    link: 'https://www.cypress.io/',
    description: 'Fast, easy and reliable testing for anything that runs in a browser.',
    img: 'https://www.cypress.io/favicon.ico',
    tags: ['tool', 'testing'],
  },
  {
    title: 'Playwright',
    link: 'https://playwright.dev/',
    description:
      'Playwright is a Node library to automate the Chromium, WebKit and Firefox browsers with a single API.',
    img: 'https://playwright.dev/img/playwright-logo.svg',
    tags: ['tool', 'testing'],
  },
  {
    title: 'Husky',
    link: 'https://typicode.github.io/husky/#/',
    description: 'Modern native Git hooks made easy',
    img: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="85">🐶</text></svg>',
    tags: ['tool'],
  },
  {
    title: 'Lint Staged',
    link: 'https://github.com/lint-staged/lint-staged',
    description: 'Run linters on git staged files',
    img: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="85">🚫</text></svg>',
    tags: ['tool'],
  },
  {
    title: 'PostCSS',
    link: 'https://postcss.org/',
    description: 'A tool for transforming CSS with JavaScript plugins',
    img: 'https://postcss.org/assets/favicon-2xqjYSmg.ico',
    tags: ['tool'],
  },
  {
    title: 'Auto Import',
    link: 'https://github.com/unplugin/unplugin-auto-import',
    description: 'Auto import on the fly',
    img: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="85">🚀</text></svg>',
    tags: ['tool'],
  },
  {
    title: 'MongoDB',
    link: 'https://www.mongodb.com/',
    description: 'The most popular database for modern apps',
    img: 'https://www.mongodb.com/favicon.ico',
    tags: ['db'],
  },
  {
    title: 'PostgreSQL',
    link: 'https://www.postgresql.org/',
    description: 'The world’s most advanced open source database',
    img: 'https://www.postgresql.org/favicon.ico',
    tags: ['db'],
  },
  {
    title: 'SQLite',
    link: 'https://www.sqlite.org/',
    description:
      'SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.',
    img: 'https://www.sqlite.org/favicon.ico',
    tags: ['db'],
  },
  {
    title: 'MySQL',
    link: 'https://www.mysql.com/',
    description: 'MySQL is an open-source relational database management system.',
    img: 'https://www.mysql.com/common/themes/sakila/favicon.ico',
    tags: ['db'],
  },
  {
    title: 'MariaDB',
    link: 'https://mariadb.org/',
    description:
      'MariaDB is an open source database that supports continuity and open collaboration.',
    img: 'https://mariadb.org/wp-content/uploads/2019/02/cropped-mariadb_org_rgb_r_512-1-32x32.png',
    tags: ['db'],
  },
  {
    title: 'SQL Server',
    link: 'https://www.microsoft.com/en-us/sql-server/sql-server-2019',
    description: 'SQL Server is a relational database management system developed by Microsoft.',
    img: 'https://www.microsoft.com/favicon.ico',
    tags: ['db'],
  },
  {
    title: 'Redis',
    link: 'https://redis.io/',
    description:
      'Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker.',
    img: 'https://redis.io/wp-content/themes/wpx/assets/images/favicons/favicon-32x32.png?v=A0mpW2gQlj',
    tags: ['db'],
  },
  {
    title: 'Prisma',
    link: 'https://www.prisma.io/',
    description: 'Next-generation Node.js and TypeScript ORM',
    img: 'https://www.prisma.io/images/favicon-32x32.png',
    tags: ['db', 'orm'],
  },
  {
    title: 'Drizzle ORM',
    link: 'https://orm.drizzle.team/',
    description: 'DrizzleORM is a simple, fast, and lightweight ORM for Node.js and TypeScript.',
    img: 'https://orm.drizzle.team/favicon.ico',
    tags: ['db', 'orm'],
  },
  {
    title: 'TypeORM',
    link: 'https://typeorm.io/',
    description:
      'TypeORM is an ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms.',
    img: 'https://typeorm.io/image/favicon/favicon-32x32.png',
    tags: ['db', 'orm'],
  },
  {
    title: 'Vercel',
    link: 'https://vercel.com/',
    description: 'Vercel is a cloud platform for static sites and Serverless Functions',
    img: 'https://assets.vercel.com/image/upload/front/favicon/vercel/57x57.png',
    tags: ['hosting'],
  },
  {
    title: 'Netlify',
    link: 'https://www.netlify.com/',
    description:
      'Netlify is a San Francisco-based cloud computing company that offers hosting and serverless backend services for web applications and static websites.',
    img: 'https://www.netlify.com/favicon/favicon.ico',
    tags: ['hosting'],
  },
  {
    title: 'Render',
    link: 'https://render.com/',
    description:
      'Render is a unified platform to build and run all your apps and websites with free SSL, a global CDN, private networks and auto deploys from Git.',
    img: 'https://cdn.sanity.io/images/hvk0tap5/production/0ea63c1b6854bd803489557afb4ea54b85239418-128x128.png?fit=max&auto=format',
    tags: ['hosting'],
  },
  {
    title: 'Railway',
    link: 'https://railway.app/',
    description: 'Railway is the easiest way to deploy web services and applications.',
    img: 'https://railway.app/favicon.ico',
    tags: ['hosting'],
  },
  {
    title: 'Digital Ocean',
    link: 'https://www.digitalocean.com/',
    description: 'Simplify your cloud infrastructure with DigitalOcean',
    img: 'https://www.digitalocean.com/_next/static/media/android-chrome-192x192.f09059d8.png',
    tags: ['hosting'],
  },
  {
    title: 'Vultr',
    link: 'https://www.vultr.com/',
    description:
      'Global, automated cloud infrastructure from the broadest array of NVIDIA GPUs to virtual CPUs, bare metal, Kubernetes, storage, and networking solutions.',
    img: 'https://www.vultr.com/favicon.ico',
    tags: ['hosting'],
  },
  {
    title: 'Linode',
    link: 'https://www.linode.com/',
    description: 'Simplify your cloud infrastructure with Linode',
    img: 'https://www.linode.com/favicon.ico',
    tags: ['hosting'],
  },
  {
    title: 'Supabase',
    link: 'https://supabase.io/',
    description: 'Supabase is an open-source Firebase alternative',
    img: 'https://supabase.com/favicon/favicon-32x32.png',
    tags: ['db'],
  },
  {
    title: 'Firebase',
    link: 'https://firebase.google.com/',
    description:
      'Firebase is Google’s mobile platform that helps you quickly develop high-quality apps and grow your business.',
    img: 'https://firebase.google.com/favicon.ico',
    tags: ['db'],
  },
  {
    title: 'Hasura',
    link: 'https://hasura.io/',
    description:
      'Hasura gives you instant realtime GraphQL on any Postgres application, existing or new.',
    img: 'https://hasura.io/favicon.ico',
    tags: ['db'],
  },
  {
    title: 'Fauna',
    link: 'https://fauna.com/',
    description:
      'Fauna is a flexible, developer-friendly, transactional database delivered to you as a secure, web-native API.',
    img: 'https://images.ctfassets.net/po4qc9xpmpuh/748wU03wXxETyOXXz54j9P/93d6bcdcefcca69f0c3b3d23af032efe/favicon.png',
    tags: ['db'],
  },
  {
    title: 'Turso',
    link: 'https://turso.tech/',
    description:
      'Turso is SQLite for production: great developer experience and efficiency with essential quality of life improvements for modern applications.',
    img: 'https://turso.tech/favicon.ico',
    tags: ['db'],
  },
  {
    title: 'AWS',
    link: 'https://aws.amazon.com/',
    description:
      'Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.',
    img: 'https://aws.amazon.com/favicon.ico',
    tags: ['db', 'hosting'],
  },
  {
    title: 'Azure',
    link: 'https://azure.microsoft.com/',
    description:
      'Invent with purpose, realize cost savings, and make your organization more efficient with Microsoft Azure’s open and flexible cloud computing platform.',
    img: 'https://azure.microsoft.com/favicon.ico',
    tags: ['hosting'],
  },
  {
    title: 'Google Cloud',
    link: 'https://cloud.google.com/',
    description:
      'Google Cloud Platform lets you build, deploy, and scale applications, websites, and services on the same infrastructure as Google.',
    img: 'https://cloud.google.com/favicon.ico',
    tags: ['hosting'],
  },
  {
    title: 'Resend',
    link: 'https://resend.com/',
    description:
      'The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.',
    img: 'https://resend.com/static/favicons/favicon@57x57.png',
    tags: ['api'],
  },
  {
    title: 'Mailgun',
    link: 'https://www.mailgun.com/',
    description: 'Powerful APIs that enable you to send, receive and track email effortlessly.',
    img: 'https://www.mailgun.com/favicon.ico',
    tags: ['api'],
  },
  {
    title: 'Mailchimp',
    link: 'https://mailchimp.com/',
    description:
      'Mailchimp is the All-In-One integrated marketing platform for small businesses, to grow your business on your terms.',
    img: 'https://mailchimp.com/favicon.ico',
    tags: ['api'],
  },
  {
    title: 'Twilio',
    link: 'https://www.twilio.com/',
    description:
      'Twilio is a cloud communications platform as a service company based in San Francisco, California.',
    img: 'https://www.twilio.com/favicon.ico',
    tags: ['api'],
  },
  {
    title: 'Stripe',
    link: 'https://stripe.com/',
    description: 'Online payment processing for internet businesses',
    img: 'https://stripe.com/favicon.ico',
    tags: ['api'],
  },
  {
    title: 'Pusher',
    link: 'https://pusher.com/',
    description:
      'Pusher is a hosted service that makes it super-easy to add real-time data and functionality to web and mobile applications.',
    img: 'https://pusher.com/favicon.ico',
    tags: ['api'],
  },
  {
    img: 'https://static.figma.com/app/icon/1/icon-192.png',
    title: 'Figma',
    link: 'https://www.figma.com/',
    description: 'Figma is a vector graphics editor and prototyping tool',
    tags: ['tool'],
  },
  {
    img: 'https://excalidraw.com/favicon.ico',
    title: 'Excalidraw',
    link: 'https://excalidraw.com/',
    description: 'Virtual whiteboard for sketching hand-drawn like diagrams',
    tags: ['tool'],
  },
  {
    img: 'https://www.notion.so/images/favicon.ico',
    title: 'Notion',
    link: 'https://www.notion.so/',
    description: 'All-in-one workspace for notes, tasks, wikis, and databases',
    tags: ['tool'],
  },
  {
    img: 'https://obsidian.md/favicon.ico',
    title: 'Obsidian',
    link: 'https://obsidian.md/',
    description: 'A second brain, for you, forever',
    tags: ['tool'],
  },
  {
    img: 'https://spline.design/images/icon_favicon32x32.png',
    title: 'Spline',
    link: 'https://spline.design/',
    description: 'Create 3D web experiences',
    tags: ['tool'],
  },
  {
    img: 'https://framerusercontent.com/images/3ydDYhTbVKKzF5xDzZpZKoMmc.png',
    title: 'Framer',
    link: 'https://www.framer.com/',
    description: 'Design, prototype, and animate—all in one place',
    tags: ['tool'],
  },
  {
    img: 'https://miro.com/favicon.ico',
    title: 'Miro',
    link: 'https://miro.com/',
    description: 'The online collaborative whiteboard platform to bring teams together',
    tags: ['tool'],
  },
  {
    title: 'Icon Buddy',
    link: 'https://www.iconbuddy.com/',
    description: 'Icon Buddy is a free online tool to generate icons for your website.',
    img: 'https://c1.tablecdn.com/iconbuddy/iconbuddy-logo.png',
    tags: ['icon'],
  },
  {
    title: 'Icon Finder',
    link: 'https://www.iconfinder.com/',
    description:
      'Iconfinder is the leading search engine and market place for vector icons in SVG, PNG, CSH and AI format.',
    img: 'https://www.iconfinder.com/static/img/favicons/favicon-32x32.png',
    tags: ['icon'],
  },
  {
    title: 'Noun Project',
    link: 'https://thenounproject.com/',
    description: 'Creating, Sharing and Celebrating the World’s Visual Language.',
    img: 'https://thenounproject.com/favicon.ico',
    tags: ['icon'],
  },
  {
    title: 'Icons8',
    link: 'https://icons8.com/',
    description:
      'Download design elements for free: icons, photos, vector illustrations, and music for your videos.',
    img: 'https://maxst.icons8.com/vue-static/landings/primary-landings/favs/icons8_fav_32×32.png',
    tags: ['icon'],
  },
  {
    title: 'Flaticon',
    link: 'https://www.flaticon.com/',
    description:
      "Download now the free icon pack 'Flaticon'. Available source files and icon fonts for both personal and commercial use.",
    img: 'https://www.flaticon.com/favicon.ico',
    tags: ['icon'],
  },
  {
    title: 'Iconic',
    link: 'https://iconic.app/',
    description:
      'Iconic is an open source icon set consisting of 223 marks in raster, vector and font formats.',
    img: 'https://iconic.app/wp-content/themes/basis-iconic/icon.png',
    tags: ['icon'],
  },
  {
    title: 'FreePik',
    link: 'https://www.freepik.com/',
    description: 'Find & Download the most popular Free Vectors over 10,000,000+ on Freepik',
    img: 'https://fps.cdnpk.net/favicons/favicon.ico',
    tags: ['image'],
  },
  {
    title: 'Unsplash',
    link: 'https://unsplash.com/',
    description: 'Beautiful, free images and photos that you can download and use for any project.',
    img: 'https://unsplash.com/favicon.ico',
    tags: ['image'],
  },
  {
    title: 'Pexels',
    link: 'https://www.pexels.com/',
    description:
      'Free stock photos you can use everywhere. ✓ Free for commercial use ✓ No attribution required',
    img: 'https://www.pexels.com/favicon.ico',
    tags: ['image'],
  },
  {
    title: 'Flickr',
    link: 'https://www.flickr.com/',
    description:
      'Flickr is almost certainly the best online photo management and sharing application in the world.',
    img: 'https://www.flickr.com/favicon.ico',
    tags: ['image'],
  },
  {
    title: 'Pixabay',
    link: 'https://pixabay.com/',
    description:
      'Discover the best source for free images and videos. Free for commercial use ✓ No attribution required',
    img: 'https://pixabay.com/favicon.ico',
    tags: ['image'],
  },
  {
    title: 'Lucide',
    link: 'https://lucide.dev/',
    description: 'Simply beautiful open source icons.',
    img: 'https://lucide.dev/favicon.ico',
    tags: ['icon'],
  },
  {
    title: 'Feather Icons',
    link: 'https://feathericons.com/',
    description: 'Simply beautiful open source icons.',
    img: 'https://feathericons.com/favicon.ico',
    tags: ['icon'],
  },
  {
    title: 'Tabler Icons',
    link: 'https://tabler.io/icons',
    description: '5000+ Highly customizable & free SVG icons.',
    img: 'https://tabler.io/favicon.ico',
    tags: ['icon'],
  },
  {
    title: 'Phosphor Icons',
    link: 'https://phosphoricons.com/',
    description:
      'Phosphor is a flexible icon family for interfaces, diagrams, presentations — whatever, really.',
    img: 'https://phosphoricons.com/favicon.ico',
    tags: ['icon'],
  },
  {
    title: 'Font Awesome',
    link: 'https://fontawesome.com/',
    description:
      "The world's most popular and easiest to use icon set just got an upgrade. More icons. More styles. More Options.",
    img: 'https://fontawesome.com/favicon.ico',
    tags: ['icon'],
  },
  {
    title: 'Remix Icon',
    link: 'https://remixicon.com/',
    description:
      'Remix Icon is a set of open-source neutral style system symbols elaborately crafted for designers and developers.',
    img: 'https://remixicon.com/favicon.ico',
    tags: ['icon'],
  },
  {
    title: 'Heroicons',
    link: 'https://heroicons.com/',
    description:
      'A set of free MIT-licensed high-quality SVG icons for you to use in your web projects.',
    img: 'https://heroicons.com/_next/static/media/favicon-32x32.2a23e45f.png',
    tags: ['icon'],
  },
  {
    title: 'Ionicons',
    link: 'https://ionicons.com/',
    description: 'The premium icon font for Ionic Framework.',
    img: 'https://ionic.io/ionicons/assets/img/meta/favicon-32x32.png',
    tags: ['icon'],
  },
  {
    title: 'Octicons',
    link: 'https://primer.style/octicons/',
    description: "Your project. GitHub's icons.",
    img: 'https://primer.style/favicon-32x32.png',
    tags: ['icon'],
  },
  {
    title: 'Material Icons (Google)',
    link: 'https://material.io/resources/icons/',
    description:
      'Material icons are delightful, beautifully crafted symbols for common actions and items.',
    img: 'https://material.io/favicon.ico',
    tags: ['icon'],
  },
  {
    title: 'Material Deez Icons (MDI)',
    link: 'https://pictogrammers.com/library/mdi/',
    description:
      "Material Design Icons' growing icon collection allows designers and developers targeting various platforms to download icons in the format, color and size they need for any project.",
    img: 'https://pictogrammers.com/images/apple-touch-icon.png',
    tags: ['icon'],
  },
  {
    title: 'Tailwind',
    link: 'https://tailwindcss.com/',
    description: 'A utility-first CSS framework for rapidly building custom designs.',
    img: 'https://tailwindcss.com/favicons/favicon-32x32.png',
    tags: ['tool', 'framework', 'ui'],
  },
  {
    title: 'Shadcn',
    link: 'https://ui.shadcn.com/',
    description:
      'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.',
    img: 'https://ui.shadcn.com/favicon.ico',
    tags: ['tool', 'framework', 'ui'],
  },
  {
    title: 'Flowbite',
    link: 'https://flowbite.com/',
    description: 'Open-source library of accessible, production-ready components for Tailwind CSS.',
    img: 'https://flowbite.com/favicon.ico',
    tags: ['tool', 'ui'],
  },
  {
    title: 'Radix',
    link: 'https://www.radix-ui.com/',
    description:
      'An open source component library optimized for fast development, easy maintenance, and accessibility. Just import and go—no configuration required.',
    img: 'https://www.radix-ui.com/favicon.png',
    tags: ['ui'],
  },
  {
    title: 'Chakra UI',
    link: 'https://chakra-ui.com/',
    description:
      'Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.',
    img: 'https://chakra-ui.com/favicon.png',
    tags: ['ui'],
  },
  {
    title: 'Bulma',
    link: 'https://bulma.io/',
    description:
      'Bulma is a free, open source framework that provides ready-to-use frontend components that you can easily combine to build responsive web interfaces.',
    img: 'https://bulma.io/favicons/favicon-32x32.png',
    tags: ['ui'],
  },
  {
    title: 'Cirrus',
    link: 'https://cirrus-ui.netlify.app/',
    description:
      'Cirrus is a fully responsive and comprehensive CSS framework with beautiful controls and simplistic structure.',
    img: 'https://cirrus-ui.netlify.app/favicon.ico',
    tags: ['ui'],
  },
  {
    title: 'Carbon Components',
    link: 'https://www.carbondesignsystem.com/',
    description: "Carbon is IBM's open-source design system for products and digital experiences.",
    img: 'https://carbondesignsystem.com/favicon-32x32.png',
    tags: ['ui'],
  },
  {
    title: 'Prism',
    link: 'https://prismjs.com/',
    description:
      'Prism is a lightweight, robust, elegant syntax highlighting library. It’s a spin-off from Dabblet.',
    img: 'https://prismjs.com/assets/favicon.png',
    tags: ['ui'],
  },
  {
    title: 'GSAP',
    link: 'https://greensock.com/gsap/',
    description:
      'GSAP is a suite of tools for scripted, high-performance HTML5 animations that work in all major browsers.',
    img: 'https://gsap.com/favicon-32x32.png',
    tags: ['ui'],
  },
  {
    img: 'https://www.frontendmentor.io/static/favicon/favicon-32x32.png',
    title: 'Frontend Mentor',
    link: 'https://www.frontendmentor.io/',
    description: 'Improve your coding skills by building real projects',
    tags: ['learn'],
  },
  {
    img: 'https://www.codecademy.com/favicon.ico',
    title: 'Codecademy',
    link: 'https://www.codecademy.com/',
    description: 'Learn the technical skills you need for the job you want',
    tags: ['learn'],
  },
  {
    img: 'https://developer.mozilla.org/favicon-48x48.cbbd161b.png',
    title: 'MDN Web Docs',
    link: 'https://developer.mozilla.org/en-US/',
    description: 'The information you need to build the web',
    tags: ['learn'],
  },
  {
    img: 'https://www.w3schools.com/favicon.ico',
    title: 'W3Schools',
    link: 'https://www.w3schools.com/',
    description: "The world's largest web developer site",
    tags: ['learn'],
  },
  {
    img: 'https://unicorn-utterances.com/favicon.ico',
    title: 'Frameworks Guide',
    link: 'https://unicorn-utterances.com/collections/framework-field-guide',
    description: 'A free and practical way to learn Angular, React & Vue all at once',
    tags: ['learn'],
  },
  {
    img: 'https://javascript.info/img/favicon/favicon.png',
    title: 'JavaScript.info',
    link: 'https://javascript.info/',
    description: 'The Modern JavaScript Tutorial',
    tags: ['learn'],
  },
  {
    img: 'https://www.gstatic.com/devrel-devsite/prod/ve5ef9ac7b497e19ece9427facc78d0c59aaab7a2bc6a0f75fdae93f4ee589f67/web/images/favicon.png',
    title: 'Web.dev',
    link: 'https://web.dev/',
    description:
      "Get the web's modern capabilities on your own sites and apps with useful guidance and analysis from web.dev",
    tags: ['learn'],
  },
  {
    img: 'https://buffer.com/static/icons/favicon-32x32.png',
    title: 'Buffer',
    link: 'https://buffer.com',
    description:
      'Buffer is an intuitive social media management platform trusted by brands, businesses, agencies, and individuals to help drive social media results.',
    tags: ['social'],
  },
  {
    img: 'https://www.achecks.org/wp-content/uploads/2023/06/achecks-1.png',
    title: 'ACHECKS A11y',
    link: 'https://achecks.ca',
    description:
      'The Most Popular Web Accessibility Checker for Websites/PDFs through AChecker, Lighthouse & Tingtun (Free Manual or Subscribe for Automated).',
  },
  {
    img: 'https://www.google.com/images/branding/product/1x/ads_24dp.png',
    title: 'Google Ads',
    link: 'https://ads.google.com',
    description:
      'Sehen Sie sich an, wie Sie mit Google Ads f\u00fcr Ihr Unternehmen werben k\u00f6nnen. Nutzen Sie unsere digitale Werbeplattform f\u00fcr die Kundenakquisition und den Verkauf.',
  },
  {
    img: 'https://lf-adcdn-useast2a.tiktokcdn.com/obj/i18nblog-euttp/favicon_1572925880490.ico',
    title: 'TikTok Ads',
    link: 'https://ads.tiktok.com',
    description:
      'Advertise on TikTok. Make ads that entertain and campaigns that connect. Where large and small businesses, agencies & creators can achieve big results.',
  },
  {
    img: 'https://ssl.gstatic.com/analytics/analytics-frontend.indexpage_20240523.00_p0/index/static/analytics_standard_icon.png',
    title: 'Google Analytics',
    link: 'https://analytics.google.com',
    description:
      'Google Analytics lets you measure your advertising ROI as well as track your Flash, video, and social networking sites and applications.',
  },
  {
    img: 'https://app.clickup.com/assets/favicons/favicon-16x16.png',
    title: 'ClickUp',
    link: 'https://app.clickup.com',
    description: 'ClickUp is the highest-rated and fastest growing Productivity Platform.',
  },
  {
    img: '',
    title: 'Haikei',
    link: 'https://app.haikei.app',
    description:
      'A web-based design tool to generate unique SVG design assets for websites, social media, blog posts, desktop and mobile wallpapers, posters, and more! Our generators let you discover, customize, randomize, and export generative SVG design assets ready to use with your favorite design tools.',
  },
  {
    img: 'https://app.neilpatel.com/favicon.ico',
    title: 'Ubersuggest',
    link: 'https://app.neilpatel.com',
    description:
      'Ubersuggest helps you generate keyword ideas for your content marketing strategy and production. With Ubersuggests free keyword tool, generate an unlimited number of suggestions for free and take your content creation to the next level while increasing your website’s chances of ranking against the competition.',
  },
  {
    img: 'https://app.readable.com/text/favicon-196x196.png',
    title: 'Readable',
    link: 'https://app.readable.com',
    description:
      'Measure the Readability of Text - Text Analysis Tools - Unique readability tools to improve your writing! App.readable.com',
  },
  {
    img: 'https://cdn.sqldbm.com/favicon/favicon.png?v=4115e914-e2e8-46fa-a357-0bfc73309d49',
    title: 'SqlDBM',
    link: 'https://sqldbm.com/',
    description: 'SQL Database Modeler - SQL Database Modeler, Entity Relationship Diagram',
  },
  {
    img: 'https://astexplorer.net/favicon.png',
    title: 'AST explorer',
    link: 'https://astexplorer.net',
    description:
      'An online AST explorer. You can use it for VSCode language extensions for example.',
  },
  {
    img: 'https://autoprefixer.github.io/assets/icon/favicon.ico',
    title: 'Autoprefixer CSS',
    link: 'https://autoprefixer.github.io',
    description: 'Autoprefixer is a PostCSS plugin which parses your CSS and adds vendor prefixes',
  },
  {
    img: 'https://bashsenpai.com/favicon.png',
    title: 'BashSenpai',
    link: 'https://bashsenpai.com',
    description:
      'The grep command is a text-search utility in Unix-based systems that allows users to search through files for lines that match a specified pattern, typically using regular expressions.',
  },
  {
    img: 'https://framerusercontent.com/images/o2xJbojhYMlMAxIHqToswHAxjcM.svg',
    title: 'Buildspace',
    link: 'https://buildspace.so',
    description:
      'Buildspace is a school for people to work on their own ideas. our online school, nights & weekends is 6 weeks long and completely free. build any idea -- art, music, code, ai, web3, whatever. give it a shot!',
  },
  {
    img: 'https://carbon.now.sh/favicon.ico',
    title: 'Code Image Generator',
    link: 'https://carbon.now.sh',
    description:
      'Carbon is the easiest way to create and share beautiful images of your source code.',
  },
  {
    img: 'https://cloudinary-res.cloudinary.com/image/upload/f_auto,q_auto/c_scale,w_32/v1597183771/website/cloudinary_web_favicon.png',
    title: 'Cloudinary',
    link: 'https://cloudinary.com',
    description:
      'Streamline media management and improve user experience by automatically delivering images and videos, enhanced and optimized for every user.',
  },
  {
    img: 'https://color.adobe.com/apple-touch-icon.png',
    title: 'Adobe Color',
    link: 'https://color.adobe.com',
    description:
      'Create color palettes with the color wheel or image, browse thousands of color combinations from the Adobe Color community.',
  },
  {
    img: 'https://colorsinspo.com/static/img/colorsinspo-favicon.png',
    title: 'Colorsinspo',
    link: 'https://colorsinspo.com',
    description:
      'Colorsinspo is all in one resource to find everything about colors with extreme ease. Also, you will get Freebies, Inspirations, Color Tools, Gradients and thousands of trendy hand-picked color palettes.',
  },
  {
    img: 'https://company-227336.frontify.com/favicon.svg',
    title: 'Frontify',
    link: 'https://frontify.com/',
    description:
      'Frontify is a brand-building platform where a user-friendly DAM meets customized portals.',
  },
  {
    img: 'https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png',
    title: 'Google Cloud Platform',
    link: 'https://console.cloud.google.com',
    description:
      'Google Cloud Platform lets you build, deploy, and scale applications, websites, and services on the same infrastructure as Google.',
  },
  {
    img: 'https://coolors.co/assets/img/favicon.png',
    title: 'Coolors',
    link: 'https://coolors.co',
    description: 'Generate or browse beautiful color combinations for your designs.',
  },
  {
    img: 'https://courses.kevinpowell.co/content-assets/public/g1CGPm47JpWbEp4qzAWUjaPD',
    title: 'Kevin Powell Courses',
    link: 'https://courses.kevinpowell.co',
    description: 'Learn CSS, HTML, and more with Kevin Powell',
  },
  {
    img: '',
    title: 'CSS Bud',
    link: 'https://cssbud.com',
    description:
      'Free, high-quality CSS tools and code snippets for your design, technical and creative needs. Shadows, glows, text tools and more - come and enjoy.',
  },
  {
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAtdJREFUSEuNVktME1EUPW8iHzENpINp0dTgJ4aaNFBBraTycaG4IC7VBDcm7jQu3LlBd6xcuxB1QWLExBgxSEUCRCQGNWCiEUgUS4BiMdSo9DOmHTPT6cx7894UZtPJ65t7zzv33HMfwaPITRCpG7aHAFDti/qK9o/20O/51fx+Y50gg1y2h5D+YVXloqkgIIIERmxjv/4jRpLfSJAh6B/WogGqmdkGXYDaCRCd2MSiJWCBccTQSLnYVFC5rAQNVS6M/Fg3T8ZQxB1ZiMiixc57rLMFV6Zn8WQpbtKbp6joszlF7tISzJ9pxqfff9E2+qHAv041lcBZIUbBrNpQPHV4Zbw40YDehRiuTs8ilc1Riiok2HLRLBDe8lK8bm+Chv7YyDuEq6vwILrCaZuniADlkoSQXImxeEJI3v2mQ+iqrcHl91/QF43hwp4aRFZ/Iq4ofAK9D4wGKWh/9/Yy9AQO4OLUZ71xCuunPDIGwvUYW0ugc2IGSi7/5Q3/Ptz9toR4RhEoUFBk7djbJIJ4Ov9BqSRhtK0Rda4KHH01ha8bKSsQ10P2Drf3AQH8rh34vpHSC3bQVYG5jmbcnl/E9Y/zjEJouOKu1k5vdrK1/dLeXbi3sILzPg8ehgKoG5rE3J8kJyZxR7K+xFsFgHM+D6LJNEZaD8P3fALryj/6q+JtQ9VMtyOryJZfnNzpRqQliP2Db7CYTFMBN3FTUefbVdTuceNxKIBrM3Poi64WpYW2Cs59zWQ2Fd1p9OO4XIn6l28NWljUYht3tnem0SRC8OtsK2oHJ5FQFMMRnQYLXQra6tl3yk1VHHFXYigchPxsnPETsVo2GUqFktI1GAgH0buwjKfLa5Tet3ICFgJbG7MGKk57qzG+lkA6m6Vmr7NCneY2XSdepgKV04G44c5NQ7soqBPoWDktO81qtshOlwSiX1skqZu9QrBBi10cmAuD4crm1UbN3voPGUZfdzdvzXEAAAAASUVORK5CYII=',
    title: 'cubic-bezier.com',
    link: 'https://cubic-bezier.com',
    description: 'Create smooth cubic-bezier curves for your animations.',
  },
  {
    img: 'https://img6.wsimg.com/ux/favicon/favicon-32x32.png',

    title: 'GoDaddy',
    link: 'https://godaddy.com/',
    description:
      'Your all in one solution to grow online. Start a free trial to create a beautiful website, get a domain name, fast hosting, online marketing and award-winning 24/7 support.',
  },
  {
    img: 'https://detectify.com/favicon-32x32.png',
    title: 'Detectify',
    link: 'https://detectify.com',
    description:
      'Use Detectify to get complete coverage of your growing attack surface with Surface Monitoring and Application Scanning.',
  },
  {
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--E8ak4Hr1--/c_limit,f_auto,fl_progressive,q_auto,w_32/https://dev-to.s3.us-east-2.amazonaws.com/favicon.ico',
    title: 'DEV Community',
    link: 'https://dev.to',
    description:
      'A constructive and inclusive social network for software developers. With you every step of your journey.',
  },
  {
    img: 'https://cdn.dribbble.com/assets/dribbble-vector-ball-c75e531ccee3110d0ee5ae951fd1d0a65d2ff25d3c0577757ea7e8d8e3e75db4.svg',
    title: 'Dribbble',
    link: 'https://dribbble.com',
    description:
      'Find Top Designers & Creative Professionals on Dribbble. We are where designers gain inspiration, feedback, community, and jobs. Your best resource to discover and connect with designers worldwide.',
  },
  {
    img: 'https://elevenlabs.io/favicon.ico',
    title: 'ElevenLabs',
    link: 'https://elevenlabs.io',
    description:
      'Create premium AI voices for free in any style and language with the most powerful online AI text to speech (TTS) software ever. Generate text-to-speech voiceovers in minutes with our character AI voice generator.',
  },
  {
    img: 'https://fettblog.eu/icon/favicon-32x32.png',
    title: 'Fettblog',
    link: 'https://fettblog.eu',
    description:
      'Articles on web dev and software engineering: TypeScript, JavaScript, Rust, and more!',
  },
  {
    img: 'https://fontflipper.com/favicon.ico',
    title: 'Font Flipper',
    link: 'https://fontflipper.com',
    description:
      "Preview 800+ Google Fonts on top of your own designs, without having to download the fonts first. You'll play 'Hot or Not' to collect fonts you like, and then download them for free for both personal and commercial projects.",
  },
  {
    img: 'https://fontjoy.com/favicon32.gif',
    title: 'Fontjoy',
    link: 'https://fontjoy.com',
    description:
      'Fontjoy helps designers choose the best font combinations. Mix and match different fonts for the perfect pairing.',
  },
  {
    img: 'https://fontsource.org/favicon-32x32.png',
    title: 'Fontsource',
    link: 'https://fontsource.org',
    description:
      'Download and self-host 1500+ open-source fonts in neatly bundled NPM packages. Access a comprehensive library of web typefaces for free.',
  },
  {
    img: 'https://fd-foundershub-prod-efcfhvedd8ezgef6.z01.azurefd.net/client/media/favicon.078aa083.ico',
    title: 'FoundersHub',
    link: 'https://foundershub.startups.microsoft.com',
    description: 'Microsoft for Startups Founders Hub',
  },
  {
    img: 'https://getwaves.io/favicon-32x32.png?v=f13a1a2e88a9720e746d5561039d3f5f',
    title: 'Get Waves',
    link: 'https://getwaves.io',
    description:
      'A free SVG wave generator to make unique SVG waves for your next web design. Choose a curve, adjust complexity, randomize!',
  },
  {
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><mask id='stripes'><rect height='40%' width='100%' fill='white' /><rect height='7%' y='41%' width='100%' fill='white' /><rect height='6%' y='50%' width='100%' fill='white' /><rect height='5%' y='59%' width='100%' fill='white' /><rect height='4%' y='68%' width='100%' fill='white' /><rect height='3%' y='78%' width='100%' fill='white' /><rect height='2%' y='90%' width='100%' fill='white' /><rect height='1%' y='99%' width='100%' fill='white' /></mask><circle mask='url(%23stripes)' fill='rgb(100% 9.5383% 84%)' cx='50' cy='50' r='50'/></svg>",
    title: 'GradientStyle',
    link: 'https://gradient.style',
    description: 'Wide gamut Color 4 compliant CSS gradient builder.',
  },
  {
    img: 'https://gradienty.codes/favicon.ico',
    title: 'Gradienty',
    link: 'https://gradienty.codes',
    description: 'Generate Tailwind Gradients for your Backgrounds, Texts & Shadows!',
  },
  {
    img: 'https://hype4.academy/favicon/favicon-32x32.png',
    title: 'SquarePlanet',
    link: 'https://hype4.academy',
    description: 'Learn design and front-end coding with our articles, books, courses and videos.',
  },
  {
    img: '',
    title: 'KickoffLabs AI',
    link: 'https://kickofflabs.com',
    description:
      'Word of mouth marketing made easy with viral giveaways, referral programs, or product launches that can be setup in minutes! Try it today.',
  },
  {
    img: 'https://languagetool.org/images/favicons/favicon-32x32.png',
    title: 'LanguageTool',
    link: 'https://languagetool.org',
    description:
      'LanguageTool is a free grammar checker and paraphraser for English, Spanish, and 30 other languages. Instantly check your text for grammar and style mistakes.',
  },
  {
    img: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:72,height:72/https://file-uploads.teachablecdn.com/6c306183fec944e6befdf4a2d9d6f9e1/5b135617683b4bf287fa4f3c662b08a0',
    title: 'Supercharge Design',
    link: 'https://learn.supercharge.design',
    description:
      'Learn how to design beautiful, accessible, and usable websites with Supercharge Design.',
  },
  {
    img: 'https://cdn.auth0.com/quantum-assets/dist/1.0.4/favicons/auth0-favicon-onlight.png',
    title: 'Auth0',
    link: 'https://manage.auth0.com',
    description: 'Secure access for everyone. But not just anyone.',
  },
  {
    img: 'https://mockups-design.com/wp-content/uploads/2017/08/cropped-favicon-32x32.png',
    title: 'MockupsDesign',
    link: 'https://mockups-design.com',
    description:
      'Download free mockups! Mockups Design is a site where you can find free premium mockups that can be used in your private and commercial work.',
  },
  {
    img: 'https://motion-canvas.github.io/img/favicon.svg',
    title: 'Motion Canvas',
    link: 'https://motion-canvas.github.io',
    description: 'A TypeScript library for creating animated videos using the Canvas API.',
  },
  {
    img: 'https://my.vultr.com/favicon/favicon-32x32.png?v=1',

    title: 'Vultr',
    link: 'https://vultr.com',
    description:
      'Vultr Global Cloud Hosting - Brilliantly Fast SSD VPS Cloud Servers. 100% KVM Virtualization',
  },
  {
    img: 'https://mycolor.space/favicon5.png',
    title: 'ColorSpace',
    link: 'https://mycolor.space',
    description:
      'Here you can find the perfect matching color scheme for your next project! Generate nice color palettes, color gradients and much more! Your space for everything that has to do with color!',
  },
  {
    img: '',
    title: 'NeetCode',
    link: 'https://neetcode.io',
    description: 'A better way to prepare for coding interviews.',
  },
  {
    img: 'https://neumorphism.io/apple-touch-icon.png',
    title: 'Neumorphism Generator',
    link: 'https://neumorphism.io',
    description:
      'CSS code generator that will help with colors, gradients and shadows to adapt this new design trend or discover its posibilities.',
  },
  {
    img: 'https://oh-vue-icons.js.org/pwa-192x192.png',
    title: 'Oh, Vue Icons!',
    link: 'https://oh-vue-icons.js.org',
    description: 'Include inline SVG icons from different popular icon packs in Vue 2 & 3 easily.',
  },
  {
    img: 'https://omatsuri.app/assets/favicon-32x32.png',
    title: 'Omatsuri',
    link: 'https://omatsuri.app',
    description: 'Progressive Web Application with 12 open source frontend focused tools',
  },
  {
    img: 'https://ads.spotify.com/favicon/favicon-32x32.png',
    title: 'Spotify Advertising',
    link: 'https://ads.spotify.com',
    description:
      'Du bietest Produkte und Dienstleistungen an. Wir sorgen daf\u00fcr, dass Millionen von H\u00f6rer*innen davon erfahren. Mach Werbung mit Ad Studio f\u00fcr nur 250 \u20ac.',
  },
  {
    img: 'https://playcss.app/assets/favicon.ico',
    title: 'PlayCSS',
    link: 'https://playcss.app',
    description: 'Daily challenges to level up your frontend skills with fun!',
  },
  {
    img: 'https://polypane.app/favicon-32x32.png?v=5df5528946772487a6ab462ff2125f26',
    title: 'Polypane',
    link: 'https://polypane.app',
    description:
      'A stand-alone browser and devtool that helps you build better sites in less time. All the tools you need in one app.',
  },
  {
    img: 'https://refine.dev/img/refine_favicon.svg',
    title: 'Refine',
    link: 'https://refine.dev',
    description:
      'Build React-based internal tools, admin panels, dashboards & B2B apps with unmatched flexibility.',
  },
  {
    img: 'https://roadmap.sh/manifest/icon32.png',
    title: 'Developer Roadmaps',
    link: 'https://roadmap.sh',
    description:
      'Community driven roadmaps, articles and guides for developers to grow in their career.',
  },
  {
    img: 'https://runwayml.com/icons/icon-light.png',
    title: 'RunwayML',
    link: 'https://runwayml.com',
    description:
      'Runway is an applied AI research company shaping the next era of art, entertainment and human creativity.',
  },
  {
    img: 'https://monday.com/static/img/favicons/favicon-monday5-32.png',
    title: 'Monday',
    link: 'https://monday.com',
    description:
      'monday.com is an open, work platform where anyone can create the tools they need to run every aspect of their work.',
  },
  {
    img: 'https://cdn.sedo.com/c7r/assets/static/images/icons/favicon-32x32.png?v=dLJ3bx2xjj',

    title: 'Sedo',
    link: 'https://sedo.com',
    description: 'Buy, sell, or park domains!',
  },
  {
    img: 'https://segment-anything.com/assets/M_Favicon.ico',
    title: 'Segment Anything',
    link: 'https://segment-anything.com',
    description: 'Image segmentation tool.',
  },
  {
    img: 'https://separator.mayastudios.com/favicon-vert.svg',
    title: 'Chrome Bookmarks Separator',
    link: 'https://separator.mayastudios.com',
    description: 'A simple tool to create separators for your Chrome bookmarks bar.',
  },
  {
    img: 'https://uptimerobot.com/assets/ico/favicon.ico',
    title: 'UptimeRobot',
    link: 'https://uptimerobot.com',
    description:
      'Free Website Monitoring. Monitor your website 24/7 and be the first to know when it goes down.',
  },
  {
    img: 'https://subset.so/favicon.ico',
    title: 'Subset',
    link: 'https://subset.so',
    description: 'A full-featured, no-frills, modern spreadsheet.',
  },
  {
    img: 'https://tailwindcomponents.com/favicon-32x32.png',
    title: 'Tailwind CSS Components',
    link: 'https://tailwindcomponents.com',
    description:
      'A free repository of open source Tailwind CSS components and templates to bootstrap your new apps, projects or landing sites!',
  },
  {
    img: ['https://the-algorithms.com/logo_t.svg'],
    title: 'The Algorithms',
    link: 'https://the-algorithms.com',
    description:
      'Open Source resource for learning Data Structures & Algorithms and their implementation in any Programming Language',
  },
  {
    img: 'https://threejs-journey.com/assets/favicons/favicon-32x32.png',
    title: 'Three.js Journey',
    link: 'https://threejs-journey.com',
    description:
      'The ultimate Three.js course whether you are a beginner or a more advanced developer',
  },
  {
    img: ['https://abs.twimg.com/favicons/twitter-orange.3.ico'],
    title: 'Twitter Ads',
    link: 'https://ads.twitter.com',
    description:
      'Advertise on X to increase reach and sales. X helps you build awareness and drive conversions with effective ad formats and targeting tools.',
  },
  {
    img: 'https://undraw.co/favicon-32x32.png',
    title: 'unDraw - Open source illustrations for any idea',
    link: 'https://undraw.co',
    description:
      'The design project with open-source illustrations for any idea you can imagine and create. Create beautiful websites, products and applications with your color, for free.',
  },
  {
    img: '',
    title: 'The W3C Markup Validation Service',
    link: 'https://validator.w3.org',
    description: "W3C's easy-to-use markup validation service, based on SGML and XML parsers.",
  },
  {
    img: ['https://vueschool.io/img/favicons/favicon-32x32.png'],
    title: 'Vue School | The #1 source for learning Vue.js from experts',
    link: 'https://vueschool.io',
    description:
      'Basic to advanced Vue.js training from core team members & industry experts. In-depth lessons with weekly updates on Pinia, Typescript, Vue Use, Laravel, & more',
  },
  {
    img: ['https://wakatime.com/favicon-32x32.png'],
    title: 'WakaTime - Dashboards for developers',
    link: 'https://wakatime.com',
    description: 'Open source IDE plugins for programmers.',
  },
  {
    img: ['https://wave.webaim.org/favicon.ico'],
    title: 'WAVE Web Accessibility Evaluation Tools',
    link: 'https://wave.webaim.org',
    description: '',
  },
  {
    img: [
      'https://webdesigner.withgoogle.com/static/gwd/logo.svg',
      'https://www.google.com/webdesigner/images/favicon.ico',
    ],
    title: 'Google Web Designer - Home',
    link: 'https://webdesigner.withgoogle.com',
    description: '',
  },
  {
    img: ['https://whatunit.com/favicon.svg'],
    title: 'What CSS length unit should you use?',
    link: 'https://whatunit.com',
    description: '',
  },
  {
    img: ['https://worldvectorlogo.com/static/img/favicon.ico'],
    title: 'Worldvectorlogo: Brand logos free to download',
    link: 'https://worldvectorlogo.com',
    description:
      'Worldvectorlogo has the largest SVG logo vector collection. All logos work with EPS, AI, PSD and Adobe PDF. No account and unlimited downloads for free.',
  },
  {
    img: ['https://www.algolia.com/algoliaweb-static-favicons/light-mode/favicon-32x32.png'],
    title: 'AI search that understands | Algolia',
    link: 'https://www.algolia.com',
    description:
      'Enterprises and developers use Algolia\u2019s AI search infrastructure to understand users and show them what they\u2019re looking for.',
  },
  {
    img: ['https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico'],
    title: 'Cloud Computing Services - Amazon Web Services (AWS)',
    link: 'https://www.aws.com',
    description:
      'Amazon Web Services offers reliable, scalable, and  inexpensive cloud computing services. Free to join, pay only for what you use.',
  },
  {
    img: [],
    title: 'Behance',
    link: 'https://www.behance.net',
    description: '',
  },
  {
    img: ['https://www.blobmaker.app/icons/icon-48x48.png?v=d2064a4d23cc375c9a373bc2d9f2aa35'],
    title: 'Blobmaker - Make organic SVG shapes for your next design',
    link: 'https://www.blobmaker.app',
    description:
      'Make organic SVG shapes for your next design. Modify the complexity, contrast, and color, to generate unique SVG blobs every time.',
  },
  {
    img: [
      'https://www.chuonthis.ca/wp-content/uploads/2016/05/cropped-ChuonThis_Favicon-32x32.jpg',
    ],
    title: 'Chu On This - Your guide to fulfilling culinary experiences.',
    link: 'https://www.chuonthis.ca',
    description: 'Your guide to fulfilling culinary experiences.',
  },
  {
    img: [
      'https://assets-global.website-files.com/62e3ee10882dc50bcae8d07a/64fdcefd8c5ca2fdb2978b80_Codewars%20256.png',
    ],
    title: 'Codewars - Achieve mastery through coding practice and developer mentorship',
    link: 'https://www.codewars.com',
    description:
      'A coding practice website for all programming levels \u00e2\u0080\u0093 Join a community of over 3 million developers and improve your coding skills in over 55 programming languages!',
  },
  {
    img: ['https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/favicon-v2-32x32.png'],
    title: 'Coursera | Degrees, Certificates, & Free Online Courses ',
    link: 'https://www.coursera.org',
    description:
      'Learn new job skills in online courses from industry leaders like Google, IBM, & Meta. Advance your career with top degrees from Michigan, Penn, Imperial & more. ',
  },
  {
    img: [],
    title: 'CSS Filter Generator - create CSS and share CSS filters and mix-blend-mode overlays',
    link: 'https://www.cssfiltergenerator.com',
    description:
      'CSS Filter Generator produces CSS filters and mix-blend-mode overlay code using a graphical user interface.',
  },
  {
    img: ['https://www.cssportal.com/assets/images/favicon.ico'],
    title: 'CSS Portal - Generators, Resources, Tools, HTML - CSS Portal',
    link: 'https://www.cssportal.com',
    description:
      'CSS Portal is home to many examples of CSS / HTML and how it can be used in website design.',
  },
  {
    img: ['https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/Hn19bEHYJbt.png'],
    title: 'Meta for Business: Marketing auf Facebook',
    link: 'https://ads.facebook.com',
    description:
      'Meta\u00a0for\u00a0Business bietet dir die aktuellsten Neuigkeiten, Werbetipps, Best Practices und Fallstudien zur Verwendung von Facebook, damit du deine Gesch\u00e4ftsziele leichter erreichen kannst.',
  },
  {
    img: [
      'https://assets-global.website-files.com/5ff5bc964272ff6278f83e5f/5ff5bc964272ff22a3f841b4_32px.png',
    ],
    title: 'Flick: Social Media Marketing Platform',
    link: 'https://www.flick.social',
    description:
      'The tools you need to grow and manage your Socials: Scheduling, Hashtags, AI Content Writing & Analytics. Built for business owners and marketers. 7-Day Free Trial.',
  },
  {
    img: [
      'https://assets-global.website-files.com/6262d15e87c1ba75ee7ce234/627050ba5cdb59b52bf283b2_fp-badge-32.svg',
    ],
    title: 'Fontpair - Free, beautiful fonts and font pairings curated just for you',
    link: 'https://www.fontpair.co',
    description:
      'Free typography for your next design project (Google Fonts, Fontshare, Fontesk, Font Squirrel, and more)',
  },
  {
    img: ['https://www.founderandlightning.com/hubfs/web/images/id/favicons/favicon.png'],
    title: 'Founder and Lightning - launch your tech start-up.',
    link: 'https://www.founderandlightning.com',
    description:
      'Founder and Lightning is a pioneering venture builder. We work with entrepreneurs to start tech companies, launch new products and digitise industries.',
  },
  {
    img: ['https://www.google.com/images/branding/product/1x/ads_24dp.png'],
    title:
      '\n      Google Ads\u00a0\u2012 Mit Onlinewerbung Kund*innen gewinnen und mehr Umsatz\n      erzielen\n    ',
    link: 'https://ads.google.com',
    description:
      'Sehen Sie sich an, wie Sie mit Google Ads f\u00fcr Ihr Unternehmen werben k\u00f6nnen. Nutzen Sie unsere digitale Werbeplattform f\u00fcr die Kundenakquisition und den Verkauf.',
  },
  {
    img: [
      'https://assets.interaction-design.org/img/app/favicon--32.png?id=de68285ab17490dbb479f6d2af35bd5d',
    ],
    title: 'UX Design Courses & Global UX Community | IxDF',
    link: 'https://www.interaction-design.org',
    description:
      'Discover the entire spectrum of UX design from 40 courses & local meetups. Learn from industry experts and gain recognized certificates.',
  },
  {
    img: [
      'https://www.iubenda.com/favicon.ico',
      'https://www.iubenda.com/favicon.png',
      'https://www.iubenda.com/touch-icon-iphone.png',
    ],
    title: 'Compliance Solutions for Websites, Apps and Organizations | iubenda',
    link: 'https://www.iubenda.com',
    description:
      'iubenda is your 360\u00b0 compliance solution for global data privacy laws. Privacy policy generator, cookie consent management, ROPA, Terms and more.',
  },
  {
    img: ['https://www.kaggle.com/static/images/favicon.ico'],
    title: 'Kaggle: Your Machine Learning and Data Science Community',
    link: 'https://www.kaggle.com',
    description:
      'Kaggle is the world\u2019s largest data science community with powerful tools and resources to help you achieve your data science goals.',
  },
  {
    img: [
      'https://www.killingthyme.net/wp-content/themes/killingthyme/favicon/favicon-32x32.png',
      'https://www.killingthyme.net/wp-content/uploads/2020/01/cropped-KILLING-THYME-FAVICON-3-32x32.jpg',
      'https://www.killingthyme.net/wp-content/uploads/2020/01/cropped-KILLING-THYME-FAVICON-3-180x180.jpg',
      'https://www.killingthyme.net/wp-content/uploads/2020/01/cropped-KILLING-THYME-FAVICON-3-192x192.jpg',
      'https://www.killingthyme.net/wp-content/themes/killingthyme/favicon/apple-touch-icon.png',
      'https://www.killingthyme.net/wp-content/themes/killingthyme/favicon/favicon-16x16.png',
      'https://www.killingthyme.net/wp-content/themes/killingthyme/safari-pinned-tab.svg',
    ],
    title: 'Simple & Delicious Feel-Good Recipes - Killing Thyme',
    link: 'https://www.killingthyme.net',
    description:
      'If you believe food should be nourishing and delicious this is the site for you! Browse hundreds of simple feel-good recipes that will take dinner from ho-hum to HIGH-HO!',
  },
  {
    img: [
      'https://www.magentaa11y.com/assets/favicon/favicon-32x32.png',
      'https://www.magentaa11y.com/assets/favicon/safari-pinned-tab.svg',
      'https://www.magentaa11y.com/assets/favicon/favicon.ico',
      'https://www.magentaa11y.com/assets/favicon/favicon-16x16.png',
      'https://www.magentaa11y.com/assets/favicon/apple-touch-icon.png',
    ],
    title: '\n    \n    Accessibility checklist\n    \n    \n    - MagentaA11y\n  ',
    link: 'https://www.magentaa11y.com',
    description:
      'The accessibility acceptance criteria testing checklist generator by T-Mobile - Accessibility Resource Center',
  },
  {
    img: [],
    title: 'MathJax | Beautiful math in all browsers.',
    link: 'https://www.mathjax.org',
    description: 'Beautiful math in all browsers.',
  },
  {
    img: ['https://www.mingcute.com#icons/favicon.ico'],
    title: 'MingCute Icon _ Carefully Designed Icon Library',
    link: 'https://www.mingcute.com#icons',
    description:
      "MingCute Icon is a set of simple and exquisite open-source icon library. Whether you're a designer or a developer, it's perfect for use in web and mobile.",
  },
  {
    img: ['https://www.permit.io/favicon.ico'],
    title: 'Never Build Permissions Again | Permit.io',
    link: 'https://www.permit.io',
    description:
      'Easily bake-in access control in minutes regardless of previous experience or expertise. Based on OPA and OPAL. Treat policy as code to make Auth-z easy.',
  },
  {
    img: [
      'https://ph-static.imgix.net/ph-ios-icon.png?auto=format,compress',
      'https://ph-static.imgix.net/ph-favicon-coral.ico',
    ],
    title: ' Product Hunt \u2013 The best new products in tech. ',
    link: 'https://www.producthunt.com',
    description:
      "Product Hunt is a curation of the best new products, every day. Discover the latest mobile apps, websites, and technology products that everyone's talking about.",
  },
  {
    img: [
      'https://www.recipetineats.com/wp-content/uploads/2018/12/cropped-favicon@2x.png?w=180',
      'https://www.recipetineats.com/wp-content/uploads/2018/12/cropped-favicon@2x.png?w=192',
      'https://www.recipetineats.com/wp-content/uploads/2018/12/cropped-favicon@2x.png?w=32',
    ],
    title: 'RecipeTin Eats - A Food Blog Serving Up Quick & Easy Dinner Recipes',
    link: 'https://www.recipetineats.com',
    description:
      "A food blog with 1500+ delicious, free recipes. Quick and easy dinners, classics done right, incredible one-pot wonders, Asian takeout at home and holiday feasting \u2013 it's all here!",
  },
  {
    img: [
      'https://www.sanity.io/static/images/favicons/favicon-96x96.png',
      'https://www.sanity.io/static/images/favicons/apple-icon-60x60.png',
      'https://www.sanity.io/static/images/favicons/android-icon-192x192.png',
      'https://www.sanity.io/static/images/favicons/apple-icon-120x120.png',
      'https://www.sanity.io/static/images/favicons/favicon-32x32.png',
      'https://www.sanity.io/static/images/favicons/apple-icon-76x76.png',
      'https://www.sanity.io/static/images/favicons/apple-icon-152x152.png',
      'https://www.sanity.io/static/images/favicons/favicon-16x16.png',
      'https://www.sanity.io/static/images/favicons/apple-icon-114x114.png',
      'https://www.sanity.io/static/images/favicons/apple-icon-180x180.png',
      'https://www.sanity.io/static/images/favicons/apple-icon-57x57.png',
      'https://www.sanity.io/static/images/favicons/apple-icon-72x72.png',
      'https://www.sanity.io/static/images/favicons/apple-icon-144x144.png',
      'https://www.sanity.io/static/images/favicons/safari-pinned-tab.svg',
    ],
    title: 'Sanity: The Composable Content Cloud',
    link: 'https://www.sanity.io',
    description:
      'Sanity is the modern CMS that transforms content into a competitive advantage. Customize, collaborate, and scale your digital experiences seamlessly.',
  },
  {
    img: [
      'https://www.scribbr.de/apple-touch-icon-144x144.png',
      'https://www.scribbr.de/android-chrome-192x192.png',
      'https://www.scribbr.de/favicon-32x32.png',
      'https://www.scribbr.de/apple-touch-icon-57x57.png',
      'https://www.scribbr.de/apple-touch-icon-180x180.png',
      'https://www.scribbr.de/apple-touch-icon-114x114.png',
      'https://www.scribbr.de/apple-touch-icon-76x76.png',
      'https://www.scribbr.de/apple-touch-icon-72x72.png',
      'https://www.scribbr.de/apple-touch-icon-152x152.png',
      'https://www.scribbr.de/apple-touch-icon-60x60.png',
      'https://www.scribbr.de/favicon-96x96.png',
      'https://www.scribbr.de/apple-touch-icon-120x120.png',
      'https://www.scribbr.de/favicon-16x16.png',
    ],
    title: 'Wir korrigieren Dokumente f\u00fcr Schule, Studium und Job',
    link: 'https://www.scribbr.de',
    description:
      'Nutze unser professionelles Lektorat, unsere Plagiatspr\u00fcfung, unsere Schreibtools und unsere Wissensdatenbank f\u00fcr deine Texte.',
  },
  {
    img: [],
    title: 'Script Kit: Shortcut to Everything',
    link: 'https://www.scriptkit.com',
    description: 'An open-source kit to optimize your developer workflow.',
  },
  {
    img: ['https://www.startupschool.org/favicon.ico'],
    title: 'Startup School - The Best Resource for Founders',
    link: 'https://www.startupschool.org',
    description: '',
  },
  {
    img: [
      'https://advice-assets.themuse.com/advice-static/images/favicons/apple-touch-icon.png',
      'https://advice-assets.themuse.com/advice-static/images/favicons/favicon-32x32.png',
      'https://advice-assets.themuse.com/advice-static/images/favicons/favicon-16x16.png',
      'https://advice-assets.themuse.com/advice-static/images/favicons/favicon.ico',
      'https://advice-assets.themuse.com/advice-static/images/favicons/safari-pinned-tab.svg',
    ],
    title: 'Job Search, Companies Hiring Near Me, and Advice | The Muse',
    link: 'https://www.themuse.com',
    description: 'Find jobs at the best companies hiring near you and get free career advice.',
  },
  {
    img: [
      'https://www.theodinproject.com/favicon-16x16.png',
      'https://www.theodinproject.com/apple-touch-icon.png',
      'https://www.theodinproject.com/favicon-32x32.png',
      'https://www.theodinproject.com/safari-pinned-tab.svg',
    ],
    title: '\n      Your Career in Web Development Starts Here | The Odin Project\n    ',
    link: 'https://www.theodinproject.com',
    description: 'The Odin Project empowers aspiring web developers to learn together for free',
  },
  {
    img: ['https://www.thompson-morgan.com/favicon.ico'],
    title: 'Buy Plants, Seeds, Fruit Trees & Seed Potatoes | Thompson & Morgan',
    link: 'https://www.thompson-morgan.com',
    description: 'Plants, seeds, fruit trees & seed potatoes from Thompson & Morgan UK.',
  },
  {
    img: [
      'https://assets-global.website-files.com/59ace8427353c50001765cbd/64b04e230fc91ee716508182_ui-fav.png',
      'https://assets-global.website-files.com/59ace8427353c50001765cbd/64b04e2ae881e0c83961a0d0_webclip.png',
    ],
    title: 'User Interviews | The User Research Recruiting Platform for Teams',
    link: 'https://www.userinterviews.com',
    description:
      'Recruit users from our audience of over 4 million vetted consumers and professionals, or bring your own audience and build a participant database for any type of UX research.',
  },
  {
    img: ['https://www.usertesting.com/themes/custom/usertesting/favicon.ico'],
    title: 'UserTesting Human Insight Platform | Improve Customer Experience (CX)',
    link: 'https://www.usertesting.com',
    description:
      "Whether you're focused on UI, UX Research, Design, or CX, with the UserTesting Platform you can get customer feedback to improve digital experiences and drive innovation",
  },
  {
    img: ['https://www.wolframalpha.com/_next/static/images/favicon_1zbE9hjk.ico'],
    title: 'Wolfram|Alpha: Computational Intelligence',
    link: 'https://www.wolframalpha.com',
    description:
      "Compute answers using Wolfram's breakthrough technology & knowledgebase, relied on by millions of students & professionals. For math, science, nutrition, history, geography, engineering, mathematics, linguistics, sports, finance, music\u2026",
  },
  {
    img: [
      'https://assets-global.website-files.com/5f92a84224a1222449ebbe88/5fae4d02a980ab813482b791_webclip%20256x256px.png',
      'https://assets-global.website-files.com/5f92a84224a1222449ebbe88/5fae4cfd9f3098a68797ae2f_favico%2032x32px.png',
    ],
    title: 'Website Optimization and Digital Agency Sales Tools | WooRank',
    link: 'https://www.woorank.com',
    description:
      'Our easy-to-use SEO tools will help you optimize your online presence, grow your business and generate more leads.',
  },
  {
    img: [
      'https://bookface-static.ycombinator.com/assets/favicon-c8a914eeeba9fe6f7a863b35608b55aeedd7c1ff409c97b9ecb96b7a6c278d70.ico',
    ],
    title:
      "Startup Jobs at YC Companies in Engineering, Product, Design, Remote and more | Y Combinator's Work at a Startup",
    link: 'https://www.workatastartup.com',
    description: '',
  },
  {
    img: [
      'https://www.xmind.net/webapp-icon/icon_1024.png',
      'https://www.xmind.net/favicon.ico',
      'https://www.xmind.net/webapp-icon/icon_152.png',
      'https://www.xmind.net/webapp-icon/icon_57.png',
      'https://www.xmind.net/webapp-icon/icon_192.png',
      'https://www.xmind.net/webapp-icon/icon_128.png',
      'https://www.xmind.net/webapp-icon/icon_384.png',
      'https://www.xmind.net/webapp-icon/icon_114.png',
      'https://www.xmind.net/webapp-icon/icon_512.png',
      'https://www.xmind.net/webapp-icon/icon_48.png',
      'https://www.xmind.net/webapp-icon/icon_72.png',
      'https://www.xmind.net/webapp-icon/icon_144.png',
    ],
    title: 'Xmind - Mind Mapping App',
    link: 'https://www.xmind.net',
    description:
      'Xmind is the most professional and popular mind mapping tool. Millions of people use Xmind to clarify thinking, manage complex information, brainstorming, get work organized, remote and work from home WFH.',
  },
  {
    img: [
      'https://bookface-static.ycombinator.com/assets/ycdc/favicon-c8a914eeeba9fe6f7a863b35608b55aeedd7c1ff409c97b9ecb96b7a6c278d70.ico',
    ],
    title: 'Y Combinator',
    link: 'https://www.ycombinator.com',
    description:
      'Y Combinator created a new model for funding early stage startups. Twice a year we invest in a large number of startups.',
  },
  {
    img: [
      'https://realtimecolors.com/images/favicon.png',
      'https://realtimecolors.com/favicon.png',
    ],
    title: 'Realtime Colors',
    link: 'https://realtimecolors.com',
    description: 'Visualize your colors and fonts on a real website.',
  },
  {
    img: ['https://framerusercontent.com/images/jMyKrhKKXqpc15qYqC3A0pZELw.png'],
    title: 'Rive - Build interactive motion graphics that run anywhere',
    link: 'https://rive.app',
    description:
      'Complex designer-developer handoff is a thing of the past. Build functional graphics with motion and interactivity that run in products, apps, sites, and games.',
  },
  {
    img: [
      'https://min-max-calculator.9elements.com/_astro/favicon._mGrvhSb.png',
      'https://min-max-calculator.9elements.com/_astro/favicon.zgaExJuQ.svg',
    ],
    title: 'Min-Max-Value Interpolation',
    link: 'https://min-max-calculator.9elements.com',
    description:
      'A tool that calculates the CSS clamp formula to interpolate between two values in a given viewport range.',
  },
  {
    img: [
      'https://pocketbase.io/images/favicon/favicon-16x16.png',
      'https://pocketbase.io/images/favicon/apple-touch-icon.png',
      'https://pocketbase.io/images/favicon/favicon.ico',
      'https://pocketbase.io/images/favicon/safari-pinned-tab.svg',
      'https://pocketbase.io/images/favicon/favicon-32x32.png',
    ],
    title: 'PocketBase - Open Source backend in 1 file',
    link: 'https://pocketbase.io',
    description:
      'Open Source backend in 1 file with realtime database, authentication, file storage and admin dashboard',
  },
  {
    img: [
      'https://twitchadvertising.tv/assets/favicons/favicon-16x16.png',
      'https://twitchadvertising.tv/assets/favicons/favicon-32x32.png',
      'https://twitchadvertising.tv/assets/favicons/favicon.ico',
    ],
    title: 'Twitch Ads',
    link: 'https://twitchadvertising.tv',
    description: 'Where brands and communities intersect',
  },
  {
    img: ['https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/zx9BDE-xwXJ.png'],
    title: 'Instagram for Business: Marketing auf Instagram | Instagram for Business',
    link: 'https://business.instagram.com',
    description:
      'Mehr als zwei Millionen Unternehmen verbinden sich auf Instagram mit Menschen. Erfahre mehr dar\u00fcber, wie du mit Instagram neue Kundschaft erreichst, deine Zielgruppe ausbaust und bestehende Kund*innen ansprichst.',
  },
  {
    img: ['https://uptimerobot.com/favicon.ico'],
    title: 'UptimeRobot: Free Website Monitoring Service',
    link: 'https://uptimerobot.com',
    description:
      'Start monitoring in 30 seconds. Use advanced SSL, keyword and cron monitoring. Get notified by email, SMS, Slack and more. Get 50 monitors for FREE!',
  },
].sort((a, b) => a.title.localeCompare(b.title)) as Bookmark[]
</script>

<template>
  <main class="mb-16 text-center md:text-left">
    <h1 class="!lg:my-32 my-16! text-center text-h3 font-bold">My Bookmarks</h1>
    <div class="flex flex-col justify-around gap-16">
      <div class="space-y-2">
        <a
          v-for="bookmarkItem in data"
          :key="bookmarkItem.title"
          :href="bookmarkItem.link"
          class="select-none group-hover:opacity-60"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div
            class="group flex h-12 -translate-x-3 items-center justify-center gap-4 rounded-sm px-3 py-2 hover:bg-light md:justify-start"
          >
            <div class="flex max-h-8 min-w-8 justify-center">
              <img :src="bookmarkItem.img" width="32px" />
            </div>
            <div class="min-w-48 truncate text-left text-nowrap">
              {{ bookmarkItem.title }}
            </div>
            <p
              class="hidden flex-1 truncate text-nowrap text-ellipsis text-muted group-hover:block"
            >
              {{ bookmarkItem.description }}
            </p>
          </div>
        </a>
      </div>
    </div>
  </main>
</template>

<style scoped>
svg {
  max-width: 2rem;
  max-height: 2rem;
}
</style>
