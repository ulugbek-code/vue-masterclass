import { createRouter, createWebHistory } from "vue-router";
import sourceData from "@/data.json";

import PageHome from "@/pages/PageHome.vue";
import CategoryShow from "@/pages/CategoryShow.vue";
import Forum from "@/pages/ForumShow.vue";
import PageThreadShow from "@/pages/ThreadShow.vue";
import PageNotFound from "@/pages/NotFound.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: PageHome },
    {
      path: "/category/:id",
      name: "Category",
      component: CategoryShow,
      props: true,
    },
    { path: "/forum/:id", name: "Forum", component: Forum, props: true },
    {
      path: "/thread/:id",
      component: PageThreadShow,
      name: "ThreadShow",
      props: true,
      beforeEnter(to, from, next) {
        const threadExists = sourceData.threads.find(
          (t) => t.id === to.params.id
        );
        if (threadExists) {
          return next();
        } else {
          next({
            name: "NotFound",
            params: {
              pathMatch: to.path.substring(1).split("/"),
              query: to.query,
              hash: to.hash,
            },
          });
        }
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: PageNotFound,
    },
  ],
});
