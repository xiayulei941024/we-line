<template>
  <el-breadcrumb separator="/">
    <transition-group name="breadcrumb">
      <template v-for="(route, i) in crumbList">
        <el-breadcrumb-item
          v-if="route.name != 'home'"
          :key="route.name"
          :to="{ name: route.name }"
          :class="{
            'is-last-link': i == crumbList.length - 1
          }"
        >
          <span>{{ route.meta.name }}</span>
        </el-breadcrumb-item>
      </template>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts">
import { useStore } from "@/store/index";
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "HeaderBreadcrumb",
  setup() {
    // 获取state
    const { state } = useStore();
    // 获取面包屑
    const crumbList = computed(() => state.user.crumbList);

    return {
      crumbList
    };
  }
});
</script>

<style lang="scss" scoped>
.opacity-enter,
.opacity-leave-active {
  opacity: 0;
}

.opacity-enter-active,
.opacity-leave-active {
  transition: all 3s;
}

// .opacity-leave-active {
//   position: absolute;
// }

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all .6s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
