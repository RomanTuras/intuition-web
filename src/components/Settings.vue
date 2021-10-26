<template>
  <section>
    <nav-bar @onBack="onBack"  :title="$t('settingsTitle')" :is-home=false />
    <h1>Settings page</h1>
  </section>
</template>

<script>
import NavBar from "./NavBar";
export default {
  name: "Settings",
  components: {
    NavBar
  },
  methods: {
    onBack() {
      this.$router.back();
    }
  }
}
</script>

<style scoped>

</style>