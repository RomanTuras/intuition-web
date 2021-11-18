<template>
  <div class="text-center" >
    <span class="text-4xl font-light accent">{{ value }}</span>
    <span class="text-lg accent">%</span>
    <span class="block text-color">{{ $t('homeSkill') }}</span>
  </div>
</template>

<script>
export default {
  name: "ExerciseSkill",
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/colors";
.accent {
  color: $accentBlue;
}
.text-color {
  color: var(--text-color);
}
</style>