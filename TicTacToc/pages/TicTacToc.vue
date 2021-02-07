<template>
    <table-component :table-data="tableData" />
    <!-- v-bind: 자식컴포넌트 데이터를 건내줄때(TableComponent)-->
</template>

<script>
import TableComponent from './components/organlsms/TableComponent.vue'
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
        }
    },
    methods: {

    },
}
</script>

<style></style>
