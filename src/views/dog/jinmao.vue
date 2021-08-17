<template>
    <div>
      <el-col>信息： {{ jinmao.name }}</el-col>
      <el-col>年龄：{{ jinmao.age }} </el-col>
      <el-col><el-button type="primary" @click="jinmao.age++">年龄增加</el-button></el-col>
    </div>
  </template>
   <script lang='ts' setup>
  
  const   jinmao= {
          name: '金毛',
          age: 10
        }
   
  </script>