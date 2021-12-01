import { State, Mutations } from "../interface/InterfaceUser";
import { MyRoute } from "@/router/interface/interfaceRoute";
import { ActionContext } from "vuex";
import { clone } from "@/utils/clone";
import permissionRoutes from "@/router/routes/permission-routes";
import dynamicRoutes from "@/router/routes/dynamic-routes";
import router from "@/router/index";
import { filterAsyncRouter, setDefaultRoute } from "@/utils/router";
import { RouteRecordNormalized } from "vue-router";

const state: State = {
  permissions: null, // 所有路由
  asideMenu: [], // 导航菜单
  currentMenu: "", // 当前active导航菜单
  crumbList: [] // 面包屑
};

const mutations: Mutations = {
  // 设置权限
  SET_PERMISSION(state: State, permissions: MyRoute | null): void {
    state.permissions = permissions;
  },
  // 设置aside菜单
  SET_MENU(state: State, asideMenu: Array<MyRoute>): void {
    state.asideMenu = asideMenu;
  },
  // 当前选中的导航
  SET_CURRENT_MENU(state: State, currentMenu: string): void {
    state.currentMenu = currentMenu;
  },
  // 设置面包屑
  SET_CRUMB_LIST(state: State, crumbList: Array<RouteRecordNormalized>): void {
    state.crumbList = crumbList;
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
    commit("SET_MENU", children);
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

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
