<template>
  <div>
    <table>
      <tr>
        <td>번호</td>
        <td>제목</td>
        <td>내용</td>
      </tr>
      <tr :key="index" v-for="(value, index) in data">
        <td>{{ value.number }}</td>
        <td>{{ value.title }}</td>
        <td>{{ value.content }}</td>
      </tr>
    </table>
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
  }
};
</script>

<style></style>
