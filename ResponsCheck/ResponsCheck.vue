<template>
  <div>
    <div id="screen">{{ message }}</div>
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

<style></style>
