<template>
  <v-app>
    <v-card flat>
      <ClientInfo
        :clients="clients"
        :isLoading="isLoading"
        :isDisabledButton="isDisabledButton"
        :isDisabledInput="isDisabledInput"
        :enterPhone="enterPhone"
        :UPDATE_CLIENT="UPDATE_CLIENT"
      ></ClientInfo>
    </v-card>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";
import {
  FIND_ALL_CLIENTS,
  INPUT_PHONE,
  UPDATE_CLIENT,
} from "@/store/constants";
import ClientInfo from "@/components/ClientInfo.component";

export default {
  name: "App",
  components: {
    ClientInfo,
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch(FIND_ALL_CLIENTS);
  },
  computed: {
    ...mapState(["clients", "isLoading"]),
    ...mapState({
      isDisabledButton(state) {
        return state.clientId === null;
      },
    }),
  },
  methods: {
    ...mapActions([UPDATE_CLIENT]),
    enterPhone(id, event) {
      this.$store.commit(INPUT_PHONE, { id, value: event.target.value });
    },
    isDisabledInput(id) {
      const state = this.$store.state;
      if (state.clientId === null) {
        return false;
      }
      return state.clientId !== id;
    },
  },
};
</script>
