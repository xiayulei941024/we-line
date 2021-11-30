import { State, Mutations } from "../interface/InterfaceUser";
import { MyRoute } from "@/router/interface/interfaceRoute";
import { ActionContext } from "vuex";
import { clone } from "@/utils/clone";
import permissionRoutes from "@/router/routes/permission-routes";
import dynamicRoutes from "@/router/routes/dynamic-routes";
import router from "@/router/index";

const state: State = {
  permissions: null
};

const mutations: Mutations = {
  SET_PERMISSION(state: State, permissions: MyRoute | null): void {
    state.permissions = permissions;
  }
};

const actions = {
  async FETCH_PERMISSION({
    commit
  }: ActionContext<unknown, unknown>): Promise<void> {
    //处理需要动态的路由
    const routes: Array<MyRoute> = filterAsyncRouter(permissionRoutes);
    //不需要动态的路由（深拷贝）
    const MainContainer = clone(dynamicRoutes).find((v: any) => v.path === "/");
    let children: Array<MyRoute> = [];
    children = MainContainer.children;
    //将两种路由结合生成左边的导航栏
    children = children.concat(routes);
    // commit("SET_MENU", children);
    MainContainer.children = children;
    /*
                为所有有children的菜单路由设置第一个children为默认路由
                主要是供面包屑用，防止点击面包屑后进入某个路由下的 '' 路由,比如/manage/
                而我们的路由是
                [
                    /manage/menu1,
                    /manage/menu2
                ]
            */
    setDefaultRoute([MainContainer]);
    /*  初始路由 */
    const initialRoutes = router.options.routes;
    router.addRoute(MainContainer);
    /* 完整的路由表 */
    commit("SET_PERMISSION", [...initialRoutes, ...dynamicRoutes]);
  }
};

// 路由懒加载
export const loadView = (
  view: string
): (() => Promise<typeof import("*.vue")>) => {
  return (): Promise<typeof import("*.vue")> => import(`@/views/${view}`);
};
//递归处理后端数据
function filterAsyncRouter(asyncRouterMap: Array<MyRoute>): Array<MyRoute> {
  return asyncRouterMap.filter((route: MyRoute) => {
    if (route.children) {
      route.component = () => import("@/layout/Empty.vue");
    } else {
      route.component = loadView(route.component as string);
    }
    if (route.children != null && route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children);
    } else {
      delete route["children"];
      delete route["redirect"];
    }
    return true;
  });
}
// 路由重定向 递归为所有有子路由的路由设置第一个children.path为默认路由
export function setDefaultRoute(routes: Array<MyRoute>): void {
  routes.forEach((route: MyRoute) => {
    if (route.children && route.children.length > 0) {
      route.redirect = { name: route.children[0].name };
      setDefaultRoute(route.children);
    }
  });
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
