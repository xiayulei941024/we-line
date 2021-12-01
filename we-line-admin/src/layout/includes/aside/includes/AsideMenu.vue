<template>
  <template v-for="item in menuList">
    <template v-if="item.children && item.children.length > 0">
      <!-- 外层 -->
      <el-sub-menu :index="item.name" :key="item.name" v-if="!item.meta.hide">
        <template v-slot:title>
          <el-icon>
            <component :is="item.meta.icon" />
          </el-icon>
          <span>{{ item.meta.name }}</span>
        </template>
        <el-menu-item-group>
          <aside-menu :menuList="item.children"></aside-menu>
        </el-menu-item-group>
      </el-sub-menu>
    </template>
    <template v-else>
      <!-- 内层 -->
      <el-menu-item
        v-if="!item.meta.hide"
        :key="item.name"
        :index="item.name"
        @click="goPage(item.name)"
      >
        <el-icon>
          <component :is="item.meta.icon" />
        </el-icon>
        <span>{{ item.meta.name }}</span>
      </el-menu-item>
    </template>
  </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "AsideMenu",
  props: {
    menuList: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    // 获取router
    const router = useRouter();
    // 路由跳转事件
    const goPage = (name: string): void => {
      router.push({ name });
    };

    return {
      goPage
    };
  }
});
</script>
