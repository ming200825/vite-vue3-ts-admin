import { createApp, h } from "vue";

export default function install(App) {
  let app = createApp({
    data() {
      return {
        isShow: false,
      };
    },
    render() {
      return h("div", {
        style: {
          display: this.isShow ? "flex" : "none",
        },
      });
    },
  });

  const vNodeDom = document.createElement("div");
  document.body.appendChild(vNodeDom);
  const vm = app.mount(vNodeDom);

  App.config.globalProperties.$show = function () {
    vm.isShow = true;
  };

  App.config.globalProperties.$hide = function () {
    vm.isShow = false;
  };
}
