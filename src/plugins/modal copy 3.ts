import { render, h } from "vue";
import myCom from "./myCom.vue";
export default function install(App: any) {
  let vNode = h({
    data() {
      return {
        isShow: false,
      };
    },
    render() {
      return h(myCom);
    },
  });

  const vNodeDom = document.createElement("div");
  document.body.appendChild(vNodeDom);
  vNode.appContext = App._context;
  render(vNode, vNodeDom);

  App.config.globalProperties.$show = function () {
    vNode.component.proxy.isShow = true;
  };

  App.config.globalProperties.$hide = function () {
    vNode.component.proxy.isShow = false;
  };
}
