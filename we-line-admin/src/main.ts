import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

// 引入样式
import "normalize.css";
import "@/styles/base.scss";
import "@/styles/reset-element.scss";

// element-plus
import UseElement from "@/plugins/element-plus";
app.use(UseElement);

// 
import "@/icons/index";
import SvgIcon from "./icons/SvgIcon.vue";
app.component("svg-icon", SvgIcon);

import Ls from "./utils/ls";
const ls = new Ls();
app.config.globalProperties.$ls = ls;

app.use(store).use(router).mount("#app");
