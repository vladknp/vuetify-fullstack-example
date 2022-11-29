<template>
  <v-app>
    <v-card flat>
      <v-tabs v-model="tab" align-with-title>
        <v-tab v-for="tab in tables" :key="tab.name">{{ tab.name }}</v-tab>
      </v-tabs>
      <v-card flat>
        <v-card-text>
          <v-data-table :headers="headers" :items="clients">
            <template #[`item.phone`]="props">
              <input v-model="props.item.phone" />
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-card>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import { FIND_ALL_CLIENTS } from "@/store/constants";

export default {
  name: "App",
  data() {
    return {
      tab: null,
      tables: [
        {
          name: "Клієнт",
          headers: [
            {
              text: "Ім`я",
              sortable: false,
              value: "name",
            },
            {
              text: "Телефон",
              sortable: false,
              value: "phone",
            },
            {
              text: "Код ІНН",
              sortable: false,
              value: "inn",
            },
          ],
        },
        {
          name: "Додаткова інформація",
          headers: [
            {
              text: "Код ІНН",
              sortable: false,
              value: "inn",
            },
            {
              text: "Місце проживання",
              sortable: false,
              value: "residence",
            },
            {
              text: "Місце реєстрації",
              sortable: false,
              value: "regPlace",
            },
            {
              text: "Номер паспорта",
              sortable: false,
              value: "numOfPassport",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.$store.dispatch(FIND_ALL_CLIENTS);
  },
  computed: {
    ...mapState({
      clients: (state) => {
        return state.clients;
      },
    }),
    headers() {
      return this.tables[this.tab]?.headers || [];
    },
  },
  methods: {},
};
</script>
