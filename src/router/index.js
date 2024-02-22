import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
// import ProjectsView from '../views/ProjectsView.vue'
// import ProjectView from '../views/ProjectView.vue'
// import KedaiRambe from '../components/ProjectContent/KedaiRambe.vue'
import KedaiRambePro from '../views/KedaiRambePro.vue'

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
      children: [{ path: 'kedairambe', component: KedaiRambePro }]
    }
    // {
    //   path: '/projects/:project',
    //   name: 'project',
    //   component: ProjectView,
    //   children: [{ path: 'Kedai Rambe', component: KedaiRambe }]
    // }
  ]
})

export default router
