<template>
  <div>
    <input v-model="number" placeholder="번호" />
    <input v-model="writer" placeholder="글쓴이" />
    <input v-model="title" placeholder="제목" />
    <textarea v-model="content" placeholder="내용" />
    <button @click="index !== undefined ? update() : write()">
      <!-- // updata no... update() -->
      {{ index !== undefined ? "수정" : "작성" }}
    </button>
  </div>
</template>

<script>
import data from "@/data";
export default {
  name: "Create",
  data() {
    const index = this.$route.params.contentId;
    // console.log(this.index);
    // console.log($route);
    return {
      data: data,
      index: index,
      // 여기 빠져있었음 그래서 에러 그리고 서버재가동해야함...
      number: index !== undefined ? data[index].number : "",
      writer: index !== undefined ? data[index].writer : "",
      title: index !== undefined ? data[index].title : "",
      content: index !== undefined ? data[index].content : ""
    };
  },
  methods: {
    write() {
      this.data.push({
        number: this.number,
        writer: this.writer,
        title: this.title,
        content: this.content
      }),
        this.$router.push({
          path: "/"
        });
    },
    update() {
      data[this.index].number = this.number;
      data[this.index].writer = this.writer;
      data[this.index].title = this.title;
      data[this.index].content = this.content;
      this.$router.push({
        path: "/"
      });
      // 페이지 이동 빠짐... 에러 그리고 route 아니고 router
    }
  }
};
</script>

<style></style>
