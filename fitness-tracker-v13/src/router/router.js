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
    path: '/dashboard',
    name: VIEW.dashboard,
    component: () => import('../views/Dashboard.vue'),
  },
  {
    path: '/measurements',
    name: VIEW.measurements,
    meta: { layout: LAYOUT.measurements },
    component: () => import('../views/Measurements.vue'),
  },
  {
    path: '/in-progress-workout',
    name: VIEW.inProgressWorkout,
    meta: { layout: LAYOUT.inProgressWorkout },
    component: () => import('../views/InProgressWorkout.vue'),
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
