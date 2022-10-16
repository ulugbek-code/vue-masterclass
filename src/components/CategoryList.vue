<template>
  <forum-list
    v-for="category in categories"
    :key="category.id"
    :forums="getForumsByCategory(category)"
    :title="category.name"
    :category-id="category.id"
  ></forum-list>
</template>

<script>
import ForumList from "@/components/ForumList.vue";
export default {
  props: {
    categories: {
      required: true,
      type: Array,
    },
  },
  components: {
    ForumList,
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
