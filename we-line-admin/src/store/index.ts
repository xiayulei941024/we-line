import { createStore, useStore as vuexStore, Store } from "vuex";
import { State as UserState } from "./interface/InterfaceUser";
import { State as PaginationState } from "./interface/InterfacePagination";

// useStore类型
export function useStore(): Store<MyStoreType> {
  return vuexStore();
}
interface MyModuleState {
  user: UserState;
  pagination: PaginationState;
}
// 根store中的state的类型
// interface IRootState {
// 
// }
// type IStoreType = IRootState | IModuleState
type MyStoreType = MyModuleState;

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles: __WebpackModuleApi.RequireContext = require.context(
  "./modules",
  true,
  /\.ts$/
);

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules: any, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

export default createStore({
  // state: {},
  // mutations: {},
  // actions: {},
  modules
});
