<template>
    <div>
        <h1>Welcom to {{title2}}</h1>
        <input type="text" v-model="input1">
        <button type="button" @click="getData">Get</button>
        <button type="button" @click="setData">Set</button>
        <select class="from-control" v-model="region" @change="changeRegion">
            <option :key="i" :value="d.v" v-for="(d,i) in options">{{d.t}}</option>
        </select>

        
        <table class="table table-bordered" v-if="tableIf">
            <tr :key="i" v-for="(d,i) in options">
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
             </tr>
        </table>
            <!-- v-show 는 리소스 를 적게 잡아먹는다. -->
        <table class="table table-bordered" v-show="tableShow">
            <tr :key="i" v-for="(d,i) in options">
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
             </tr>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: "HOMEPAGE",
            title2: "Tokyo",
            input1:"asdf",
            options: [
                {v:"T", t:"Tokyo"},
                {v:"O", t:"Osaka"},
                {v:"N", t:"Nagoya"}

            ],
            region: "O",
            tableIf: true,
            tableShow: false,
        
        }
    },
    watch: {
        input1() {
            console.log(this.input1);
        }
    },
    methods: {
        getData() {
            alert(this.input1);
        },
        setData() {
            this.input1= "12345"
        },
        changeRegion() {
            alert(this.region);
        }
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('destroyed');
    }
    /** beforeCreate
        Home.vue?76f2:31 created
        Home.vue?76f2:34 beforeMount
    sHome.vue?76f2:37 
            */
}
</script>
<style lang="stylus">

</style>