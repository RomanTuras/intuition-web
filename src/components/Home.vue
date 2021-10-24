<template>
  <div>
    <button  @click="toggleTheme" aria-label="Toggle themes">
      <span v-if="this.theme === 'darkMode'">Light</span>
      <span v-else> Dark</span>
    </button>
    <h1 class="text-center">{{ $t('appTitle')}}</h1>
    <router-link :to="{
      name: 'about'
    }">
      <h3>About</h3>
    </router-link>

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

  </div>
</template>

<script>
export default {
  name: "home",
  data: () => ({
    theme: '',
    locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
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
    },
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
      }
    }
  }
}
</script>

<style lang="scss">
</style>