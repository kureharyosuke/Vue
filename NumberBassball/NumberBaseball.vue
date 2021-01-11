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
export default {
  data() {
    return {
      tries: [],
      value: "",
      result: "",
    };
  },
  methods: {
    onSubmitForm(e) {
      e.preventDefault();
      this.tries.push({
        try: this.value,
        result: "홈런",
      });
      this.value = "";
      this.$refs.answer.focus();
    },
  },
};
</script>

<style></style>
