<template>
  <div class="theme--light">
    <header-view></header-view>

    <section class="content">
      <v-container grid-list-md text-xs-center>
        <nuxt-child></nuxt-child>
      </v-container>
    </section>

  </div>
</template>
<script>
import {
  Header
} from '~/components/layout'
export default {
  name: 'app',
  components: {
    HeaderView: Header
  }
}
</script>
<style>
.content {
  padding-top: 60px;
}
</style>
