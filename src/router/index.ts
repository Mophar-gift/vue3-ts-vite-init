import { createRouter, createWebHashHistory } from "vue-router"
import Dashboard from "@/views/main/dashboard/Dashboard.vue"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/dashboard"
    },
    {
      path: "/login",
      component: () => import("@/views/login/Login.vue")
    },
    {
      path: "/dashboard",
      component: Dashboard
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("@/views/not-found/NotFound.vue")
    }
  ]
})

export default router
