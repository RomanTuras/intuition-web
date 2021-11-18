<template>
  <div>
    <nav-bar @onSettings="getSettingsPage"  :title="$t('appTitle')" :subtitle="$t('appSubTitle')"/>

    <div class="column ml-auto mr-auto mt-4 mb-4 flex-wrap md:max-w-lg lg:max-w-xl xl:max-w-2xl">

      <router-link :to="{ name: 'about' }">
        <div class="card w-100 mx-2 sm:mx-4 md:m-0 shadow-md rounded-xl cursor-pointer" :title="$t('homeHelpTitle')">
          <div class="card-title text-center">
            <h2 class="about-title">{{ $t('homeHelpTitle') }}</h2>
            <p>{{ $t('homeHelpSubtitle') }}</p>
          </div>

          <div>
            <svg id="down-arrow" class="fill-current mx-auto my-4" width="12" height="6" viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L11.1962 0H0.803848L6 6Z" />
            </svg>
          </div>

        </div>
      </router-link>

      <div class="mt-3" v-for="exercise in exercises" v-bind:key="exercise.title">
        <router-link :to="{ name: exercise.title }">
          <div class="card w-100 mx-2 sm:mx-4 md:m-0 shadow-md rounded-xl cursor-pointer" :title="$t(exercise.title)">
            <div class="flex justify-between w-100">
              <exercise-indicator :date="date"/>
              <exercise-icon :element="exercise.icon" />
            </div>

<!--            <p class="text-center" style="font-weight: 100">{{ $t('exerciseSubTitle') }}</p>-->
            <h2 class="text-center">{{ $t(exercise.title) }}</h2>
            <p class="line w-32 mx-auto mb-0 border-b-2 h-1"></p>

            <div class="flex justify-between w-100">
              <exercise-level :level="exercise.level"/>

<!--              <div class="relative">-->
<!--                <svg id="down-arrow" class="fill-current mx-auto my-4 absolute bottom-0" width="12" height="6" viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg">-->
<!--                  <path d="M6 6L11.1962 0H0.803848L6 6Z" />-->
<!--                </svg>-->
<!--              </div>-->

              <exercise-skill :value="exercise.skill" />
            </div>

            <div>
              <svg id="down-arrow" class="fill-current mx-auto my-0" width="12" height="6" viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L11.1962 0H0.803848L6 6Z" />
              </svg>
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
import ExerciseLevel from "./home/ExerciseLevel";
import ExerciseSkill from "./home/ExerciseSkill";
export default {
  name: "home",
  components: {
    ExerciseSkill,
    ExerciseLevel,
    ExerciseIndicator,
    ExerciseIcon,
    NavBar
  },
  data: () => ({
    exercises: [
      {
        title: 'four_from_nine',
        icon: 'air_element',
        skill: 0,
        level: 'easy',
        data: null,
      },
      {
        title: 'one_from_four',
        icon: 'earth_element',
        skill: 35,
        level: 'middle',
        data: null,
      },
      {
        title: 'two_from_eight',
        icon: 'fire_element',
        skill: 55,
        level: 'hard',
        data: null,
      },
    ],
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