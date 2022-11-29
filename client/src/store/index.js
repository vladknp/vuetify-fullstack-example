import Vue from "vue";
import Vuex from "vuex";
import { SET_CLIENTS, FIND_ALL_CLIENTS } from "@/store/constants";
import { Client } from "@/services";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    clients: [],
  },
  getters: {},
  mutations: {
    [SET_CLIENTS](state, clients) {
      state.clients = clients;
    },
  },
  actions: {
    async [FIND_ALL_CLIENTS]({ commit }) {
      commit(SET_CLIENTS, await Client.getAllClients());
    },
  },
  modules: {},
});
