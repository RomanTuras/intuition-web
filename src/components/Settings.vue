<template>
  <section>
    <nav-bar @onBack="onBack"  :title="$t('settingsTitle')" :is-home=false />

    <div class="column ml-auto mr-auto mt-4 mb-4 flex-wrap md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <div class="card w-100 mx-2 sm:mx-4 md:m-0 shadow-md rounded-xl" >
        <div class="card-title">
          <h2 class="about-title">{{ $t('settingsCommon') }}</h2>

<!--          Locale-->
          <div class="my-5 flex justify-between cursor-pointer" @click="selectLocal=true">
            <div class="flex flex-row items-start">
              <div class="mr-4 mt-1">
                <locale-icon :is-dark="theme==='dark'" />
              </div>
              <div class="">
                <p class="settings-title block">{{ $t('settingsLanguage') }}</p>
                <span class="settings-subtitle block">{{$t('languageName.'+$i18n.locale)}}</span>
              </div>
            </div>
            <div class="float-right align-baseline">
              <svg id="down-arrow" class="fill-current mx-auto my-4 mr-5" width="12" height="6" viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L11.1962 0H0.803848L6 6Z" />
              </svg>
            </div>

          </div>
<!--          End Locale-->

<!--          Theme-->
          <div class="my-5 flex justify-between">
            <div class="flex flex-row items-start">
              <div class="mr-4 mt-1">
                <theme-icon :is-dark="theme==='dark'" />
              </div>
              <div class="cursor-default">
                <p class="settings-title block">{{ $t('settingsSelectedTheme') }}</p>
                <span v-if="theme==='dark'" class="settings-subtitle block">{{ $t('themeDark') }}</span>
                <span v-else class="settings-subtitle block">{{ $t('themeLight') }}</span>
              </div>
            </div>
            <div class="float-right align-baseline">
              <input type="checkbox" id="switch" v-model="isDarkTheme" @change="toggleTheme" /><label for="switch">Toggle</label>
            </div>
          </div>
<!--          End Theme-->

        </div>


      </div>
    </div>

    <locale-modal v-if="selectLocal" v-on:localeCloseEvent="closeLocal"/>

  </section>
</template>

<script>
import NavBar from "./NavBar";
import ThemeIcon from "./settings/ThemeIcon";
import LocaleIcon from "./settings/LocaleIcon";
import LocaleModal from "./settings/LocaleModal";
export default {
  name: "Settings",
  components: {
    LocaleModal,
    LocaleIcon,
    ThemeIcon,
    NavBar
  },
  data: () => ({
    theme: 'light',
    isDarkTheme: false,
    selectLocal: false,
    locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
  }),
  mounted() {
    this.theme = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', this.theme);
    this.isDarkTheme = this.theme === 'dark';
  },
  methods: {
    closeLocal() {
      this.selectLocal = false;
    },
    onBack() {
      this.$router.back();
    },
    toggleTheme() {
      if (this.theme === 'dark') {
        this.theme = 'light'
      } else {
        this.theme = 'dark'
      }
      this.isDarkTheme = this.theme === 'dark';
      document.documentElement.setAttribute('data-theme', this.theme);
      localStorage.setItem('theme', this.theme);
    },
  }
}
</script>

<style scoped>

</style>