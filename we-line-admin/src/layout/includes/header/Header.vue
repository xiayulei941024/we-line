<template>
  <el-header height="70px" class="header">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="page-user-info">
      <span>你好啊,lisa</span>
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-image src="@/assets/logo.png" class="user-face"></el-image>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus"
              >狮子头</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-plus-outline"
              >螺蛳粉</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check"
              >蚵仔煎</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header"
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  box-shadow: $main-shadow;
}
</style>
