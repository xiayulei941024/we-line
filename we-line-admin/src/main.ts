import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
app.use(ElementPlus);

// import "./svg/index";
// import SvgIcon from "./svg/SvgIcon.vue";
// app.component("svg-icon", SvgIcon);

import Ls from "./utils/ls";
const ls = new Ls();
app.config.globalProperties.$ls = ls;

app.use(store).use(router).mount("#app");
