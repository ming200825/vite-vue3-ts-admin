<template>
  <!-- 整体页面布局 -->
  <el-row class="app-wrapper">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="220px">
        <sidebar />
      </el-aside>
      <el-container>
        <!-- 顶部 -->
        <el-header>header</el-header>
        <!-- 主页面 -->
        <el-main>
          <app-main />

          <el-button type="primary">更新</el-button>
        </el-main>
      </el-container>
    </el-container>
  </el-row>
</template>
  
<script lang="ts" setup>
import Sidebar from '@/layout/components/Sidebar.vue'
</script>
<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: calc(100vh - 60px);
}
</style>