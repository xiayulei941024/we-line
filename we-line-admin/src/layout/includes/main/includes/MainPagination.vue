<template>
  <div class="main-pagination">
    <el-pagination background layout="prev, pager, next" :total="1000" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainPagination"
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
