<template>
  <h1>{{ category.name }}</h1>
  <forum-list
    :title="category.name"
    :forums="getForumsByCategory(category)"
    :category-id="category.id"
  ></forum-list>
</template>

<script>
import ForumList from "@/components/ForumList.vue";
export default {
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  components: {
    ForumList,
  },
  computed: {
    category() {
      return this.$store.state.categories.find(
        (category) => category.id === this.id
      );
    },
  },
  methods: {
    getForumsByCategory(category) {
      return this.$store.state.forums.filter(
        (forum) => forum.categoryId === category.id
      );
    },
  },
};
</script>

<style scoped></style>
