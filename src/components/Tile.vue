<template>
  <div class="card shadow-md rounded-xl ml-auto mr-auto" :style="{width: getWidth(), height: getHeight()}"
       style="display: flex; justify-content: center;">
    <img :class="{
      'svg-accent-dark':(isDarkTheme && !isAnswerCard),
      'svg-accent-light':(!isDarkTheme && !isAnswerCard),
      'svg-default-color':(isAnswerCard) }"
         :src=image :width=getWidth() :height=getHeight() >
  </div>
</template>

<script>
export default {
  name: "Tile",
  props: {
    width: Number,
    height: Number,
    image: String,
    isAnswerCard: Boolean,
  },
  data: () => ({
    isDarkTheme: true,
  }),
  mounted() {
    const theme = localStorage.getItem('theme');
    this.isDarkTheme = theme === 'dark';
  },
  methods: {
    getWidth() { return this.width + 'px' },
    getHeight() { return this.height + 'px' },
  }
}
</script>
