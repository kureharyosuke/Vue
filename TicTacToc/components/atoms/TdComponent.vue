<template>
  <td>{{cellData}}</td>
</template>

<script>
export default {
    props: {
        cellData: String,
        // O,X String
        rowIndex: Number,
        cellIndex: Number,
    }
}
</script>

<style>

</style>