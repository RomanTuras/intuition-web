<template>
  <div>
    <button  @click="toggleTheme" aria-label="Toggle themes">
      <span v-if="this.theme === 'darkMode'">Light</span>
      <span v-else> Dark</span>
    </button>
    <h1 class="text-center">Home component</h1>
    <router-link :to="{
      name: 'about'
    }">
      <h3>About</h3>
    </router-link>

  </div>
</template>

<script>
export default {
  name: "home",
  data: () => ({
    theme: ''
  }),
  mounted() {
    let localTheme = localStorage.getItem('theme'); //gets stored theme value if any
    document.documentElement.setAttribute('data-theme', localTheme); // updates the data-theme attribute
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'darkMode' ? '' : 'darkMode';
      document.documentElement.setAttribute('data-theme', this.theme);
      localStorage.setItem('theme', this.theme);
    }
  }
}
</script>

<style lang="scss">
</style>