import { MyRoute } from "@/router/interface/interfaceRoute";
import { RouteRecordNormalized } from "vue-router";
export interface State {
  permissions: MyRoute | null;
  asideMenu: Array<MyRoute>;
  currentMenu: string;
  crumbList: Array<RouteRecordNormalized>;
}
export interface Mutations {
  SET_PERMISSION: (state: State, permissions: MyRoute | null) => void;
  SET_MENU: (state: State, asideMenu: Array<MyRoute>) => void;
  SET_CURRENT_MENU: (state: State, currentMenu: string) => void;
  SET_CRUMB_LIST: (
    state: State,
    crumbList: Array<RouteRecordNormalized>
  ) => void;
}
export interface Actions {
  FETCH_PERMISSION: (context: any) => Promise<void>;
}
