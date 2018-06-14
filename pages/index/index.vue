<template>
  <section class="article">

    <v-layout row wrap>
      <v-flex xs8>
        <banner></banner>

        <topic></topic>

        <article-list :article="article"></article-list>
      </v-flex>
      <v-flex xs4>
        <aside-board></aside-board>

        <recommend-author></recommend-author>
      </v-flex>
    </v-layout>

  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import {
  Banner,
  Topic,
  ArticleList,
  AsideBoard,
  RecommendAuthor
} from '~/components/layout'

export default {
  fetch ({ store }) {
    return Promise.all([
      store.dispatch('getArticles')
    ])
  },
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          clickable: true,
          el: '.swiper-pagination'
        },
        setWrapperSize: true,
        autoHeight: true,
        mousewheel: true,
        observeParents: true,
        grabCursor: true,
        preloadImages: false,
        lazy: true
      },
      banners: [
        '/images/background.jpg',
        '/images/background.png',
        '/images/background.jpg',
        '/images/background.png',
        '/images/background.jpg',
        '/images/background.png'
      ]
    }
  },
  computed: {
    article () {
      return this.$store.state.article.list
    }
  },
  components: {
    AppLogo,
    Banner,
    Topic,
    ArticleList,
    AsideBoard,
    RecommendAuthor
  }
}
</script>

<style lang="less">
.article {
  /* min-height: 100vh; */
  .banner {
    width: 100%;
    height: auto;
  }
}
</style>
