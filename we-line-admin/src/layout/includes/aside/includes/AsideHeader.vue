<template>
  <div class="aside-header">
    <el-image
      class="pic"
      src="https://indusforce.com/public/source/imgs/logo2.svg"
      fit="contain"
    ></el-image>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AsideHeader"
});
</script>

<style lang="scss" scoped>
.aside-header {
  flex: 0 0 auto;
  display: flex;
  height: 70px;
  .pic {
    max-width: 80%;
    max-height: 70px;
    margin: auto;
  }
}
</style>
