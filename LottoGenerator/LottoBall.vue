<template>
  <div class="ball " :style="{ background }">{{ number }}</div>
</template>

<script>
export default {
  name: "LottoBall",
  props: {
    number: Number,
  },
  data() {
    let background;
    return {
      background,
    };
  },
};
</script>

<style></style>
