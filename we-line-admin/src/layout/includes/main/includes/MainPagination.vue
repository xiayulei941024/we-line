<template>
  <div class="main-pagination">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      v-model:current-page="current"
      :page-size="size"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { useStore, Store } from "vuex";
import { State } from "@/store/interface/pagination";

export default defineComponent({
  name: "MainPagination",
  setup() {
    // 获取state
    const { state, commit }: Store<any> = useStore();
    // 获取分页信息
    let pageState: State["page"] = state.pagination.page;
    // current事件
    const handleCurrentChange = (current: number) => {
      commit("pagination/CHANGE_CURRENT", current);
    };
    return {
      ...toRefs(pageState),
      handleCurrentChange
    };
  }
});
</script>

<style lang="scss" scoped>
.main-pagination {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  flex: 0 0 auto;
}
</style>
