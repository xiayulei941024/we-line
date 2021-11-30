<template>
  <el-aside class="aside">
    <div class="logo">
      <el-image
        class="pic"
        src="https://indusforce.com/public/source/imgs/logo2.svg"
        fit="contain"
      ></el-image>
    </div>

    <el-menu class="">
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="123">
          <el-menu-item index="1-1">选项1</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Aside"
});
</script>

<style lang="scss" scoped>
.aside {
  width: 220px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: $main-shadow;
  .logo {
    flex: 0 0 auto;
    display: flex;
    height: 70px;
    .pic {
      max-width: 80%;
      max-height: 70px;
      margin: auto;
    }
  }
  .el-menu {
    border: 0;
    flex: 1;
  }
}
</style>
