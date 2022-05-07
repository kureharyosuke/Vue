<template>
  <table>
    <tr-component
      v-for="(rowData, index) in tableData"
      :row-data="rowData"
      :row-index="index"
      :key="rowData"
    ></tr-component>
    <!-- :row-index="index" 내가 몇번쨰 행인지 가르켜준다. -->
  </table>
</template>

<script>
import TrComponent from "./components/molecules/TrComponent";
export default {
  components: {
    TrComponent,
  },
  props: {
    tableData: Array,
  },
};
</script>

<style></style>
