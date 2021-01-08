<template>
  <div>
    <div>{{ data.number }}</div>
    <div>{{ data.writer }}</div>
    <div>{{ data.title }}</div>
    <div>{{ data.content }}</div>
  </div>
</template>

<script>
import data from "@/data";

export default {
  name: "Detail",
  data() {
    const index = this.$route.params.contentId;
    return {
      data: data[index]
    };
  }
};
</script>

<style></style>
