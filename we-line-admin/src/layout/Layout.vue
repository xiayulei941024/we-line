<template>
  <el-container class="layout">
    <!-- 侧边栏 -->
    <Aside class="layout-aside"/>
    <div class="layout-main">
      <Header />
      <Main />
    </div>
  </el-container>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: "Layout",
  components: {
    Aside: defineAsyncComponent(() => import("./includes/aside/Aside.vue")),
    Header: defineAsyncComponent(() => import("./includes/header/Header.vue")),
    Main: defineAsyncComponent(() => import("./includes/main/Main.vue"))
  }
});
</script>

<style lang="scss" scoped>
.layout {
  .layout-aside {
    flex: 0 0 auto;
  }
  .layout-main {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
}
</style>