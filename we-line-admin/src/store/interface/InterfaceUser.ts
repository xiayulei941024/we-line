import { MyRoute } from "@/router/interface/interfaceRoute";
export interface State {
  permissions: MyRoute | null;
}
export interface Mutations {
  SET_PERMISSION: (state: State, permissions: MyRoute | null) => void;
}
export interface Actions {
  FETCH_PERMISSION: (context: any) => Promise<void>
}