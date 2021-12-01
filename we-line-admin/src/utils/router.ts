import { MyRoute } from "@/router/interface/InterfaceRoute";

// 路由懒加载
export const loadView = (
  view: string
): (() => Promise<typeof import("*.vue")>) => {
  return (): Promise<typeof import("*.vue")> => import(`@/views/${view}`);
};
//递归处理后端数据
export function filterAsyncRouter(asyncRouterMap: Array<MyRoute>): Array<MyRoute> {
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
