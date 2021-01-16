<template>
  <div>
    <div id="computer" v-bind:style="computedStyleObject"></div>
    <!-- :style -->
    <!-- 0 0 은 좌표임  -->
    <!-- v-bind:style= style를 가르키고 객체형식으로 쓸수 있다. :class 도 object ok -->
    <!-- Javascript = border-bottom-radius => borderBottomRadius -->
    <div>
      <button @click="onClickButton('바위')">바위</button>
      <button @click="onClickButton('가위')">가위</button>
      <button @click="onClickButton('보')">보</button>
    </div>
    <div>{{ result }}</div>
    <div>현재 {{ score }}</div>
    <lifecycle-example v-if="false" />
  </div>
</template>

<script>
const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284",
}; //background-position CSS

export default {
  name: "RockScissorsPaper",
  data() {
    return {
      // vue.js 는 항상 데이터를 생각해라
      imgeCoord: rspCoords.바위,
      result: "",
      score: 0,
    };
  },
  computed: {
    computedStyleObject() {
      return {
        background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imageCoord} 0`,
      }; //Caching
    },
  },
  methods: {
    onClickButton(choice) {},
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
    // 화면 보여지기는 하지만 만들어질때,
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
    // 화면 나타날때, 만들어졌을떄,
    interval = setInterval(() => {
      if (this.imgeCoord === rspCoords.바위) {
        this.imgeCoord = rspCoords.가위;
      } else if (this.imgeCoord === rspCoords.가위) {
        this.imgeCoord = rspCoords.보;
      } else if (this.imgeCoord === rspCoords.보) {
        this.imgeCoord = rspCoords.바위;
      }
    }, 100);
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
    // 데이터가 바뀌어서, 화면이 다시 만들어질때
  },
  beforeDestroy() {
    console.log("beforeDestroy");
    clearInterval(interval); //React에서는
  },
  destroyed() {
    console.log("destroyed");
    // 화면에 사라질때, 삭제될때 파괴되다.
    clearInterval(interval); //
  },
};
</script>

<style>
#computer {
  width: 142px;
  height: 200px;
  background-position: 0 0;
}
</style>
