<template>
  <transition name="fade">
    <div>
      <nav-bar @onBack="onBack" :title=title :is-home=false />

      <div v-if="!isResultShow" :style="{height: screenHeight+'px'}" class="mx-2"
           style="display: flex; flex-direction: column; align-items: center; justify-content: space-between;">

        <div class="ml-auto mr-auto mt-4 mb-4 flex-wrap md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <p>{{ $t('ex_one_of_two_title') }} <strong class="accent-color">{{ $t('one_of_two') }}</strong> {{
            $t('images') }}</p>
        </div>

        <div class="mb-5">
          <div class="flip-container" v-bind:class="{ rotate: isFlip }" style="width: 50px;">
            <div class="flipper" v-bind:class="{ rotate: cardOne === 'flipped' }">
              <!--                Answer card, it is not theme sensitivity color -->
              <tile :width=50 :height=70 :image=question :is-answer-card="true" class="front"
                    style="position:absolute;"/>
              <tile :width=50 :height=70 :image=answerImage :is-answer-card="true" class="back"
                    style="position:absolute;"/>
            </div>
          </div>
        </div>

        <div class="mt-4" style="display: flex">
          <button @click="answer(0)" :disabled="isButtonDisabled">
            <tile class="btn-tile"
                  :width=100
                  :height=135
                  :image=buttonLeft
                  :is-answer-card="false"/>
          </button>
          <div style="width: 50px"></div>
          <button @click="answer(1)" :disabled="isButtonDisabled">
            <tile class="btn-tile"
                  :width=100
                  :height=135
                  :image=buttonRight
                  :is-answer-card="false"/>
          </button>
        </div>

        <!-- Indicator. Rounded Progress Indicator Element -->
        <div class="pie mb-5" :data-pie=dataPie>
          <div class="pie-text">{{pieLabel}}</div>
        </div>

        <audio ref="correct" src="/sounds/correct.mp3" preload id="correct" muted/>
        <audio ref="wrong" src="/sounds/wrong.mp3" preload id="wrong" muted/>

      </div>

      <results v-else :exerciseName="$t('one_from_two')" :totalQuestions=totalQuestions :correctAnswers=correctAnswers />

    </div>
  </transition>
</template>

<script>
  import NavBar from "./NavBar";
  import Tile from './Tile.vue';
  import constants from "./const/constants";
  import rnd from "./helpers/rnd";
  import Results from "./Results";
  import CircularProgressBar from './helpers/circularProgressBar';

  export default {
    name: "OneInTwo",
    components: {Results, NavBar, Tile},
    props: {
      fromHome: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      title: '',
      circle: {},
      dataPie: '{ "round": true,"number":false, "percent": 0,"size": 100, "colorSlice": "#0BD99B", "stroke": 5, "strokeBottom": 4, "time": 5, "colorCircle": "#B834DF" }',
      totalQuestions: 25,
      pieLabel: '',
      answers: [],
      correctAnswers: 0,
      counter: 0,
      skins: [],
      screenHeight: 0,
      navHeight: 60,
      show: true,
      question: "/img/question.svg",
      answerImage: "/img/skins/animals/cat.svg",
      buttonLeft: '',
      buttonRight: '',
      isFlip: false,
      isButtonDisabled: false,
      cardOne: "start",
      isResultShow: false,
    }),
    mounted() {
      this.title = this.$t('one_from_two');
      this.circle = new CircularProgressBar("pie");
      this.circle.initial();
      this.pieLabel = '1/' + this.totalQuestions
      this.initSkin();
      this.screenHeight = window.innerHeight - this.navHeight;
      this.answers = rnd.getAnswers(this.totalQuestions, 2);
    },
    computed: {
      getValue() {
        return this.counter/this.totalQuestions*100;
      }
    },
    methods: {
      refreshIndicator() {
        const options = {
        // item number you want to update
        // read data-pie-index from the element
        index: 1,
        // update props
        percent: this.counter/this.totalQuestions*100
        };
        this.circle.animationTo(options);
      },
      initSkin() {
        let skin = localStorage.getItem('skin') ?? 'animals';
        this.skins = constants.skins[skin];
        if (this.skins !== undefined) {
          this.buttonLeft = this.skins[0];
          this.buttonRight = this.skins[1];
        }
      },
      answer(cardNumber) {
        this.isButtonDisabled = true;
        let answer = this.answers[this.counter];
        this.answerImage = this.skins[answer];
        if (cardNumber === answer) {
          this.correctAnswers++;
        }
        this.cardOne === 'start' ? (this.cardOne = 'flipped') : (this.cardOne = 'start');
        setTimeout(this.nextQuestion, 1000);
        this.makeSound(cardNumber, answer);
      },
      nextQuestion() {
        this.cardOne === 'start' ? (this.cardOne = 'flipped') : (this.cardOne = 'start');
        if (this.counter < this.totalQuestions - 1) {
          this.counter++;
          this.pieLabel = (this.counter + 1) + '/' + this.totalQuestions;
          this.isButtonDisabled = false;
        } else {
          this.isButtonDisabled = true;
          this.counter++;
          setTimeout(this.showResult, 1000);
          //End game, go to result page
        }
        this.refreshIndicator();
      },
      showResult() {
        this.isResultShow = true;
        this.title = this.$t('result_page');
      },
      makeSound(cardNumber, answer) {
        let soundStatus = localStorage.getItem('soundStatus') ?? 'on';
        let vibrationStatus = localStorage.getItem('vibrationStatus') ?? 'on';
        if (vibrationStatus === 'on') {
          if (cardNumber !== answer) {
            window.navigator.vibrate(200);
          }
        }
        if (soundStatus === 'on') {
          let audio = this.$refs.correct;
          if (cardNumber !== answer) {
            audio = this.$refs.wrong;
          }
          audio.play();
        }
      },
      onBack() {
        if (this.fromHome) {
          this.$router.back();
          this.title = this.$t('one_from_two');
        } else {
          this.$router.push('/');
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  
</style>