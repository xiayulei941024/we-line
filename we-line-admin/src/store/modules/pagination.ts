import { State, Mutations } from "../interface/InterfacePagination";

const state: State = {
  page: {
    current: 1,
    size: 10,
    total: 100
  },
  showStatus: true
};

const mutations: Mutations = {
  CHANGE_CURRENT(state: State, current: number): void {
    state.page.current = current;
  },
  CHANGE_SHOW_STATUS(state: State, bol: boolean): void {
    state.showStatus = bol;
  }
};

const actions = null;

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
