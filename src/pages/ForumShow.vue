<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum?.name }}</h1>
        <p class="text-lead">{{ forum?.description }}</p>
      </div>
      <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
    </div>
  </div>

  <thread-list :threads="threads"></thread-list>
</template>

<script>
import ThreadList from "@/components/ThreadList.vue";
export default {
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  components: {
    ThreadList,
  },
  computed: {
    forum() {
      return this.$store.state.forums.find((forum) => forum.id === this.id);
    },
    threads() {
      return this.$store.state.threads.filter(
        (thread) => thread.forumId === this.id
      );
    },
  },
};
</script>

<style scoped></style>
