<template>
  <div class="main-container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainContainer"
});
</script>

<style lang="scss" scoped>
.main-container {
  flex: 1;
}
</style>