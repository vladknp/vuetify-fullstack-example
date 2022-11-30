import Vue from "vue";
import Vuex from "vuex";
import {
  INPUT_PHONE,
  LOADED,
  LOADING,
  FIND_ALL_CLIENTS,
  SET_CLIENTS,
  UPDATE_CLIENT,
} from "@/store/constants";
import { Client } from "@/services";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    clients: [],
    clientId: null,
    isLoading: false,
  },
  getters: {
    client(state) {
      return state.clients[state.clientId];
    },
  },
  mutations: {
    [INPUT_PHONE](state, payload) {
      const { id, value } = payload;
      const newClients = [...state.clients];
      const clientIdx = getIdx(newClients, "id", id);

      newClients[clientIdx].phone = value;
      state.clients = newClients;
      state.clientId = id;
    },
    [SET_CLIENTS](state, clients) {
      state.clients = clients;
    },
    [UPDATE_CLIENT](state, client) {
      const { clients } = state;
      const newClients = [...clients];
      const clientIdx = getIdx(newClients, "id", client.id);

      newClients[clientIdx] = client;
      state.clients = newClients;
      state.clientId = null;
    },
    [LOADING](state) {
      state.isLoading = true;
    },
    [LOADED](state) {
      state.isLoading = false;
    },
  },
  actions: {
    async [FIND_ALL_CLIENTS]({ commit }) {
      commit(LOADING);
      commit(SET_CLIENTS, await Client.getAll());
      commit(LOADED);
    },
    async [UPDATE_CLIENT](payload) {
      const { id, phone } = payload.getters.client;
      payload.commit(UPDATE_CLIENT, await Client.updateById(id, { phone }));
    },
  },
  modules: {},
});

function getIdx(arr, key, comparator) {
  return arr.findIndex((i) => i[key] === comparator);
}
