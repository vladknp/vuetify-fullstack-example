<template>
  <v-container>
    <v-card flat>
      <v-tabs v-model="tab" align-with-title>
        <v-tab v-for="tab in tables" :key="tab.name">{{ tab.name }}</v-tab>
      </v-tabs>
      <v-card flat>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="clients"
            :loading="isLoading"
          >
            <template #[`item.phone`]="props">
              <input
                :value="props.item.phone"
                :disabled="isDisabledInput(props.item.id)"
                @input="enterPhone(props.item.id, $event)"
              />
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
      <v-btn elevation="2" @click="UPDATE_CLIENT" :disabled="isDisabledButton"
        >Зберігти</v-btn
      >
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ClientInfo",
  props: [
    "clients",
    "isLoading",
    "isDisabledButton",
    "isDisabledInput",
    "enterPhone",
    "UPDATE_CLIENT",
  ],
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
  computed: {
    headers() {
      return this.tables[this.tab]?.headers || [];
    },
  },
};
</script>
