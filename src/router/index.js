import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
// import ProjectsView from '../views/ProjectsView.vue'
import KedaiRambePro from '../views/KedaiRambePro.vue'
import PersonalWebsitePro from '../views/PersonalWebsitePro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/projects',
      name: 'projects',
      children: [
        { path: 'kedairambe', component: KedaiRambePro },
        { path: 'personalwebsite', component: PersonalWebsitePro }
      ]
    }
  ]
})

export default router
