<template>
  <transition name="fade">
    <section>
      <nav-bar @onBack="onBack" :title="$t('settingsTitle')" :is-home=false />

      <div class="column ml-auto mr-auto mt-4 mb-4 flex-wrap md:max-w-lg lg:max-w-xl xl:max-w-2xl">

        <!--      Common Section-->
        <div class="card w-100 mx-2 sm:mx-4 md:m-0 shadow-md rounded-xl">
          <div class="card-title">
            <h2 class="about-title cursor-default">{{ $t('settingsCommon') }}</h2>

            <!--          Locale-->
            <div class="my-5 flex justify-between cursor-pointer" @click="selectLocal=true">
              <div class="flex flex-row items-start">
                <div class="mr-4 mt-1">
                  <locale-icon :is-dark="theme==='dark'"/>
                </div>
                <div class="">
                  <p class="settings-title block">{{ $t('settingsLanguage') }}</p>
                  <span class="settings-subtitle block">{{ $t('languageName.' + $i18n.locale) }}</span>
                </div>
              </div>
              <div class="float-right align-baseline">
                <svg id="down-arrow" class="fill-current mx-auto my-4 mr-5" width="12" height="6" viewBox="0 0 12 6"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6L11.1962 0H0.803848L6 6Z"/>
                </svg>
              </div>

            </div>
            <!--          End Locale-->

            <!--          Theme-->
            <div class="my-5 flex justify-between">
              <div class="flex flex-row items-start">
                <div class="mr-4 mt-1">
                  <theme-icon :is-dark="theme==='dark'"/>
                </div>
                <div class="cursor-default">
                  <p class="settings-title block">{{ $t('settingsSelectedTheme') }}</p>
                  <span v-if="theme==='dark'" class="settings-subtitle block">{{ $t('themeDark') }}</span>
                  <span v-else class="settings-subtitle block">{{ $t('themeLight') }}</span>
                </div>
              </div>
              <div class="float-right align-baseline">
                <input type="checkbox" id="switch" v-model="isDarkTheme" @change="toggleTheme"/><label for="switch">Toggle</label>
              </div>
            </div>
            <!--          End Theme-->

          </div>


        </div>
        <!--      End Common Section-->

        <!--      Application Section-->
        <div class="card w-100 mx-2 sm:mx-4 md:mx-0 mt-4 shadow-md rounded-xl">
          <div class="card-title">
            <h2 class="about-title cursor-default">{{ $t('settingsApplication') }}</h2>

            <!--          Exercise Skin -->
            <div class="my-5 flex justify-between cursor-pointer" @click="selectSkin=true">
              <div class="flex flex-row items-start">
                <div class="mr-4 mt-1">
                  <skin-icon style="width: 26px"/>
                </div>
                <div class="">
                  <p class="settings-title block">{{ $t('settingsExercisesSkins') }}</p>
                  <span class="settings-subtitle block">{{ $t(skin) }}</span>
                </div>
              </div>
              <div class="float-right align-baseline">
                <svg id="down-arrow" class="fill-current mx-auto my-4 mr-5" width="12" height="6" viewBox="0 0 12 6"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6L11.1962 0H0.803848L6 6Z"/>
                </svg>
              </div>

            </div>
            <!--          Exercise Skin-->

            <!--          Sound-->
            <div class="my-5 flex justify-between">
              <div class="flex flex-row items-start">
                <div class="mr-6 mt-1">
                  <sound-icon v-bind:sound-on="isSoundOn"/>
                </div>
                <div class="cursor-default">
                  <p class="settings-title block">{{ $t('settingsSounds') }}</p>
                  <span class="settings-subtitle block">{{ $t('mediaStatus.' + soundStatus) }}</span>
                </div>
              </div>
              <div class="float-right align-baseline">
                <input type="checkbox" id="sound" v-model="isSoundOn" @change="toggleSoundStatus"/><label for="sound">Toggle</label>
              </div>
            </div>
            <!--          End sound-->

            <!--          Vibration-->
            <div class="my-5 flex justify-between">
              <div class="flex flex-row items-start">
                <div class="mr-6 mt-1">
                  <vibration-icon v-bind:vibration-on="isVibrationOn"/>
                </div>
                <div class="cursor-default">
                  <p class="settings-title block">{{ $t('settingsVibration') }}</p>
                  <span class="settings-subtitle block">{{ $t('mediaStatus.' + vibrationStatus) }}</span>
                </div>
              </div>
              <div class="float-right align-baseline">
                <input type="checkbox" id="vibration" v-model="isVibrationOn" @change="toggleVibrationStatus"/><label
                  for="vibration">Toggle</label>
              </div>
            </div>
            <!--          End Vibration-->

          </div>
        </div>
        <!--      End Application Section-->

      </div>

      <locale-modal v-if="selectLocal" v-on:localeCloseEvent="closeLocal"/>

      <skin-modal v-if="selectSkin" v-on:skinCloseEvent="closeSkin" v-on:changeSkin="changeSkin"/>

    </section>
  </transition>
</template>

<script>
import NavBar from "./NavBar";
import ThemeIcon from "./settings/ThemeIcon";
import LocaleIcon from "./settings/LocaleIcon";
import LocaleModal from "./settings/LocaleModal";
import SkinIcon from "./settings/SkinIcon";
import SoundIcon from "./settings/SoundIcon";
import SkinModal from "./settings/SkinModal";
import VibrationIcon from "./settings/VibrationIcon";

export default {
  name: "Settings",
  components: {
    VibrationIcon,
    SkinModal,
    SoundIcon,
    SkinIcon,
    LocaleModal,
    LocaleIcon,
    ThemeIcon,
    NavBar
  },
  data: () => ({
    theme: 'light',
    isDarkTheme: false,
    isSoundOn: true,
    isVibrationOn: true,
    selectLocal: false,
    selectSkin: false,
    soundStatus: 'on',
    vibrationStatus: 'on',
    locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(','),
    skin: '',
  }),
  mounted() {
    this.theme = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', this.theme);
    this.isDarkTheme = this.theme === 'dark';
    this.skin = localStorage.getItem('skin') ?? 'animals';
    this.soundStatus = localStorage.getItem('soundStatus') ?? 'on';
    this.isSoundOn = this.soundStatus === 'on';
    this.vibrationStatus = localStorage.getItem('vibrationStatus') ?? 'on';
    this.isVibrationOn = this.vibrationStatus === 'on';
  },
  methods: {
    closeLocal() {
      this.selectLocal = false;
    },
    closeSkin() {
      this.selectSkin = false;
    },
    changeSkin(skinName) {
      localStorage.setItem('skin', skinName);
      this.skin = skinName;
    },
    toggleSoundStatus() {
      if (this.soundStatus === 'on') {
        localStorage.setItem('soundStatus', 'off');
        this.soundStatus = 'off';
      } else {
        localStorage.setItem('soundStatus', 'on');
        this.soundStatus = 'on';
      }
      this.isSoundOn = this.soundStatus === 'on';
    },
    toggleVibrationStatus() {
      if (this.vibrationStatus === 'on') {
        localStorage.setItem('vibrationStatus', 'off');
        this.vibrationStatus = 'off';
      } else {
        localStorage.setItem('vibrationStatus', 'on');
        this.vibrationStatus = 'on';
      }
      this.isVibrationOn = this.vibrationStatus === 'on';
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