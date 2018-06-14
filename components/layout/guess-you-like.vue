<template lang="html">
  <v-list class="r_a_list" two-line>
    <template v-for="(item, index) in items">
      <v-subheader class="sub_header" v-if="item.header" :key="item.header">
        <span>{{ item.header }}</span>
        <nuxt-link to="" class="grey--text">更多 >></nuxt-link>
      </v-subheader>
      <v-list-tile v-else :key="index" avatar>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
          <v-list-tile-sub-title>
            <nuxt-link to="" class="grey--text link">一叶知秋</nuxt-link> &mdash;
            <span v-html="item.subtitle"></span>
          </v-list-tile-sub-title>
        </v-list-tile-content>
        <!-- <v-list-tile-avatar>
          <img :src="item.avatar">
        </v-list-tile-avatar> -->
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { header: '猜你喜欢' },
        {
          avatar: '/images/background.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          avatar: '/images/background.jpg',
          title: 'Summer BBQ',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        {
          avatar: '/images/background.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          avatar: '/images/background.jpg',
          title: 'Birthday gift',
          subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
        },
        {
          avatar: '/images/background.jpg',
          title: 'Recipe to try',
          subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        }
      ]
    }
  }
}
</script>

<style lang="less">
.r_a_list {
  background: none!important;
  .sub_header {
    justify-content: space-between;
    a {
      font-size: 12px;
      text-decoration: underline;
      &:hover {
         color: #333333 !important;
      }
    }
  }
  .link {
    font-size: 12px;
    &:hover {
       color: #333333 !important;
       text-decoration: underline;
    }
  }
}
</style>
