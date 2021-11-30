import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/login/Login.vue")
  },
  {
    path: "/",
    component: () =>
      import("../layout/Layout.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
