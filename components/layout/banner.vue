<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner, i) in banners" :key="i">
        <img class="banner" :src="banner">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
export default {
  name: 'carrousel',
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
        '/images/background.jpg',
        '/images/background.jpg',
        '/images/background.jpg',
        '/images/background.jpg',
        '/images/background.jpg'
      ]
    }
  }
}
</script>

<style lang="css">
</style>
