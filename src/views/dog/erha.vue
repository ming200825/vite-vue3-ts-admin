<template>
    <div>
      <el-col>信息： {{ erha.name }}</el-col>
      <el-col>年龄：{{ erha.age }} </el-col>
      <el-col><el-button type="primary" @click="erha.age++">年龄增加</el-button></el-col>
    </div>
  </template>
 

  <script lang="ts" setup>
  const erha={
          name: '二哈',
          age: 10
        }
</script>

