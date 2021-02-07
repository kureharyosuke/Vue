<template>
  <tr>
    <td-component
      v-for="(cellData, index) in rowData"
      :cell-data="cellData"
      :cell-index="index"
      :row-index="rowIndex"
      :key="cellData"
    ></td-component>
  </tr>
</template>

<script>
import TdComponent from "./components/atoms/TdComponent.vue";

export default {
  components: {
    TdComponent,
  },
  props: {
    rowData: Array,
    rowIndex: Number,
  },
};
</script>

<style></style>
