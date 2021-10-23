<template>
  <div>
    <h1>Home component</h1>
    <router-link :to="{
      name: 'about'
    }">
      <h3>About</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "home"
}
</script>

<style scoped>

</style>