import { MyRoute } from "@/router/interface/interfaceRoute";
export interface State {
  permissions: MyRoute | null;
  asideMenu: Array<MyRoute>;
  currentMenu: string;
}
export interface Mutations {
  SET_PERMISSION: (state: State, permissions: MyRoute | null) => void;
  SET_MENU: (state: State, asideMenu: Array<MyRoute>) => void;
  SET_CURRENT_MENU: (state: State, currentMenu: string) => void;
}
export interface Actions {
  FETCH_PERMISSION: (context: any) => Promise<void>;
}
