<template>
  <div class="modal-mask" @click.self="closeDialogAlert">
    <transition name="slide-fade">
      <section v-if="show" class="column ml-auto mr-auto mt-4 mb-4 flex-wrap md:max-w-lg lg:max-w-xl xl:max-w-2xl transition-all">
        <div class="card w-100 mx-2 sm:mx-4 md:m-0 shadow-md rounded-md" style="background-color: #35458D; z-index: 200">
          <div class="modal-content">
            <div class="flex row justify-between">
              <div class="flex row">
                <locale-icon class="fill-current green mr-5 mt-1" />
                <h2 class="green cursor-default">
                  {{ $t('settingsSelectLanguage') }}
                </h2>
              </div>
              <button aria-label="Close" class="float-right" @click="closeDialogAlert" type="button">
                <span class="white" aria-hidden="true">&times;</span>
              </button>
            </div>

            <ul v-for="locale in locales" :key="locale" >
              <li class="flex justify-between modal-tile my-5 mx-1 py-4 px-4 rounded-md cursor-pointer" @click="switchLocale(locale)">
                <p v-if="locale===$i18n.locale" class="green">{{$t('languageName.'+locale)}}</p>
                <p v-else class="white">{{$t('languageName.'+locale)}}</p>
                <svg v-if="locale===$i18n.locale" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33331 14.5833L12.8333 18.0833L18.6666 11.0833" stroke="#0BD99B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14 25.6667C20.4433 25.6667 25.6666 20.4433 25.6666 14C25.6666 7.55668 20.4433 2.33334 14 2.33334C7.55666 2.33334 2.33331 7.55668 2.33331 14C2.33331 20.4433 7.55666 25.6667 14 25.6667Z" stroke="#0BD99B" stroke-width="2"/>
                </svg>
                <svg v-else width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 25.6667C20.4433 25.6667 25.6666 20.4433 25.6666 14C25.6666 7.55667 20.4433 2.33333 14 2.33333C7.55666 2.33333 2.33331 7.55667 2.33331 14C2.33331 20.4433 7.55666 25.6667 14 25.6667Z" stroke="#B1B3B7" stroke-width="2"/>
                </svg>
              </li>

            </ul>

          </div>
        </div>

      </section>
    </transition>
  </div>

</template>

<script>
import LocaleIcon from "./LocaleIcon";
export default {
  name: "LocaleModal",
  components: {LocaleIcon},
  data: () => ({
    locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(','),
    show: false,
  }),
  mounted() {
    this.show = true;
  },
  methods: {
    closeDialogAlert () {
      this.$emit('localeCloseEvent');
    },
    closeSlowly() {
      this.show = false;
      setTimeout(()=>{
        this.closeDialogAlert();
      }, 500);
    },
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
      }
      this.closeSlowly();
    }
  }
}
</script>

<style scoped lang="scss">
.slide-fade-enter-active {
  transition: all .3s ease-in;
}
.slide-fade-leave-active {
  transition: all .3s ease-out;
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateY(300px);
  opacity: 0.5;
}
</style>