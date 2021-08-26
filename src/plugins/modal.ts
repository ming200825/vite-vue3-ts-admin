import { createVNode, render } from "vue";
import type { App } from "vue";
//import MessageConstructor from "./index.vue";

import ModalConstructor from "@/components/Modal.vue";
const body = document.body;
const Modal: any = function (comp: string, title: string, FormData: Object) {
  const modelDom = body.querySelector(".container_modal");
  if (modelDom) {
    body.removeChild(modelDom);
  }
  let options = { visible: true, title, comp, FormData };

  //console.log(options.ruleForm);

  const container = document.createElement("div");
  container.className = `container_modal`;
  //创建虚拟节点
  const vm = createVNode(ModalConstructor, options);
  //渲染虚拟节点
  render(vm, container);
  document.body.appendChild(container);
};
export default {
  //组件祖册
  install(app: App): void {
    app.config.globalProperties.$modal = Modal;
  },
};
