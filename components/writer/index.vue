<template lang="html">
  <v-card tile>
    <v-toolbar color="primary" card dark>
      <v-btn icon dark @click.native="close">
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title class="white--text">写文章</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark flat @click.native="submitFrom">
          <v-icon dark icon left>publish</v-icon>
          发布
        </v-btn>
      </v-toolbar-items>
      <v-menu bottom right offset-y>
        <v-btn slot="activator" dark icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>more</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-card-text>

      <v-container>

        <v-text-field
          :rules="[(v) => v.length <= 25 || 'Max 25 characters']"
          :counter="25"
          v-model="title"
          label="文章标题"
        ></v-text-field>

        <mavon-editor v-model="content"/>

      </v-container>

    </v-card-text>

    <div style="flex: 1 1 auto;"></div>
  </v-card>
</template>

<script>
import { publishPosts } from '~/api'

export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    onClose: Function
  },
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    async submitFrom () {
      if (this.title && this.content) {
        const res = await publishPosts({title: this.title, content: this.content})
        console.log(res)
      }
    },
    close () {
      this.onClose()
    }
  }
}
</script>

<style lang="css">
</style>
