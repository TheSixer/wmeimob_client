<template>
  <div class="article_list_view">
    <div class="article_list_item" v-for="(opt, index) of article" :key="index">
      <div class="item_content">
        <nuxt-link :to="`/article/${opt.id}`" class="item_title">{{ opt.title }}</nuxt-link>
        <p class="item_abstract">{{ opt.content }}</p>
        <div class="">
          {{ opt.ctime | moment('LLLL') }}
          <v-btn icon disabled>
            <v-icon>favorite</v-icon> 233
          </v-btn>
        </div>
      </div>
      <nuxt-link :to="`/article/${opt.id}`" class="item_media"></nuxt-link>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'ArticleList',
  props: {
    article: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less">
.article_list_view {
  .article_list_item {
    display: flex;
    padding: 20px 0;
    border-bottom: 1px solid #CCCCCC;
    .item_media {
      flex: 0 0 160px;
      height: 100px;
      border-radius: 3px;
      background-image: url(/images/background.jpg);
      background-size: cover;
      background-position: center;
      &:hover {
        opacity: .7;
        cursor: pointer;
      }
    }
    .item_content {
      flex: 1;
      padding-right: 12px;
      .item_title {
        display: flex;
        color: #333;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        text-align: left;
        &:hover {
          text-decoration: underline;
        }
      }
      .item_abstract {
        margin: 0;
        font-size: 13px;
        line-height: 24px;
        color: #999;
        text-align: left;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
