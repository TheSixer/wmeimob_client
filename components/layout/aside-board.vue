<template lang="html">
  <div class="board">
    <template v-for="(opt, index) of list">
      <nuxt-link to="" :key="index" class="board_item" :class="opt.styles">{{ opt.title }}</nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [{
        title: '精选好文',
        styles: 'orange darken-1'
      }, {
        title: '热门文章',
        styles: 'cyan lighten-1'
      }, {
        title: '热门专题',
        styles: 'deep-purple lighten-2'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
.board {
  padding: 0 15px;
  .board_item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 40px;
    margin-bottom: 15px;
    padding: 0 20px;
    font-size: 14px;
    color: #FFFFFF;
    border-radius: 3px;
    background: #FFFFFF;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
