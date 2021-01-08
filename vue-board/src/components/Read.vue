<template>
  <div>
    <table>
      <tr>
        <td>번호</td>
        <td>글쓴이</td>
        <td>제목</td>
        <td>내용</td>
      </tr>
      <tr :key="index" v-for="(value, index) in data">
        <td>{{ value.number }}</td>
        <td>{{ value.writer }}</td>
        <td>{{ value.title }}</td>
        <td>{{ value.content }}</td>
      </tr>
    </table>

    <button @click="write">글쓰기</button>
  </div>
</template>

<script>
import data from "@/data";

export default {
  name: "Read",
  data() {
    return {
      data: data
    };
  },
  methods: {
    write() {
      this.$router.push({
        path: "create"
      });
    }
  }
};
</script>

<style></style>
