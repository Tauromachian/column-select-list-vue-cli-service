<template>
  <v-app>
    <column-select-list :columns="columnDefs" v-model="visibleColumns"></column-select-list>
  </v-app>
</template>

<script>
import ColumnSelectList from "./components/ColumnSelectList";

export default {
  name: "App",
  components: {
    ColumnSelectList
  },

  data: () => ({
    columnDefs: [
      {
        headerName: "Servicio",
        field: "service",
        checkboxSelection: true
      },
      {
        headerName: "CRF",
        field: "clientCode"
      },
      {
        headerName: "Codigo",
        field: "price"
      },
      {
        headerName: "Codigo1",
        field: "price1"
      },
      {
        headerName: "Codigo2",
        field: "price2"
      }
    ],
    visibleColumns: []
  })
};
</script>
