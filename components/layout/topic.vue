<template lang="html">
  <div class="topic">
    <template v-for="(opt, index) of 8">
      <nuxt-link to="" class="topic_item" :key="index">
        <img src="/images/background.jpg" alt="">
        <span>专题名称</span>
      </nuxt-link>
    </template>
    <nuxt-link to="" class="topic_more">更多专题 ></nuxt-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.topic {
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  border-bottom: 1px solid #CCCCCC;
  .topic_item {
    display: inline-flex;
    align-items: center;
    margin: 0 18px 15px 0;
    min-height: 32px;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    border-bottom: .5px solid #CCCCCC;
    overflow: hidden;
    img {
      width: 32px;
      height: 32px;
      vertical-align: top;
    }
    span {
      padding: 0 11px;
      font-size: 14px;
      color: #333333;
    }
  }
  .topic_more {
    display: inline-flex;
    align-items: center;
    margin: 0 18px 15px 0;
    font-size: 14px;
    color: #666;
  }
}
</style>
