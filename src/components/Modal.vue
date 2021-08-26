<template lang="">
  <ElDialog
    :title="title"
    v-model="dialogVisible"
    width="70%"
    :before-close="handleClose"
    :destroy-on-close="true"
  >
    <component
      :FormData="FormData"
      @close="handleClose"
      :is="AsyncComp"
    ></component>
    <!-- <span slot="footer" class="dialog-footer">
        <ElButton @click="handleClose">取 消</ElButton>
        <ElButton type="primary" @click="handleSubmit">确 定</ElButton>
      </span> -->
  </ElDialog>
</template>
<script lang="ts" setup>
import {
  reactive,
  ref,
  unref,
  defineAsyncComponent,
  getCurrentInstance,
} from "vue";

import { ElButton, ElMessage, ElDialog } from "element-plus";

const props = defineProps({
  visible: Boolean,
  title: String,
  comp: String,
  FormData: Object,
});
const dialogVisible = ref(props.visible);
//const title = ref(props.title);

//const AsyncComp = defineAsyncComponent(() => import("../views/page/demo1.vue"));
const AsyncComp = defineAsyncComponent(
  () => import(`../views/page/${props.comp}.vue`)
);

//console.log(props.ruleForm);
function handleSubmit() {
  ElMessage({
    message: "modal提交",
    type: "success",
  });

  dialogVisible.value = false;
  //(this as any).$message.success("this.$message")
  // .then(_ => {
  //   done();
  // })
  // .catch(_ => {});
}

function handleClose() {
  // ElMessage({
  //   message: "modal取消",
  //   type: "error",
  // });

  dialogVisible.value = false;
  //(this as any).$message.success("this.$message")
  // .then(_ => {
  //   done();
  // })
  // .catch(_ => {});
}

function open() {
  // ElMessage({
  //   message: "modal取消",
  //   type: "error",
  // });
  dialogVisible.value = true;
  //(this as any).$message.success("this.$message")
  // .then(_ => {
  //   done();
  // })
  // .catch(_ => {});
}
</script>
<style lang="scss"></style>
