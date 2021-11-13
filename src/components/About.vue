<template>
  <div>
    <nav-bar @onBack="onBack"  :title="$t('homeHelpTitle')" :is-home=false />
    <div class="column ml-auto mr-auto mt-4 mb-4 flex-wrap md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <title-image />
      <h2 class="about-title text-center my-5">{{ $t('about_article_title')}}</h2>
      <div class="mx-3">
        <p><strong>{{ $t('about_article_text.1') }}</strong></p>
        <p>{{ $t('about_article_text.2') }}</p>
        <p>{{ $t('about_article_text.3') }}</p>
        <p>{{ $t('about_article_text.4') }}</p>
        <text-separator />
        <div class="link-wrapper"><p>
          <strong>{{ $t('about_article_text.5.1') }}</strong>
          <a href="/" class="link hover-a">{{ $t('about_article_text.5.link') }}</a>
          <strong>{{ $t('about_article_text.5.2') }}</strong>
        </p></div>
        <p>{{ $t('about_article_text.6') }}</p>
        <p>{{ $t('about_article_text.7') }}</p>
        <p>{{ $t('about_article_text.8') }}</p>
        <text-separator />
        <p><strong>{{ $t('about_article_text.9') }}</strong></p>
        <p>{{ $t('about_article_text.10') }}</p>
        <p>{{ $t('about_article_text.11') }}</p>
        <p>{{ $t('about_article_text.12') }}</p>
        <p>{{ $t('about_article_text.13') }}</p>
        <p>{{ $t('about_article_text.14') }}</p>
        <p>{{ $t('about_article_text.15') }}</p>
        <p class="mt-5"><strong>{{ $t('about_article_text.16') }}</strong></p>
        <div class="link-wrapper my-5">
          <p><a href="/" class="link hover-a">{{ $t('about_article_text.to_home') }} ></a></p>
        </div>
        <text-separator />
      </div>
    </div>

  </div>
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

</style>