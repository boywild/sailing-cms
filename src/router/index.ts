import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'
import LayoutArticle from '@/layout/LayoutArticle.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: LayoutArticle,
    redirect: 'home',
    children: [
      {
        path: 'home',
        name: 'home',
        redirect: '',
        component: () =>
          import(/* webpackChunkName: "home" */ '../views/Home.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
