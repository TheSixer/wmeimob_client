<template lang="html">
  <section class="subject">

    <v-jumbotron
      height="140px"
      :gradient="gradient"
      src="/images/background.jpg"
      dark
    >
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h5 class="display-3">热门专题</h5>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>

    <v-tabs
      :height="60"
      color="gray"
      fixed-tabs>
      <!-- <v-tabs-slider color="#dddddd"></v-tabs-slider> -->
      <v-tab v-for="n in 3" :key="n" :to="'/subjects/'+n">
        <v-icon>favorite</v-icon>&nbsp;&nbsp;
        Item {{ n }}
      </v-tab>
    </v-tabs>

    <div class="body">
      <nuxt-child/>
    </div>

  </section>
</template>

<script>
export default {
  data () {
    return {
      active: null,
      gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)'
    }
  }
}
</script>

<style lang="less" scoped>
.subject {
  .body {
    margin-top: 20px;
  }
}
</style>
