import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/dashboard"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue")
  },
  {
    path: "/active-workout/:name",
    name: "ActiveWorkout",
    component: () => import("../views/ActiveWorkout.vue")
  },
  {
    path: "/charts",
    name: "Charts",
    component: () => import("../views/admin/Charts.vue")
  },
  {
    path: "/workouts",
    name: "Workouts",
    component: () => import("../views/admin/Workouts.vue")
  },
  {
    path: "/exercises",
    name: "Exercises",
    component: () => import("../views/admin/Exercises.vue")
  },
  {
    path: "/measurements",
    name: "Measurements",
    component: () => import("../views/admin/Measurements.vue")
  },
  {
    path: "/records",
    name: "Records",
    component: () => import("../views/admin/Records.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/general/About.vue")
  },
  {
    path: "*",
    component: () => import("../views/general/NotFound.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
