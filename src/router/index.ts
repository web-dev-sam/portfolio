import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomePage.vue'),
    },
    {
      path: '/skills',
      name: 'Skills',
      component: () => import('../views/SkillsPage.vue'),
    }
  ],
})

export default router
