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
  </div>
</template>

<script>
const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
}; //background-position CSS

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function(v) {
    return v[1] === imgCoord;
  })[0];
};

let interval = null;

export default {
  name: "RockScissorsPaper",
  data() {
    return {
      // vue.js 는 항상 데이터를 생각해라
      imgCoord: rspCoords.바위,
      result: "",
      score: 0,
    };
  },
  computed: {
    computedStyleObject() {
      return {
        background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`,
      }; //Caching
    },
  },
  methods: {
    changeHand() {
      interval = setInterval(() => {
        if (this.imgCoord === rspCoords.바위) {
          this.imgCoord = rspCoords.가위;
        } else if (this.imgCoord === rspCoords.가위) {
          this.imgCoord = rspCoords.보;
        } else if (this.imgCoord === rspCoords.보) {
          this.imgCoord = rspCoords.바위;
        }
      }, 100);
    },
    onClickButton(choice) {
      clearInterval(interval);
      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(this.imgCoord)];
      const diff = myScore - cpuScore;
      if (diff === 0) {
        this.result = "비겼습니다.";
      } else if ([-1, 2].includes(diff)) {
        this.result = "이겼습니다.";
        this.score += 1;
      } else {
        this.result = "졌습니다.";
        this.score -= 1;
      }
      setTimeout(() => {
        this.changeHand();
      }, 1000);
    },
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
    this.changeHand();
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
    // clearInterval(interval); // vue에서는 둘중하나
  },
};
</script>

<style scoped>
#computer {
  width: 142px;
  height: 200px;
  background-position: 0 0;
}
</style>
