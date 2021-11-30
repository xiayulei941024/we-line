<template>
  <el-main>
    <main-container />
    <main-pagination v-show="showStatus" />
  </el-main>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, computed } from "vue";
import { useStore, Store } from "vuex";

export default defineComponent({
  name: "Main",
  components: {
    MainContainer: defineAsyncComponent(
      () => import("./includes/MainContainer.vue")
    ),
    MainPagination: defineAsyncComponent(
      () => import("./includes/MainPagination.vue")
    )
  },
  setup() {
    // 获取state
    const { state }: Store<any> = useStore();
    // 展示状态
    const showStatus = computed(() => state.pagination.showStatus);

    return {
      showStatus
    };
  }
});
</script>

<style lang="scss" scoped>
.el-main {
  display: flex;
  flex-direction: column;
}
</style>
