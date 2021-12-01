import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
  RouteLocationNormalized,
  RouteRecordNormalized,
  NavigationGuardNext
} from "vue-router";
//进度条
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { MyRoute } from "./interface/InterfaceRoute";
import store from "@/store";
import { State } from "@/store/interface/InterfaceUser";

const routes: Array<MyRoute> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/Login.vue")
  }
  // {
  //   path: "/",
  //   component: () => import("../layout/Layout.vue")
  // }
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
    if (
      !(
        store.state as {
          user: State;
        }
      ).user.permissions &&
      to.path !== "/login"
    ) {
      return store.dispatch("user/FETCH_PERMISSION").then(() => {
        next({ ...to, replace: true });
      });
    }
    next();
  }
);
// 后置守卫
router.afterEach((to: RouteLocationNormalized) => {
  NProgress.done();
  try {
    //设置标题
    if (to.meta.name) {
      document.title = to.meta.name as string;
    }
  } catch (err) {
    err;
  }
  // 当前路由的所有嵌套路径片段的路由记录
  const crumbList: Array<RouteRecordNormalized> = to.matched;
  //顶部面包屑
  store.commit("user/SET_CRUMB_LIST", crumbList);
  // aside选中的active
  store.commit("user/SET_CURRENT_MENU", to.name);
});

export default router;
