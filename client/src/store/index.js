import Vue from "vue";
import Vuex from "vuex";
import { FIND_ALL_CLIENTS, INPUT_PHONE, SET_CLIENTS } from "@/store/constants";
import { Client } from "@/services";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    clients: [],
  },
  getters: {},
  mutations: {
    [INPUT_PHONE](state, payload) {
      const { idx, value } = payload;
      const newClients = [...state.clients];

      newClients[idx].phone = value;
      state.clients = newClients;
    },
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
