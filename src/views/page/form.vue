<template>
  <div class="box">
    <el-form :model="ruleForm" :rules="rules" ref="ruleFormRef" label-width="100px">
      <el-form-item label="用户" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium" @click="submitForm">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
   
<script lang='ts' setup>
import {
  reactive,
  ref,
  unref,
  VueElement
} from 'vue'
import { ElMessage } from 'element-plus'

const ruleFormRef = ref(null);
// 定义变量
const ruleForm = reactive({
  username: '',
  password: '',
  region: ''
})

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
  region: [
    { required: true, message: '请选择活动区域', trigger: 'change' }
  ]
}

const submitForm = async () => {
  const form: any = unref(ruleFormRef.value);
  if (!form) return
  try {
    await form.validate(
      async (valid: boolean) => {
        if (valid) { ElMessage('只是一条消息提示') } else { ElMessage('只是一条消息提示2222') }


      }
    )
    const { username, password, region } = ruleForm


    console.log(username, password, region)
  } catch (error) {
  }
}



</script>
   
  <style lang="less">
</style>