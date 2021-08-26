<template>
  <el-form ref="ruleFormRef" :model="form" label-width="80px">
    <el-form-item label="活动名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动时间">
      <el-col :span="11">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="form.date1"
          style="width: 100%"
        ></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker
          placeholder="选择时间"
          v-model="form.date2"
          style="width: 100%"
        ></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="即时配送">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="活动性质">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="特殊资源">
      <el-radio-group v-model="form.resource">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button @click="onClose">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref, unref, VueElement, PropType, defineEmits } from "vue";

import {
  ElButton,
  ElMessage,
  ElDialog,
  ElInput,
  ElFormItem,
  ElRadio,
  ElOption,
  ElRadioGroup,
  ElDatePicker,
  ElSelect,
  ElForm,
  ElCheckboxGroup,
  ElCheckbox,
  ElSwitch,
  ElTimePicker,
  ElCol,
} from "element-plus";
export interface FormDataType {
  name: string;
  desc: string;
  type: Array<any>;
  region: string;
  date1: string;
  date2: string;
  delivery: Boolean;
  resource: string;
}
let emit = defineEmits(["close"]);
const props = defineProps({
  FormData: {
    type: Object as PropType<Partial<FormDataType>>,
    required: true,
  },
});
const ruleFormRef = ref(null);
// 定义变量

//console.log(props.FormData.name);
const form = reactive<FormDataType>({
  name: props.FormData.name || "",
  region: props.FormData.region || "",
  date1: props.FormData.date1 || "",
  date2: props.FormData.date2 || "",
  delivery: props.FormData.delivery || false,
  type: props.FormData.type || [0, 2],
  resource: props.FormData.resource || "",
  desc: props.FormData.desc || "",
});

const rules = {
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  region: [{ required: true, message: "请选择活动区域", trigger: "change" }],
};

const onSubmit = async () => {
  const ruleFormRef2: any = unref(ruleFormRef.value);
  if (!ruleFormRef2) return;
  try {
    await ruleFormRef2.validate(async (valid: boolean) => {
      if (valid) {
        ElMessage.success("form提交");
      } else {
        ElMessage("form提交失败");
      }
    });
    const { name } = form;

    console.log(name + "8888");
    emit("close");
  } catch (error) {}
};

const onClose = async () => {
  emit("close");

  ElMessage("form取消");
};
</script>

<style lang="less"></style>
