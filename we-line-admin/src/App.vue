<template>
  <div style="background: #fff">
    <svg-icon name="404"></svg-icon>
    <svg-icon name="fan" className="icon-svg"></svg-icon>
  </div>
  <div>{{ state.a }}</div>
  <div>{{ state.b }}</div>
  <div @click="handleClick">+</div>
  <div class="abc">{{ data }}</div>
  <el-button type="primary">123</el-button>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view /> -->
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  reactive,
  computed
} from "vue";
import { ElMessage } from "element-plus";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const proxy = getCurrentInstance()?.proxy;
    onMounted(() => {
      console.log(proxy && proxy.$ls);
      ElMessage({
        type: "warning",
        message: "123"
      });
    });

    // let store =useStore();
    let state: any = reactive({
      a: 12,
      b: computed(() => state.a + 1)
    });
    const handleClick = (): void => {
      state.a++;
    };
    return {
      state,
      handleClick,
      data: useStore().state.user.token
    };
  }
});
</script>

<style lang="scss">
.abc {
  color: $main-color;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
