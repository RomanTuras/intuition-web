<template>
  <transition name="fade">
    <div>
      <nav-bar @onBack="onBack" :title="$t('homeHelpTitle')" :is-home=false />
      <div class="about-background column ml-auto mr-auto mt-4 mb-4 flex-wrap md:max-w-lg lg:max-w-xl xl:max-w-2xl shadow-md rounded-xl">
        <title-image/>
        <h2 class="about-title text-center my-5">{{ $t('about_article_title') }}</h2>
        <div class="mx-3">
          <p><strong>{{ $t('about_article_text.1') }}</strong></p>
          <p>{{ $t('about_article_text.2') }}</p>
          <p>{{ $t('about_article_text.3') }}</p>
          <p>{{ $t('about_article_text.4') }}</p>
          <text-separator/>
          <div class="link-wrapper"><p>
            <strong>{{ $t('about_article_text.5.1') }}</strong>
            <a href="/" class="link hover-a">{{ $t('about_article_text.5.link') }}</a>
            <strong>{{ $t('about_article_text.5.2') }}</strong>
          </p></div>
          <p>{{ $t('about_article_text.6') }}</p>
          <p>{{ $t('about_article_text.7') }}</p>
          <p>{{ $t('about_article_text.8') }}</p>
          <text-separator/>
          <p><strong>{{ $t('about_article_text.9') }}</strong></p>
          <p>{{ $t('about_article_text.10') }}</p>
          <p>{{ $t('about_article_text.11') }}</p>
          <p>{{ $t('about_article_text.12') }}</p>
          <p>{{ $t('about_article_text.13') }}</p>
          <p>{{ $t('about_article_text.14') }}</p>
          <p>{{ $t('about_article_text.15') }}</p>
          <p class="mt-5"><strong>{{ $t('about_article_text.16') }}</strong></p>
          <text-separator/>
          <div class="link-wrapper">
            <p class="mb-9">
              <a href="/" class="link hover-a uppercase float-right">
                {{ $t('about_article_text.to_home') }}
                <svg class="fill-current" width="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                     style="transform: rotate(180deg); display: inline-block">
                  <path
                      d="M20.0156 11.0156V12.9844H7.82812L13.4062 18.6094L12 20.0156L3.98438 12L12 3.98438L13.4062 5.39062L7.82812 11.0156H20.0156Z"/>
                </svg>
              </a>
            </p>
          </div>

        </div>
      </div>

    </div>
  </transition>
</template>

<script>
import NavBar from "./NavBar";
import TextSeparator from "./about/TextSeparator";
import TitleImage from "./about/TitleImage";

export default {
  name: "about",
  params: {
    fromHome: {
      type: Boolean,
      default: false
    }
  },
  components: {
    TitleImage,
    TextSeparator,
    NavBar
  },
  data: () => ({
    show: true,
  }),
  methods: {
    onBack() {
      if (this.fromHome) {
        this.$router.back();
      } else {
        this.$router.push('/');
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/colors";

.about-background {
  background-color: var(--card-color);
}
</style>