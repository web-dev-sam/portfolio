import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/home/HomePage.vue'),
    },
    {
      path: '/bm',
      component: () => import('../views/bookmarks/BookmarksPage.vue'),
    },
    {
      path: '/skills',
      component: () => import('../views/skills/SkillsPage.vue'),
    },
    {
      path: '/projects',
      component: () => import('../views/projects/ProjectsPage.vue'),
    },
    {
      path: '/project/webry',
      component: () => import('../views/project/ProjectWebry.vue'),
    },
    {
      path: '/project/beat-timer',
      component: () => import('../views/project/ProjectBeatTimer.vue'),
    },
    {
      path: '/project/frac',
      component: () => import('../views/project/ProjectFrac.vue'),
    },
    {
      path: '/project/planets',
      component: () => import('../views/project/ProjectPlanets.vue'),
    },
    {
      path: '/project/dictionary',
      component: () => import('../views/project/ProjectDictionary.vue'),
    },
    {
      path: '/project/ss-leaderboard-extension',
      component: () => import('../views/project/ProjectSSLE.vue'),
    },
    {
      path: '/project/bs-tournament-overlay',
      component: () => import('../views/project/ProjectBSTO.vue'),
    },
    {
      path: '/project/beat-stats',
      component: () => import('../views/project/ProjectBeatStats.vue'),
    },
    {
      path: '/project/log7-glossary',
      component: () => import('../views/project/ProjectLog7.vue'),
    },
    {
      path: '/blogs',
      component: () => import('../views/blogs/BlogsPage.vue'),
    },
    {
      path: '/blog/exploring-css-where-it-doesnt-make-sense',
      component: () => import('../views/blog/3/ArticlePage.vue'),
    },
    {
      path: '/blog/naming-every-developers-nightmare',
      component: () => import('../views/blog/2/ArticlePage.vue'),
    },
    {
      path: '/blog/boost-your-javascript-with-jsdoc-typing',
      component: () => import('../views/blog/1/ArticlePage.vue'),
    },
  ],
})

export default router
