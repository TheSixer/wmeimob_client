<template lang="html">
  <section class="subject">

    <v-layout row wrap>
      <v-flex xs12 sm4>

      </v-flex>
      <v-flex xs12 sm8>

        <v-tabs
          :height="60"
          color="gray"
          fixed-tabs>
          <!-- <v-tabs-slider color="#dddddd"></v-tabs-slider> -->
          <v-tab v-for="n in 3" :key="n" :to="'/user/'+n">
            <v-icon>favorite</v-icon>&nbsp;&nbsp;
            Item {{ n }}
          </v-tab>
        </v-tabs>

        <div class="body">
          <nuxt-child/>
        </div>

      </v-flex>
    </v-layout>

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
