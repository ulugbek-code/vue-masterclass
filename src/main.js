import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const app = createApp(App);
app.use(router);
app.use(store);

const requireComponent = require.context(
  "./components",
  true,
  /App[A-Z]\w+\.(vue|js)$/
);
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );
  app.component(componentName, componentConfig.default || componentConfig);
});
app.mount("#app");
