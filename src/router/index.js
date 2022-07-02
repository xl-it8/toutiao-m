import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/views/login'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/layout'),
<<<<<<< HEAD
    redirect: '/layout/my',
=======
    redirect: '/layout/home',
>>>>>>> ab3c3c799e5895f326ff0451f8c4d318b24693fa
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        // 子路由的路径不要加/
        path: 'question',
        name: 'question',
        component: () => import('@/views/question')
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/video')
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/my')
      }

    ]
  },
  {
    path: '/search',
    component: () => import('@/views/search')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
