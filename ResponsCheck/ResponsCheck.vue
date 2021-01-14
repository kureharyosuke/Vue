<template>
  <div>
    <div id="screen" v-bind:class="state" v-on:click="onClickScreen">
      {{ message }}
    </div>
    <!--  v-bind:class="state"> 가  state: "waiting", 를 가리킨다. -->
    <!-- React className? -->
    <template v-show="result.length">
      <!-- v-if와 v-show의 차이점 v-if는 태그가 존재하지않고 v-show 태그가 존재한다.  -->

      <div>평균 시간:{{ average }}ms</div>
      <!-- *** result.reduce((a, c) => a + c, 0) / result.length || 0 -->
      <button v-on:click="onReset">Reset</button>
    </template>
    <!-- 필요없는 div일경우 template 로 감싸주면 된다. -->
  </div>
</template>

<script>
let startTime = 0;
let endTime = 0;
let timeout = null;

/**
 * startTime, endTime, timeout 을 data넣지 않는 이유는 화면가 상관이 없기떄문에.
 */

export default {
  name: "ResponsCheck",
  data() {
    return {
      result: [],
      state: "waiting",
      message: "클릭해서 시작해서요.",
    };
  },
  computed: {
    average() {
      return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
      // 데이터를 가공하거나 reduce같은 것을 사용할경우 꼭 ! computed는 다시 캐싱해준다.
    },
  },
  methods: {
    onReset() {
      this.result = [];
    },
    onClickScreen() {
      if (this.state === "waiting") {
        this.state = "ready";
        this.message = "초록색이 나오면 클릭하십시오.";
        timeout = setTimeout(() => {
          this.state = "now";
          this.message = "클릭하세요!";
          startTime = new Date();
        }, Math.floor(Math.random() * 1000) + 2000); // 2초 ~3초 소요
      } else if (this.state === "ready") {
        clearTimeout(timeout);
        this.state = "waiting";
        this.message = "너무 빠릅니다.";
      } else if (this.state === "now") {
        endTime = new Date();
        this.state = "waiting";
        this.message = "클릭하면 다시 시작됩니다.";
        this.result.push(endTime - startTime);
      }
    },
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
