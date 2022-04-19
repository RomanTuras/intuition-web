<template>
  <transition name="fade">
    <div :style="{height: screenHeight+'px'}" class="mx-2"
         style="display: flex; flex-direction: column; align-items: center; justify-content: space-between;">
      <!-- Exercise name -->
      <div>
        <h1 class="about-title text-center mt-5">{{ exerciseName }}</h1>
        <h2 class="my-4">{{ $t('correct_answers') }}</h2>
      </div>
      <!-- Indicator. Rounded Progress Indicator Element -->
      <div class="pie mb-5" data-pie='{ "round": true,"number":false, "percent": 0,"size": 130, "colorSlice": "#0BD99B", "stroke": 9, "strokeBottom": 8, "time": 10, "colorCircle": "#B834DF" }'>
        <div class="pie-label">
          <div class="pie-percent">{{percentText}}<span class="percent">%</span></div>
          <div class="pie-answers">{{answersText}}</div>
        </div>
      </div>
      <!-- Summary description -->
      <div class="mb-5 ml-auto mr-auto flex-wrap md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, repellendus nostrum iusto architecto facilis odit error. Assumenda ullam blanditiis mollitia distinctio laboriosam eos, saepe expedita nihil eaque, eius suscipit. Iure!</p>
      </div>
    </div>
  </transition>
</template>

<script>
import CircularProgressBar from './helpers/circularProgressBar';
  export default {
    name: "Results",
    props: {
      exerciseName: String,
      totalQuestions: Number,
      correctAnswers: Number
    },
    data: () => ({
      screenHeight: 0,
      navHeight: 60,
      percentText: '',
      answersText: ''
    }),
    mounted() {
      this.screenHeight = window.innerHeight - this.navHeight;
      this.circle = new CircularProgressBar("pie");
      this.circle.initial();
      this.refreshIndicator();
    },
    methods: {
      refreshIndicator() {
        const percent = (this.correctAnswers/this.totalQuestions)*100;
        this.percentText = percent;
        this.answersText = this.correctAnswers + '/' + this.totalQuestions;
        const options = {
        // item number you want to update
        // read data-pie-index from the element
        index: 1,
        // update props
        percent: percent
        };
        this.circle.animationTo(options);
      },
    }
  }
</script>

<style scoped>
.pie-label {
  position: absolute;
  width: 130px;
  text-align: center;
  margin-top: 39px;
  color: var(--text-color);
}
.pie-percent {
  font-weight: bold;
  font-size: 26px;
}
.percent {
  font-weight: 100;
  font-size: 14px;
  margin-left: 1px;
}
</style>