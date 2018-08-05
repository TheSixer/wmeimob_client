<template lang="html">
  <section class="article_detail">

    <v-layout row wrap>
      <v-flex xs8>
        <div class="article">
          <h2 class="title">{{article.title}}</h2>
          <div class="article_content" v-html="articleContent"></div>
        </div>
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
import marked from '~/plugins/marked'
export default {
  validate({ params, store }) {
    return params.id && !isNaN(Number(params.id))
  },
  fetch({ store, params, error }) {
    return store.dispatch('loadArticleDetail', params).catch(err => {
      error({ statusCode: 404, message: '众里寻他 我已不再' })
    })
  },
  computed: {
    article () {
      return this.$store.state.article.articleDetail
    },
    articleContent() {
      const content = this.article.content
      console.log(content)
      if (!content) return ''
      // let shortContent = content.substring(0, 11688)
      // const lastH4Index = shortContent.lastIndexOf('\n####')
      // const lastH3Index = shortContent.lastIndexOf('\n###')
      // const lastCodeIndex = shortContent.lastIndexOf('\n\n```')
      // const lastLineIndex = shortContent.lastIndexOf('\n\n**')
      // const lastReadindex = Math.max(lastH4Index, lastH3Index, lastCodeIndex, lastLineIndex)
      // shortContent = shortContent.substring(0, lastReadindex)
      console.log(marked(content))
      return marked(content)
    }
  },
  components: {
    GuessYouLike,
    RecommendAuthor
  }
}
</script>

<style lang="less">
.article_detail {

}
.article {
  padding: 20px;
  background: rgba(250, 250, 250, 0.7);
}
.title {
  text-align: center;
  margin: 1em 0 1.5em;
  font-weight: 700;
}
.article_content {
  flex-direction: column;
  align-items: flex-start;
  p {
    line-height: 2.2em;
    text-indent: 2em;
    text-align: left;
    margin-bottom: 1em;
    img {
      max-width: 100%;
      margin: 0 auto;
      display: block;
      text-align: center;
      border-radius: 2px;
      border: .5rem solid var(--module-hover-bg);
      transition: all .25s;
      opacity: .9;
      cursor: pointer;
    }
  }
}
</style>
