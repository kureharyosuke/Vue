<template>
<div>
    <table-component v-bind:table-data="tableData" />
    <div>{{turn}}님의 턴입니다.</div>
    <!-- v-bind: 자식컴포넌트 데이터를 건내줄때(TableComponent)-->
</div>
</template>

<script>
import Vue from 'vue'
import TableComponent from '../components/organlsms/TableComponent.vue'
export default {
    components: {
        TableComponent,
    },
    data() {
        return {
            tableData:[
                ['', '', ''],
                ['', '', ''],
                ['', '', ''],
            ],
            turn: 'O',
        };
    },
    methods: {
        onChangeData() {
            // this.tableData[1][0] = 'X'; 작동하지 않음...
            this.$set(this.tableData[1], 0, 'X')
            // Vue.set(this.tableData[1], 0, 'X')
        }
    },
}
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
