<template>
  <div v-if="thread" class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <post-list :posts="threadPosts"></post-list>
    <post-editor :threadId="id" @save="addPost"></post-editor>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import PostEditor from "@/components/PostEditor.vue";
export default {
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  components: {
    PostList,
    PostEditor,
  },
  computed: {
    threads() {
      return this.$store.state.threads;
    },
    posts() {
      return this.$store.state.posts;
    },
    thread() {
      return this.threads.find((thread) => thread.id === this.id);
    },
    threadPosts() {
      return this.posts.filter((post) => post.threadId === this.id);
    },
  },
  methods: {
    addPost(eventData) {
      const post = {
        ...eventData,
        threadId: this.id,
      };
      this.posts.push(post);
      this.thread.posts.push(post.id);
    },
  },
};
</script>

<style scoped></style>
