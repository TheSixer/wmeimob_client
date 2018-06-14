<template>
  <div class="theme--light">
    <background></background>
    <nuxt/>
  </div>
</template>
<script>
import {
  Background,
} from '~/components/layout'
export default {
  name: 'app',
  components: {
    Background
  }
}
</script>
<style>
.content {
  padding-top: 60px;
}
</style>
