<template>
  <div>
    <div
      id="computer"
      v-bind:style="{
        backgroundImage: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) {imageCoord} 0`,
      }"
    ></div>
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
  </div>
</template>

<script>
const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284",
}; //background-position CSS

export default {
  data() {
    return {
      // vue.js 는 항상 데이터를 생각해라
      imgeCoord: rspCoords.바위,
      result: "",
      score: 0,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style>
#computer {
  width: 142px;
  height: 200px;
  background-position: 0 0;
}
</style>
