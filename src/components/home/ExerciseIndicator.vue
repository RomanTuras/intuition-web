<template>
  <div class="indicator mt-3">
    <svg class="inline-block align-middle" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 9.5C18 14.1944 14.1944 18 9.5 18C4.80558 18 1 14.1944 1 9.5C1 4.80558 4.80558 1 9.5 1C14.1944 1 18 4.80558 18 9.5Z" :stroke="getIndicatorColor" stroke-width="2"/>
      <path d="M14 9.5C14 11.9853 11.9853 14 9.5 14C7.01472 14 5 11.9853 5 9.5C5 7.01472 7.01472 5 9.5 5C11.9853 5 14 7.01472 14 9.5Z" :fill="getIndicatorColor"/>
    </svg>
    <span class="indicator-label inline-block align-middle ml-1">{{ getIndicatorTitle }}</span>
  </div>
</template>

<script>
export default {
  name: "ExerciseIndicator",
  props: {
    date: {
      type: String,
      default: null
    },
  },
  data: () => ({
    days: null,
    title: '',
  }),
  mounted() {
    if (this.date !== null) {
      let previous = new Date(this.date);
      let millis = new Date() - previous;
      this.days = (millis / (60*60*24*1000))
      console.log(this.days);
    }
  },
  computed: {
    getIndicatorColor() {
      if (this.date === null) {
        return '#B1B3B7';
      } else if (this.days >= 0 && this.days < 1) {
        return '#0BD99B';
      } else if (this.days >= 1 && this.days <= 2) {
        return '#FFC600';
      } else if (this.days >= 2) {
        return '#FD6F41';
      } else {
        return '#B1B3B7';
      }
    },
    getIndicatorTitle() {
      if (this.date === null) {
        return this.$t('never');
      } else if (this.days >= 0 && this.days < 1) {
        return this.$t('today');
      } else if (this.days >= 1 && this.days <= 2) {
        return this.$t('yesterday');
      } else if (this.days >= 2) {
        return this.$t('longTime');
      } else {
        return this.$t('never');
      }
    }
  }
}
</script>