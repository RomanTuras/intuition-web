<template>
  <nav class="shadow-md p-3 sticky top-0 z-50">
    <section class="m-auto nav-section flex items-center justify-between flex-wrap md:max-w-lg lg:max-w-xl xl:max-w-2xl">
<!--      Logo Icon, for Home page only-->
      <div v-if="isHome" class="flex float-left hidden-on-small">
        <svg id="eye" class="xs:invisible fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <title>{{ $t('appTitle') }}</title>
          <path d="M16,25.47c-7.53,0-13.41-8.54-13.66-8.91L2,16l.38-.56C2.59,15.07,8.47,6.53,16,6.53s13.41,8.54,13.66,8.91L30,16l-.38.56C29.41,16.93,23.53,25.47,16,25.47ZM4.41,16C5.8,17.82,10.55,23.47,16,23.47S26.2,17.83,27.59,16C26.2,14.18,21.45,8.53,16,8.53S5.8,14.17,4.41,16Z"/><path class="cls-1" d="M16,11a4.14,4.14,0,0,0-.48,0,.34.34,0,0,0-.31.33.34.34,0,0,0,.1.24h0a2.59,2.59,0,0,1,.74,1.8A2.63,2.63,0,0,1,13.42,16a2.58,2.58,0,0,1-1.78-.72h0a.35.35,0,0,0-.6.18A4.13,4.13,0,0,0,11,16a5,5,0,1,0,5-5Z"/></svg>
      </div>
<!--      Back icon, for all pages, except Home-->
      <div id="arrow-back" v-else class="flex float-left" v-on:click="$emit('onBack')" :title="$t('goBack')">
        <svg class="fill-current cursor-pointer" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.0156 11.0156V12.9844H7.82812L13.4062 18.6094L12 20.0156L3.98438 12L12 3.98438L13.4062 5.39062L7.82812 11.0156H20.0156Z"/>
        </svg>
      </div>
<!--      Title-->
      <div id="nav-title" class="text-center cursor-default">
        <h1 style="line-height: 1;">{{ title }}</h1>
<!--        <p style="font-weight: 400; line-height: 1.5; font-size: 14px">{{ subtitle }}</p>-->
      </div>
<!--        Settings Icon, for Home page only-->
      <div v-if="isHome" id="gear" class="flex float-right cursor-pointer" v-on:click="$emit('onSettings')" :title="$t('settingsTitle')">
        <svg class="fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>{{ $t('settingsTitle') }}</title>
          <path d="M19.7061 11.085C19.7452 10.7287 19.77 10.3675 19.77 10C19.77 9.6325 19.7452 9.27125 19.7055 8.91437L16.992 7.94125C16.8569 7.49375 16.6797 7.06625 16.4652 6.66L17.6998 4.04C17.2505 3.47178 16.7395 2.95607 16.1764 2.5025L13.5782 3.75C13.1733 3.53079 12.7476 3.35283 12.3077 3.21875L11.3433 0.482495C10.9894 0.442495 10.6311 0.41687 10.2667 0.41687C9.90224 0.41687 9.544 0.44187 9.1901 0.482495L8.22571 3.21875C7.78194 3.35437 7.358 3.5325 6.95513 3.75L4.35635 2.5025C3.79234 2.95562 3.28163 3.47125 2.83166 4.04L4.06876 6.65875C3.85308 7.065 3.67643 7.49312 3.54194 7.94L0.828491 8.915C0.788824 9.27125 0.763412 9.63375 0.763412 10.0006C0.763412 10.3675 0.788204 10.7287 0.828491 11.0856L3.54194 12.0594C3.67643 12.5062 3.85308 12.9344 4.06876 13.3406L2.83228 15.9606C3.28163 16.5294 3.79296 17.0437 4.35697 17.4969L6.95327 16.25C7.35614 16.4675 7.7807 16.6462 8.22385 16.7825L9.18948 19.5181C9.54277 19.5575 9.901 19.5825 10.2661 19.5825C10.6305 19.5825 10.9881 19.5575 11.342 19.5175L12.3077 16.7812C12.7508 16.645 13.1754 16.4662 13.5782 16.25L16.1764 17.495C16.7404 17.0419 17.2505 16.5262 17.6998 15.9587L16.4646 13.3394C16.6803 12.935 16.8575 12.5056 16.9927 12.0581L19.7055 11.085H19.7061ZM10.2667 13.0437C9.87022 13.0438 9.47762 12.9652 9.11131 12.8122C8.745 12.6593 8.41214 12.4352 8.13174 12.1525C7.56545 11.5817 7.24722 10.8074 7.24706 10C7.24689 9.19258 7.56481 8.41816 8.13086 7.84712C8.69692 7.27607 9.46475 6.95516 10.2654 6.955C11.0661 6.95483 11.8341 7.27542 12.4004 7.84623C12.9667 8.41704 13.2849 9.19133 13.2851 9.99875C13.2852 10.8062 12.9673 11.5806 12.4013 12.1516C11.8352 12.7227 11.0674 13.0436 10.2667 13.0437Z"/>
        </svg>
      </div>
      <div v-else><span>&nbsp;</span></div>
    </section>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false
    },
    isHome: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
@media (max-width: 320px) {
  .hidden-on-small {
    display: none;
  }
}
</style>