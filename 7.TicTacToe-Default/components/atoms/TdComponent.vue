<template>
  <td :@click="onClickTd">{{ cellData }}</td>
</template>

<script>
export default {
  props: {
    cellData: String,
    rowIndex: Number,
    cellIndex: Number,
  },
  computed() {},
  methods: {
    onClickTd() {
      console.log("hi");
      console.log(this.rowIndex, this.cellIndex, this.cellData);
      // 1. cellData가 없다면 리턴한다. - 자른다.
      if (this.cellData) return;
      // ! 자식컴포넌트에서 최상위 컴포넌트에서 데이터에 접근 할수 있다. this.$root.$data;
      // ! 자식컴포넌트에서  부모 컴포넌트의 데이터에 접근 할수 있다. this.$parent.$data;
      const rootData = this.$root.$data;
      console.log("🚀 ~ file: TdComponent.vue ~ line 17 ~ onClickTd ~ rootData", rootData);
      // Vue.$set
      this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn);
      let win = false;
      if (
        rootData.tableData[this.rowIndex][0] === rootData.turn &&
        rootData.tableData[this.rowIndex][1] === rootData.turn &&
        rootData.tableData[this.rowIndex][2] === rootData.turn
      ) {
        win = true;
      }
      if (
        rootData.tableData[0][this.cellIndex] === rootData.turn &&
        rootData.tableData[1][this.cellIndex] === rootData.turn &&
        rootData.tableData[2][this.cellIndex] === rootData.turn
      ) {
        win = true;
      }
      if (
        rootData.tableData[0][0] === rootData.turn &&
        rootData.tableData[1][1] === rootData.turn &&
        rootData.tableData[2][2] === rootData.turn
      ) {
        win = true;
      }
      if (
        rootData.tableData[0][2] === rootData.turn &&
        rootData.tableData[1][1] === rootData.turn &&
        rootData.tableData[2][0] === rootData.turn
      ) {
        win = true;
      }
      if (win) {
        // 이긴 경우: 3줄 달성
        rootData.winner = rootData.turn;
        rootData.turn = "O";
        rootData.tableData = [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ];
      } else {
        // 무승부
        let all = true; // all이 true면 무승부라는 뜻
        rootData.tableData.forEach((row) => {
          // 무승부 검사
          row.forEach((cell) => {
            if (!cell) {
              all = false;
            }
          });
        });
        if (all) {
          // 무승부
          rootData.winner = "";
          rootData.turn = "O";
          rootData.tableData = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ];
        } else {
          rootData.turn = rootData.turn === "O" ? "X" : "O";
        }
      }
    },
  },
};
</script>
