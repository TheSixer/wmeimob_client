<template lang="html">
  <div class="body">
    <v-layout row wrap>
      <v-flex
        v-for="(card, index) in cards.slice(0, parseInt($route.params.id) + 3)"
        :key="index"
        d-flex xs12 sm4 md3>
        <v-card>
          <v-card-media
            :src="card.src"
            height="200px"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text" v-text="card.title"></span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>bookmark</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>share</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cards: [
        { title: 'Favorite road trips', src: '/images/background.jpg', flex: 6 },
        { title: 'Best airlines', src: '/images/background.jpg', flex: 6 },
        { title: 'Favorite road trips', src: '/images/background.jpg', flex: 6 },
        { title: 'Best airlines', src: '/images/background.jpg', flex: 6 },
        { title: 'Favorite road trips', src: '/images/background.jpg', flex: 6 },
        { title: 'Best airlines', src: '/images/background.jpg', flex: 6 },
        { title: 'Favorite road trips', src: '/images/background.jpg', flex: 6 },
        { title: 'Best airlines', src: '/images/background.jpg', flex: 6 },
        { title: 'Favorite road trips', src: '/images/background.jpg', flex: 6 },
        { title: 'Best airlines', src: '/images/background.jpg', flex: 6 },
        { title: 'Favorite road trips', src: '/images/background.jpg', flex: 6 },
        { title: 'Best airlines', src: '/images/background.jpg', flex: 6 }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
