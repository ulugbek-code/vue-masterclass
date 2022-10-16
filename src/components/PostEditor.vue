<template>
  <div class="col-full push-top">
    <form @submit.prevent="save">
      <div class="form-group">
        <label for="thread_title">Title:</label>
        <input type="text" id="thread_title" class="form-input" name="title" />
      </div>

      <div class="form-group">
        <label for="thread_content">Content:</label>
        <textarea
          v-model="text"
          id="thread_content"
          class="form-input"
          name="content"
          rows="8"
          cols="140"
        ></textarea>
      </div>

      <div class="btn-group">
        <button class="btn btn-ghost">Cancel</button>
        <button class="btn btn-blue" type="submit" name="Publish">
          Publish
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["save"],
  data() {
    return {
      text: "",
    };
  },
  methods: {
    save() {
      const postId = "qqqq" + Math.random();
      const post = {
        id: postId,
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        userId: "L664y3qZSubDbT1R6npC0EEybJ73",
      };
      this.$emit("save", post);

      this.text = "";
    },
  },
};
</script>

<style scoped></style>
