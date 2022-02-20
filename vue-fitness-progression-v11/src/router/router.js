import Vue from 'vue'
import VueRouter from 'vue-router'
import { LAYOUT, VIEW } from '../constants/globals'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/login',
    name: VIEW.login,
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/dashboard',
    name: VIEW.dashboard,
    component: () => import('../views/Dashboard.vue'),
  },
  {
    path: '/active-workout',
    name: VIEW.activeWorkout,
    meta: { layout: LAYOUT.activeWorkout },
    component: () => import('../views/ActiveWorkout.vue'),
  },
  {
    path: '*', // 404
    name: VIEW.notFound,
    component: () => import('../views/NotFound.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
