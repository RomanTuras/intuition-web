<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
@import "src/assets/scss/app";
</style>