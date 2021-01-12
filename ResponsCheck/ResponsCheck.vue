<template>
  <div>
    <div id="screen" v-bind:class="state">{{ message }}</div>
    <!--  v-bind:class="state"> 가  state: "waiting", 를 가리킨다. -->
    <!-- React className? -->
    <div>
      <div>평균 시간:{{ result }}</div>
      <button v-on:click="onReset">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResponsCheck",
  data() {
    return {
      result: [],
      state: "waiting",
      message: "클릭해서 시작해서요.",
    };
  },
  methods: {
    onReset() {},
  },
};
</script>

<style scoped>
/* scoped 사용하면 이 컴포넌트(ResponsCheck)안에서만 사용할수 있다. 스코프드 스타일 */
#screen {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  text-align: center;
  user-select: none;
  background-color: aqua;
}
#screen.wating {
  background-color: aqua;
}
#screen.ready {
  background-color: red;
  color: white;
}
#screen.now {
  background-color: greenyellow;
}
</style>
