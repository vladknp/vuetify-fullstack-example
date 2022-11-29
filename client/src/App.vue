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
      clients: [
        {
          id: 0,
          name: "Лован",
          phone: "+380971122334",
          inn: 1234567890,
          residence: "м. Львів, вул. Миру 8",
          regPlace: "м. Львів, вул. Миру 8",
          numOfPassport: 123456,
        },
        {
          id: 1,
          name: "Рюмер",
          phone: "+380975566778",
          inn: 2234567890,
          residence: "м. Київ, вул. Дмитрівська 28, кв. 5",
          regPlace: "м. Київ, вул. Дмитрівська 28, кв. 5",
          numOfPassport: 223456,
        },
      ],
    };
  },
  computed: {
    headers() {
      return this.tables[this.tab]?.headers || [];
    },
  computed: {},
  methods: {},
};
</script>
