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
        path: 'category/:id',
        name: 'category',
        redirect: '',
        meta: { title: '分类' },
        component: () => import(/* webpackChunkName: "category" */ '../views/post/index.vue')
      },
      {
        path: 'post/:fromePage/:articleId',
        name: 'post',
        redirect: '',
        meta: { title: '文章' },
        component: () => import(/* webpackChunkName: "post" */ '../views/post/index.vue')
      },
      {
        path: 'sailing',
        name: 'sailing',
        redirect: '',
        meta: { title: '航情' },
        component: () => import(/* webpackChunkName: "sailing" */ '../views/sailing/index.vue')
      },
      {
        path: 'partner',
        name: 'partner',
        redirect: '',
        meta: { title: '招聘' },
        component: () => import(/* webpackChunkName: "partner" */ '../views/partner/index.vue')
      },
      {
        path: 'activity',
        name: 'activity',
        redirect: '',
        meta: { title: '活动' },
        component: () => import(/* webpackChunkName: "activity" */ '../views/activity/index.vue')
      },
      {
        path: 'profession',
        name: 'profession',
        redirect: '',
        meta: { title: '专栏' },
        component: () => import(/* webpackChunkName: "profession" */ '../views/profession/index.vue')
      },
      {
        path: 'profession/author',
        name: 'author',
        redirect: '',
        meta: { title: '专栏作者' },
        component: () => import(/* webpackChunkName: "author" */ '../views/profession/author.vue')
      },
      {
        path: 'profession/author/recommend',
        name: 'author',
        redirect: '',
        meta: { title: '专栏推荐作者' },
        component: () => import(/* webpackChunkName: "authorRecommend" */ '../views/profession/author-recommend.vue')
      },
      {
        path: 'imagelib',
        name: 'imagelib',
        redirect: '',
        meta: { title: '图片' },
        component: () => import(/* webpackChunkName: "imagelib" */ '../views/imagelib/index.vue')
      },
      {
        path: 'videolib',
        name: 'videolib',
        redirect: '',
        meta: { title: '视频' },
        component: () => import(/* webpackChunkName: "videolib" */ '../views/videolib/index.vue')
      },
      {
        path: 'topic',
        name: 'topic',
        meta: { title: '专题' },
        component: () => import(/* webpackChunkName: "topic" */ '../views/topic/index.vue')
      },
      {
        path: 'meeting',
        name: 'meeting',
        meta: { title: '会议' },
        component: () => import(/* webpackChunkName: "meeting" */ '../views/meeting/index.vue')
      },
      {
        path: 'kol',
        name: 'kol',
        meta: { title: '领航者' },
        component: () => import(/* webpackChunkName: "kol" */ '../views/kol/index.vue')
      },
      {
        path: 'kol/:id',
        name: 'kolDetail',
        meta: { title: '领航者详情' },
        component: () => import(/* webpackChunkName: "kolDetail" */ '../views/kol/kol-detail.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: () => import(/* webpackChunkName: "login" */ '../views/user/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: { title: '注册' },
    component: () => import(/* webpackChunkName: "register" */ '../views/user/register.vue')
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
