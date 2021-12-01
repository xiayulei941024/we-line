<template>
  <div class="header-info">
    <el-dropdown>
      <div class="user">
        <p>你好, lisa</p>
        <el-icon>
          <arrow-down></arrow-down>
        </el-icon>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
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
    display: flex;
    align-items: center;
    cursor: pointer;
    p {
      margin-right: 8px;
    }
  }
}
</style>
