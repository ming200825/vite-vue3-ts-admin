<template>
    <div>
      <el-col>信息： {{ taidi.name }}</el-col>
      <el-col>年龄：{{ taidi.age }} </el-col>
      <el-col><el-button type="primary" @click="taidi.age++">年龄增加</el-button></el-col>
    </div>
  </template>
  <script lang='ts' setup>

      const   taidi= {
          name: '泰迪',
          age: 10
        }
      
 
  </script>