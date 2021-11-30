import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
  RouteLocationNormalized,
  NavigationGuardNext
} from "vue-router";
//进度条
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { MyRoute } from "./interface/interfaceRoute";

const routes: Array<MyRoute> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/Login.vue")
  },
  {
    path: "/",
    component: () => import("../layout/Layout.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as Array<RouteRecordRaw>
});

// 前置守卫
router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    NProgress.start();
    next();
  }
);
// 后置守卫
router.afterEach((to: any, from: any, next: any) => {
  NProgress.done();
  next;
});

export default router;
