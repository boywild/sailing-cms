import { createRouter, createWebHistory, RouteRecordRaw, RouteLocationNormalized, RouteLocationNormalizedLoaded } from 'vue-router'
// import Home from '../views/Home.vue'
import LayoutArticle from '@/layout/LayoutArticle.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: LayoutArticle,
    redirect: 'home',
    meta: { title: '海德赛事' },
    children: [
      {
        path: 'home',
        name: 'home',
        redirect: '',
        meta: { title: '首页' },
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
      },
      {
        path: 'post/:id',
        name: 'post',
        redirect: '',
        meta: { title: '文章' },
        component: () => import('../views/post/index.vue')
      },
      {
        path: 'sailing',
        name: 'sailing',
        redirect: '',
        meta: { title: '航情' },
        component: () => import('../views/sailing/index.vue')
      },
      {
        path: 'partner',
        name: 'partner',
        redirect: '',
        meta: { title: '招聘' },
        component: () => import('../views/partner/index.vue')
      },
      {
        path: 'activity',
        name: 'activity',
        redirect: '',
        meta: { title: '活动' },
        component: () => import('../views/activity/index.vue')
      },
      {
        path: 'profession',
        name: 'profession',
        redirect: '',
        meta: { title: '专栏' },
        component: () => import('../views/profession/index.vue')
      },
      {
        path: 'imagelib',
        name: 'imagelib',
        redirect: '',
        meta: { title: '图片' },
        component: () => import('../views/imagelib/index.vue')
      },
      {
        path: 'videolib',
        name: 'videolib',
        redirect: '',
        meta: { title: '视频' },
        component: () => import('../views/videolib/index.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, savedPosition: any) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 }
    }
  }
})

export default router
