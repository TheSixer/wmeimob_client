<template>
  <div class="toolbar">
    <v-toolbar color="white" app fixed :extension-height="80">
      <span class="title ml-8 mr-12">Wmeimob</span>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          active-class="default-class"
          color="blue-grey darken-2"
          to="/"
          nuxt
          flat
          large>
          <v-icon medium color="blue-grey darken-2">watch_later</v-icon>&nbsp;&nbsp;最新
        </v-btn>
        <v-btn
          active-class="default-class"
          color="blue-grey darken-2"
          to="/subjects/1"
          nuxt
          flat
          large>
          <v-icon medium color="blue-grey darken-2">dashboard</v-icon>&nbsp;&nbsp;专题
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-text-field
          solo-inverted
          flat
          label="Search"
          prepend-icon="search"
        ></v-text-field>
      </v-layout>
      <v-spacer></v-spacer>

      <v-toolbar-items v-if="!isLogin">
        <v-btn
          active-class="default-class"
          color="blue-grey darken-2"
          to="/login"
          nuxt
          flat
          large>登录</v-btn>
        <v-btn
          active-class="default-class"
          color="blue-grey darken-2"
          to="/register"
          nuxt
          flat
          large>注册</v-btn>
      </v-toolbar-items>

      <template v-else>
        <div class="toolbar_user_item"
          @mouseover="toggleShow"
          @mouseout="toggleShow">
          <nuxt-link
            :class="{active: showUserMenus}"
            to=""
            >
            <v-avatar color="warning">
              <v-icon color="white">person</v-icon>
            </v-avatar>
          </nuxt-link>
          <v-list class="toolbar_user_item_menus" v-if="showUserMenus">
            <v-list-tile v-for="(item, index) in items" :key="index" avatar @click.native="logOut">
              <v-list-tile-action>
                <v-icon color="pink">person</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </div>
        <v-toolbar-items>
          <v-btn
            active-class="default-class"
            color="blue-grey darken-2"
            flat
            @click.stop="dialog = true">
            <v-icon dark>border_color</v-icon>
              写文章
          </v-btn>
        </v-toolbar-items>
      </template>

    </v-toolbar>

    <!--  发布文章  -->
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <writer
        :dialog="dialog"
        :on-close="hideDialog"></writer>
    </v-dialog>
  </div>
</template>

<script>
import Writer from '../writer'

export default {
  name: 'headerView',
  data () {
    return {
      dialog: false,
      showUserMenus: false,
      items: [
        { title: '我的主页' },
        { title: '喜欢的文章' },
        { title: '收藏的文章' },
        { title: '退出' }
      ]
    }
  },
  computed: {
    isLogin () {
      console.log(this.$store.getters.token)
      return this.$store.getters.isLogined
    }
  },
  methods: {
    toggleShow () {
      this.showUserMenus = !this.showUserMenus
    },
    hideDialog () {
      this.dialog = false
    },
    logOut () {
      console.log('logOut');
      this.$store.dispatch('logOut')
    }
  },
  components: {
    Writer
  }
}
</script>

<style lang="less" scoped>
.toolbar {
  .toolbar_user_item {
    position: relative;
    .toolbar_user_item_menus {
      position: absolute;
      left: 0;
      top: 48px;
      box-shadow: 0 2px 8px rgba(0,0,0,.1);
    }
    a {
      display: inline-block;
      padding-left: 15px;
      padding-right: 15px;
      &.active {
        background: gray !important;
      }
    }
  }
}
</style>
