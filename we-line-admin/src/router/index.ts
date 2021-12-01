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
router.afterEach((to: any) => {
  NProgress.done();
  try {
    //设置标题
    if (to.meta.name) {
      document.title = to.meta.name;
    }
  } catch (err) {
    err;
  }
  // let routerList = to.matched;
  // //顶部面包屑
  // store.commit("setCrumbList", routerList);
  // aside选中的active
  store.commit("user/SET_CURRENT_MENU", to.name);
});

export default router;
