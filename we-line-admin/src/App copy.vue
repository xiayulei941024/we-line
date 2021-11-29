<template>
  <div>
    <el-container id="app" class="application-body">
      <!-- 菜单 -->
      <el-aside class="side-section" width="220px">
        <el-image
          class="site-logo"
          src="https://indusforce.com/public/source/imgs/logo2.svg"
          fit="contain"
        ></el-image>

        <el-menu class="menu-comp">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group title="123">
              <el-menu-item index="1-1">选项1</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container class="main-section">
        <!-- 头部 -->
        <el-header height="70px" class="page-header">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }"
              >首页</el-breadcrumb-item
            >
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="page-user-info">
            <span>你好啊,lisa</span>
            <el-dropdown>
              <span class="el-dropdown-link">
                <el-image src="@/assets/logo.png" class="user-face"></el-image>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item icon="el-icon-plus"
                    >黄金糕</el-dropdown-item
                  >
                  <el-dropdown-item icon="el-icon-circle-plus"
                    >狮子头</el-dropdown-item
                  >
                  <el-dropdown-item icon="el-icon-circle-plus-outline"
                    >螺蛳粉</el-dropdown-item
                  >
                  <el-dropdown-item icon="el-icon-check"
                    >双皮奶</el-dropdown-item
                  >
                  <el-dropdown-item icon="el-icon-circle-check"
                    >蚵仔煎</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-header>
        <!-- 主体 -->
        <el-main class="page-main-body">
          <router-view />
        </el-main>
        <!-- 底部 -->
        <el-footer height="60px" class="page-footer"> 分页 </el-footer>
      </el-container>
    </el-container>
  </div>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view /> -->
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted } from "vue";
import { ElMessage } from "element-plus";

export default defineComponent({
  setup() {
    const proxy = getCurrentInstance()?.proxy;
    onMounted(() => {
      console.log(123, proxy && proxy.$ls);
      ElMessage({
        type: "warning",
        message: "123"
      });
    });
  }
});
</script>

<style lang="scss" scoped>
#app {
  height: 100vh;
}
.application-body {
  .side-section {
    background-color: white;

    .site-logo {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
    }
    .menu-comp {
      border: none;
    }
  }
  .main-section {
    .page-header {
      background: #f0f0cc;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .page-user-info {
        font-size: 20px;
        font-weight: 100;
        padding-left: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .user-face {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-left: 20px;
        }
      }
    }
    .page-main-body {
      background: #f8f8f8;
    }
    .page-footer {
      background: #ccf0f0;
    }

    // .demonstration {
    //   display: block;
    //   color: #8492a6;
    //   font-size: 14px;
    //   margin-bottom: 20px;
    // }
  }
}
</style>
