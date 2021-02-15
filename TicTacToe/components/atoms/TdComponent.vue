<template>
  <td @click="onClickTd">{{ cellData }}</td>
</template>

<script>
export default {
  props: {
    cellData: String,
    // cellData: O,X String
    rowIndex: Number,
    cellIndex: Number,
    turn: String,
  },
  methods: {
    onClickTd() {
      // this.$root.$data;
      console.log(this.$root.$data);
      console.log(this.$parent.$data);
      console.log(this.$root.$data.turn);
      const rootData = this.$root.$data;
      rootData.tableData[this.rowIndex][this.cellIndex] =  rootData.turn;
      rootData.turn =  rootData.turn === 'O' ? 'X' : 'O';
      /**
       * {turn: "O", __ob__: Observer}
       *turn: "X"
       *__ob__: Observer {value: {…}, dep: Dep, vmCount: 1}
       *__proto__: Object
       */
      /**
       * {turn: "X", __ob__: Observer}
       *turn: "X"
       *__ob__: Observer {value: {…}, dep: Dep, vmCount: 1}
       *__proto__: Object
       */
    },
  },
};
</script>

<style></style>
