<template>
  <div>
    <el-row>这里是主页</el-row>
    <el-button type="primary" @click="add()">新增</el-button>
  </div>
</template>

<script lang="ts" setup>
import {
  inject,
  reactive,
  ref,
  unref,
  defineAsyncComponent,
  getCurrentInstance,
} from "vue";
import Modal from "@/components/Modal.vue";
const { proxy } = getCurrentInstance() as any;
function add() {
  // (inject("$message") as any).success("inject");
  //proxy.$message.success("this is message");
  proxy.$modal("form2", "添加用户", { name: "aaa" });
  //proxy.$modal.handleClose("this is message");
}
</script>
