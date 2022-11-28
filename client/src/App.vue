<template>
  <v-app>
    <v-card flat>
      <v-tabs v-model="tab" align-with-title>
        <v-tab>Клієнт</v-tab>
        <v-tab>Додаткова інформація</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="table in tables" :key="table.id">
          <v-card flat>
            <v-card-text>
              <v-data-table :headers="table.headers" :items="table.clients">
                <template #[`item.phone`]="props">
                  <input v-model="props.item.phone" />
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
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
          id: 0,
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
          clients: [
            {
              name: "Лован",
              phone: "+380971234567",
              inn: 1234567890,
            },
            {
              name: "Рюмер",
              phone: "+380972234567",
              inn: 2234567890,
            },
          ],
        },
        {
          id: 1,
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
          clients: [
            {
              inn: "1234567890",
              residence: "м. Львів, вул. Миру 8",
              regPlace: "м. Львів, вул. Миру 8",
              numOfPassport: 123456,
            },
            {
              inn: "2234567890",
              residence: "м. Київ, вул. Дмитрівська 28, кв. 5",
              regPlace: "м. Київ, вул. Дмитрівська 28, кв. 5",
              numOfPassport: 223456,
            },
          ],
        },
      ],
    };
  },
  computed: {},
  methods: {},
};
</script>
