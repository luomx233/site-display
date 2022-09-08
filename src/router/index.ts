import { createRouter, createWebHistory } from "vue-router";
import Projects from "../views/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "projects",
      component: Projects,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: () => import("../views/detail.vue"),
    },
    {
      path: "/resume",
      name: "resume",
      component: () => import("../views/resume.vue"),
    },
  ],
});
export default router;
