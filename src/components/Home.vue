<template>
  <div>
    <nav-bar @onSettings="getSettingsPage"  :title="$t('appTitle')" :subtitle="$t('appSubTitle')"/>

    <div class="column ml-auto mr-auto mt-4 mb-4 flex-wrap md:max-w-lg lg:max-w-xl xl:max-w-2xl">

      <router-link :to="{ name: 'about' }">
        <div class="card w-100 sm:mx-4 md:m-0 shadow-md rounded-xl cursor-pointer" :title="$t('homeHelpTitle')">
          <div class="card-title text-center">
            <h2 id="about-title">{{ $t('homeHelpTitle') }}</h2>
            <p>{{ $t('homeHelpSubtitle') }}</p>
          </div>
          <div>
            <div>
              <svg id="down-arrow" class="fill-current mx-auto my-4" width="12" height="6" viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L11.1962 0H0.803848L6 6Z" />
              </svg>
            </div>
          </div>
        </div>
      </router-link>

      <div class="mt-3">
        <router-link :to="{ name: 'about' }">
          <div class="card w-100 sm:mx-4 md:m-0 shadow-md rounded-xl cursor-pointer" :title="$t('homeHelpTitle')">
            <div class="flex justify-between w-100">
              <exercise-indicator :date="date"/>
              <exercise-icon element="air_element" />
            </div>

            <h2 class="text-center">{{ $t('one_from_two') }}</h2>

            <div>
              <div>
                <svg id="down-arrow" class="fill-current mx-auto my-4" width="12" height="6" viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6L11.1962 0H0.803848L6 6Z" />
                </svg>
              </div>
            </div>
          </div>
        </router-link>
      </div>

    </div>



  </div>
</template>

<script>
import NavBar from "./NavBar";
import ExerciseIcon from "./home/ExerciseIcon";
import ExerciseIndicator from "./home/ExerciseIndicator";
export default {
  name: "home",
  components: {
    ExerciseIndicator,
    ExerciseIcon,
    NavBar
  },
  data: () => ({
    exercises: {
      four_from_nine: {
        title: 'four_from_nine',
        icon: 'air_element',
        skill: 0,
        level: 'easy',
        data: null,
      },
      one_from_four: {
        title: 'one_from_four',
        icon: 'earth_element',
        skill: 0,
        level: 'middle',
        data: null,
      },
      two_from_eight: {
        title: 'two_from_eight',
        icon: 'fire_element',
        skill: 0,
        level: 'hard',
        data: null,
      },
    },
    date: null, //'Wed Oct 27 2021 21:24:10 GMT+0300 (Eastern European Summer Time)',
  }),
  mounted() {
    let localTheme = localStorage.getItem('theme'); //gets stored theme value if any
    document.documentElement.setAttribute('data-theme', localTheme); // updates the data-theme attribute
  },
  methods: {
    getSettingsPage() {
      this.$router.push('/settings');
    },
  }
}
</script>

<style lang="scss">
</style>