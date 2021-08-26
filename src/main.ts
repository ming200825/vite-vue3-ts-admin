import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import locale from "element-plus/lib/locale/lang/zh-cn";
import ElementPlus, { ElMessage } from "element-plus";
import store from "./store";
import "element-plus/lib/theme-chalk/index.css";
import "@/assets/css/index.scss";

import Modal from "@/plugins/Modal";

//import './index.css'
const app = createApp(App);
//app.provide("$message", ElMessage);
app.config.globalProperties.$modal = Modal;
app.config.globalProperties.$message = ElMessage;

app
  .use(ElementPlus, { size: "small", locale })
  .use(store)
  .use(router)
  .use(Modal)
  .mount("#app");
