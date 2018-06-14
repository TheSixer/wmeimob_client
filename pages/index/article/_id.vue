<template lang="html">
  <section class="article_detail">

    <v-layout row wrap>
      <v-flex xs8>
        {{$route.params.id}}
      </v-flex>
      <v-flex xs4>
        <guess-you-like></guess-you-like>
        <recommend-author></recommend-author>
      </v-flex>
    </v-layout>

  </section>
</template>

<script>
import {
  GuessYouLike,
  RecommendAuthor
} from '~/components/layout'
export default {
  components: {
    GuessYouLike,
    RecommendAuthor
  }
}
</script>

<style lang="less">
.article_detail {

}
</style>
