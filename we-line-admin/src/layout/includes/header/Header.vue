<template>
  <el-header>
    <header-breadcrumb />
    <header-info />
  </el-header>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: "Header",
  components: {
    HeaderBreadcrumb: defineAsyncComponent(
      () => import("./includes/HeaderBreadcrumb.vue")
    ),
    HeaderInfo: defineAsyncComponent(() => import("./includes/HeaderInfo.vue"))
  }
});
</script>

<style lang="scss" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  box-shadow: $main-shadow;
}
</style>
