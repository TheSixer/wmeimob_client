<template lang="html">
  <v-list class="r_a_list" two-line>
    <template v-for="(item, index) in items">
      <v-subheader class="sub_header" v-if="item.header" :key="item.header">
        <span>{{ item.header }}</span>
        <nuxt-link to="" class="grey--text">全部 >></nuxt-link>
      </v-subheader>
      <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
      <v-list-tile v-else :key="item.title" avatar>
        <v-list-tile-avatar>
          <img :src="item.avatar">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-html="item.title"></v-list-tile-title>
          <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <!-- <v-btn icon ripple>
            <v-icon :color="item.active ? 'teal' : 'grey'">add</v-icon>
          </v-btn> -->
          <v-btn flat icon color="grey">
            <v-icon>favorite</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { header: '推荐作者' },
        {
          avatar: '/images/background.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: '/images/background.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: '/images/background.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        { divider: true, inset: true },
        {
          avatar: '/images/background.jpg',
          title: 'Birthday gift',
          subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
        },
        { divider: true, inset: true },
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
}
</style>
