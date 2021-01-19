<template>
  <div>
    <div>당첨 숫자</div>
    <div id="결과창">
      <lotto-ball
        v-for="ball in winBalls"
        :key="ball"
        v-bind:number="ball"
      ></lotto-ball>
    </div>
    <div>보너스</div>
    <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
    <button v-if="redo" @click="onClickRedo">한번더 !</button>
  </div>
</template>

<script>
import LottoBall from "./LottoBall";

function getWinNumbers() {
  // console.log("getWinNumbers");
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

const timeouts = [];
export default {
  components: {
    "lotto-ball": LottoBall, // LottoBall 단축
  },
  data() {
    return {
      winNumbers: getWinNumbers(),
      winBalls: [],
      bonus: null,
      redo: false,
    };
  },
  created: {},
  computed: {},
  methods: {
    onClickRedo() {
      this.winNumbers = getWinNumbers();
      this.winBalls = [];
      this.bonus = null;
      this.redo = false;
      this.showBalls();
      // for (let i = 0; i < this.winNumbers.length - 1; i++) {
      //   setTimeout(() => {
      //     this.winBalls.push(this.winNumbers[i]);
      //   }, (i + 1) * 1000);
      // }
      // setTimeout(() => {
      //   this.bonus = this.winNumbers[6];
      //   this.redo = true;
      // }, 7000);
    },
    showBalls() {
      for (let i = 0; i < this.winNumbers.length - 1; i++) {
        timeouts[i] = setTimeout(() => {
          this.winBalls.push(this.winNumbers[i]);
        }, (i + 1) * 1000);
      }
      timeouts[6] = setTimeout(() => {
        this.bonus = this.winNumbers[6];
        this.redo = true;
      }, 7000);
    },
  },
  mounted() {
    // created화면이 만들어지고, 나서 로또번호가 하나하나 만들어질떄 마운티드
    // let을 쓰면 문제가 안생기지만, var를 클로저 문제가 생긴다.
    // for (let i = 0; i < this.winNumbers.length - 1; i++) {
    //   setTimeout(() => {
    //     this.winBalls.push(this.winNumbers[i]);
    //   }, (i + 1) * 1000);
    // }
    // setTimeout(() => {
    //   this.bonus = this.winNumbers[6];
    //   this.redo = true;
    // }, 7000);
    this.showBalls();
  },
  beforeDestroy() {
    timeouts.forEach((t) => {
      clearTimeout(t);
    });
  },
  // watch: { watch는 쓰지말자.
  //   // 값이 바뀌었는지 안바뀌었는지 감시하는 기능 : watch
  //   // winBalls(value, oldValue) {
  //   //   if (value.length === 0) {
  //   //     console.log(value, oldValue);

  //   //     // winBalls가 빈배열이 될때 실행
  //   //     this.showBalls();
  //   //   }
  //   // },
  //   bonus(value, oldValue) {
  //     console.log(value, oldValue);
  //     // if (value === null) {
  //     //   this.showBalls();
  //     // }
  //     if (bonus === null) {
  //       this.showBalls();
  //     }
  //   },
  // },
};
</script>

<style scoped></style>
