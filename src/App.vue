<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>

<script>

import Home from "./components/Home";
export default {
  name: 'App',
  comments: {
    Home
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/app";
</style>