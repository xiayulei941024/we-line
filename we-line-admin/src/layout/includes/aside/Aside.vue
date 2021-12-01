<template>
  <el-aside class="aside">
    <!-- 顶部 -->
    <aside-header></aside-header>
    <!-- 菜单 -->
    <el-menu :default-active="currentMenu" :unique-opened="true">
      <aside-menu :menu-list="menuList"></aside-menu>
    </el-menu>
  </el-aside>
</template>

<script lang="ts">
import { defineComponent, computed, defineAsyncComponent } from "vue";
import { useStore, Store } from "vuex";
import AsideMenu from "./includes/AsideMenu.vue";

export default defineComponent({
  name: "Aside",
  components: {
    AsideMenu,
    AsideHeader: defineAsyncComponent(
      () => import("./includes/AsideHeader.vue")
    )
  },
  setup() {
    // 获取state
    const { state }: Store<any> = useStore();
    // 展示状态
    const currentMenu = computed(() => state.user.currentMenu);
    const menuList = computed(() => state.user.asideMenu);

    return {
      currentMenu,
      menuList
    };
  }
});
</script>

<style lang="scss" scoped>
.aside {
  width: 220px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: $main-shadow;
  .el-menu {
    border: 0;
    flex: 1;
  }
}
</style>
