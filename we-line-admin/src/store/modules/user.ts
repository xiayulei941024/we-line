import { State, Mutations } from "../interface/user";

const state: State = {
  token: "123"
};

const mutations: Mutations = {
  CHANGE_TOKEN(state: State, token: string): void {
    state.token = token;
  }
};

const actions = null;

export default {
  namespace: true,
  state,
  mutations,
  actions
};
