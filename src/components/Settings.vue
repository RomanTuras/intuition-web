<template>
  <section>
    <nav-bar @onBack="onBack"  :title="$t('settingsTitle')" :is-home=false />
    <h1 class="mb-4">Settings page</h1>
    <button  @click="toggleTheme" aria-label="Toggle themes">
      <span v-if="this.theme === 'darkMode'">Light</span>
      <span v-else> Dark</span>
    </button>
    <div>
      <ul>
        <li v-for="locale in locales" :key="locale" @click="switchLocale(locale)">
          {{locale}}
        </li>
      </ul>
    </div>

    <div class="mt-4">
      Get current locale
      {{this.$i18n.locale}}
    </div>
  </section>
</template>

<script>
import NavBar from "./NavBar";
export default {
  name: "Settings",
  components: {
    NavBar
  },
  data: () => ({
    theme: '',
    locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
  }),
  methods: {
    onBack() {
      this.$router.back();
    },
    toggleTheme() {
      this.theme = this.theme === 'darkMode' ? '' : 'darkMode';
      document.documentElement.setAttribute('data-theme', this.theme);
      localStorage.setItem('theme', this.theme);
    },
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
      }
    }
  }
}
</script>

<style scoped>

</style>