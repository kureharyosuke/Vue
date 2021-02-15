<template>
  <tr>
    <td-component
      v-for="(cellData, index) in rowData"
      :cell-data="cellData"
      :cell-index="index"
      :row-index="rowIndex"
      :key="index"
    ></td-component>
  </tr>
</template>

<script>
import TdComponent from "../atoms/TdComponent.vue";

export default {
  components: {
    TdComponent,
  },
  props: {
    rowData: Array,
    rowIndex: Number,
  },
  data() {
    return {
      parent: 'Im your father'
    }
  }
};
</script>

<style></style>
