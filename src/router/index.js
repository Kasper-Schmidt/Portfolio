import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Projektdetalje from '../views/ProjektdetaljeView.vue'
// import Kontakt from '../views/KontaktView.vue'


// import KodeComponent from '../components/KodeComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Kontakt',
    name: 'Kontakt',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/KontaktView.vue')
  },
  {
    path: '/projekter',
    name: 'projekter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProjektView.vue')
  },
    {
    path: '/projektdetalje/:id',
    name: 'Projektdetalje',
    component:Projektdetalje,
    prop: true  
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})











export default router

