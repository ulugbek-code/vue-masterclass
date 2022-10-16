<template>
  <div class="col-full push-top">
    <div v-if="threads" class="thread-list">
      <h2 class="list-title">Threads</h2>

      <div v-for="thread in threads" :key="thread.id" class="thread">
        <div>
          <p>
            <router-link
              :to="{ name: 'ThreadShow', params: { id: thread.id } }"
              >{{ thread.title }}</router-link
            >
          </p>
          <p class="text-faded text-xsmall">
            By <a href="profile.html">{{ userById(thread.userId).name }}</a
            >, <app-date :timestamp="thread.publishedAt"></app-date>.
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">{{ thread.posts.length }} reply</p>

          <img
            class="avatar-medium"
            :src="userById(thread.userId).avatar"
            alt=""
          />

          <div>
            <p class="text-xsmall">
              <a href="profile.html">{{ userById(thread.userId).name }}</a>
            </p>
            <p class="text-xsmall text-faded">
              <app-date :timestamp="thread.publishedAt"></app-date>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    threads: {
      required: true,
      type: Array,
    },
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    postById(postId) {
      return this.posts.find((post) => post.id === postId);
    },
    userById(userId) {
      return this.users.find((user) => user.id === userId);
    },
  },
};
</script>

<style></style>
