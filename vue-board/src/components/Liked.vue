<template>
  <div>
    <div v-if="liked">Liked</div>
    <button v-else @click="onClickButton">Like</button>
  </div>
</template>

<script>
export default {
  name: "Liked",
  data() {
    return {
      liked: false
    };
  },
  methods: {
    onClickButton() {
      this.liked = true;
    }
  }
};
</script>

<style></style>
