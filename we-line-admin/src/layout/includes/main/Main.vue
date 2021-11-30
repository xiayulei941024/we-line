<template>
  <el-main>
    <main-container/>
    <main-pagination />
  </el-main>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: "Main",
  components: {
    MainContainer: defineAsyncComponent(() => import("./includes/MainContainer.vue")),
    MainPagination: defineAsyncComponent(() => import("./includes/MainPagination.vue"))
  }
});
</script>

<style lang="scss" scoped>
.el-main {
  display: flex;
  flex-direction: column;
}
</style>