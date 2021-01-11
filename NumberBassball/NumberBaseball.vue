<template>
  <div>
    <h1>{{ result }}</h1>
    <form v-on:submit="onSubmitForm">
      <input ref="answer" maxlength="4" v-model="value" />
      <button type="submit">Button</button>
    </form>
    <div>Try:{{ tries.length }}</div>
    <ul>
      <li v-for="t in tries">
        <div>
          {{ t.try }}
        </div>
        <div>
          {{ t.result }}
        </div>
      </li>
      <!-- t : try -->
    </ul>
  </div>
</template>

<script>
const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const number = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(number);
  }
  return array;
  console.log(number);
};

export default {
  data() {
    return {
      answer: getNumbers(), // this.answer.join('') ex) [3,4,1,5]
      tries: [],
      value: "",
      result: "",
    };
  },
  methods: {
    onSubmitForm(e) {
      e.preventDefault();
      console.log(this.answer.join(""));
      if (this.value === this.answer.join("")) {
        // 정답맞으면
        this.tries.push({
          //object
          try: this.value,
          result: "홈런",
        });
        this.result = "홈런";
        this.value = "";
        this.tries = [];
        this.$refs.answer.focus();
        alert("New Game Start!");
      } else {
        // 틀리면
        if (this.tries.length >= 9) {
          // 10번째 시도
          this.result = `10번 넘게 틀려서 실패! 답은 ${this.answer.join(
            ","
          )} 였습니다.`;
          alert("New Game Start!");
          (this.value = ""), (this.answer = getNumbers());
          (this.tries = []), this.$refs.answer.focus();
        }
        let strike = 0;
        let ball = 0;
        const answerArray = this.value.split("").map((v) => parseInt(v));
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === this.answer[i]) {
            // 숫자 자릿수 모두 정답
            strike++;
          } else if (this.answer.includes(answerArray[i])) {
            ball++;
          }
        }
        this.tries.push({
          try: this.value,
          result: `${strike} Strike, ${ball} Ball. `,
        });
      }
    },
  },
};
</script>

<style></style>
