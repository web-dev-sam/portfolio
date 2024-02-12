import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/home/HomePage.vue'),
    },
    {
      path: '/skills',
      name: 'Skills',
      component: () => import('../views/skills/SkillsPage.vue'),
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/projects/ProjectsPage.vue'),
    }
  ],
})

export default router
