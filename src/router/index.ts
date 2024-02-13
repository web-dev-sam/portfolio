import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/home/HomePage.vue'),
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
    }
  ],
})

export default router
