<template>
  <div>
    <table>
      <tr>
        <td>번호</td>
        <td>글쓴이</td>
        <td>제목</td>
        <td>내용</td>
      </tr>
      <tr :key="index" v-for="(value, index) in data" @click="detail(index)">
        <td>{{ value.number }}</td>
        <td>{{ value.writer }}</td>
        <!-- write 아니고 writer  이 에러로 메인도 이동안됨.-->
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
    },
    detail(index) {
      this.$router.push({
        name: "Detail",
        params: {
          contentId: index
        }
      });
    } // 라우터를 통하여, 디테일페이지로 이동
  }
};
</script>

<style></style>
