import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { useProjectStore } from "@/stores/project";

const app = createApp(App);
app.use(createPinia());
app.use(router);
const projectStore = useProjectStore();
projectStore.getProjectList(0, 6);
projectStore.getListCount();
app.mount("#app");
