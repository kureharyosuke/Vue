<template>
  <table>
    <tr-component v-for="(rowData, index) in tableData" :row-data="rowData" :row-index="index" :key="index" />
    <!-- :row-index="index" 내가 몇번쨰 가로의 행인지 가르켜준다. -->
  </table>
</template>

<script>
import TrComponent from "../molecules/TrComponent.vue";
export default {
  components: {
    TrComponent,
  },
  props: {
    tableData: Array,
  },
};
</script>

<style>
table {
  border-collapse: collapse;
}
td {
  border: 1px solid black;
  width: 40px;
  height: 40px;
  text-align: center;
}
</style>
