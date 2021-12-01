<template>
  <div class="header-info">
    <p class="user">你好, lisa</p>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-image src="@/assets/logo.png" class="user-face"></el-image>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderInfo"
});
</script>

<style lang="scss" scoped>
.header-info {
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 20px;
  flex: 0 0 auto;
  .user {
    margin-right: 20px;
  }
}
</style>
