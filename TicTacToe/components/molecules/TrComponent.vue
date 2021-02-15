<template>
  <tr>
    <td-component
      v-for="(cellData, index) in rowData"
      :cell-data="cellData"
      :cell-index="index"
      :row-index="rowIndex"
      :key="index"
      :turn="turn"
    ></td-component>
    <!-- 자식(TdComponent)한테 다시 데이터를 넘겨준다. -->
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
    // 부모(tableComponent)로부터 데이터를 받고
  },
  data() {
    return {
      parent: 'Im your father'
    }
  }
};
</script>

<style></style>
