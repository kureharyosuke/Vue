<template>
  <div>
    <h1>{{ result }}</h1>
    <form v-on:submit="onSubmitForm"></form>
    <input ref="answer" maxlength="4" v-model="value" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      result: "",
    };
  },
  methods: {
    onSubmitForm(e) {
      e.preventDefault(e);
    },
  },
};
</script>

<style lang="stylus"></style>
