<template>
  <div>
    <nav-bar @onSettings="getSettingsPage"  :title="$t('appTitle')" :subtitle="$t('appSubTitle')"/>

    <div class="column ml-auto mr-auto mt-4 mb-4 flex-wrap md:max-w-lg lg:max-w-xl xl:max-w-2xl">

      <router-link :to="{ name: 'about' }">
        <div class="card w-100 sm:mx-4 md:m-0 shadow-md rounded-xl cursor-pointer" :title="$t('homeHelpTitle')">
          <div class="card-title text-center">
            <h2>{{ $t('homeHelpTitle') }}</h2>
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
              <div class="indicator flex">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 9.5C18 14.1944 14.1944 18 9.5 18C4.80558 18 1 14.1944 1 9.5C1 4.80558 4.80558 1 9.5 1C14.1944 1 18 4.80558 18 9.5Z" stroke="#B1B3B7" stroke-width="2"/>
                  <path d="M14 9.5C14 11.9853 11.9853 14 9.5 14C7.01472 14 5 11.9853 5 9.5C5 7.01472 7.01472 5 9.5 5C11.9853 5 14 7.01472 14 9.5Z" fill="#B1B3B7"/>
                </svg>
                <span class="indicator-label flex ml-1">never</span>
              </div>
              <exercise-icon element="air_element" />
            </div>

            <h2>{{ $t('homeHelpTitle') }}</h2>

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
export default {
  name: "home",
  components: {
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
    }
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