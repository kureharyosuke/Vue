<template>
    <div>
        <h1>Welcom to {{title2}}</h1>
        <input type="text" v-model="input1">
        <button type="button" @click="getData">Get</button>
        <button type="button" @click="setData">Set</button>

    </div>
</template>
<script>
export default {
    data() {
        return {
            title: "HOMEPAGE",
            title2: "Tokyo",
            input1:"asdf"
        }
    },
    methods: {
        getData() {
            alert(this.input1);
        },
        setData() {
            this.input1= "12345"
        }
    },
    beforeCreate() {

    },
    created() {

    },
    beforeMount() {

    },
    mounted() {

    },
    beforeUpdata() {

    },
    updated() {

    },
    beforeDestory() {

    },
    destroyed() {

    }
}
</script>
<style lang="stylus">

</style>