<template>
  <v-container>
    <masonry
      :gutter="{ default: '15px', 700: '10px' }"
      :cols="{ default: 4, 1000: 3, 700: 2, 500: 1 }"
    >
      <CoolLightBox
        :items="imagesOfficial"
        :index="index"
        :useZoomBar="true"
        @close="index = null">
      </CoolLightBox>
      <v-card
        v-for="(image, id) in imagesOfficial"
        :key="image.id"
        class="my-2"
        color="blue-grey darken-4"
      >
        <v-img
          @click="index = id"
          :src="image"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-card>
    </masonry>
  </v-container>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import Vue from 'vue'
import VueMasonry from 'vue-masonry-css'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
Vue.use(VueMasonry)

export default {

  name: 'Official',
  components: {
    CoolLightBox
  },
  data () {
    return {
      imagesOfficial: [
        require('../assets/images/official_img/official1.jpg'),
        require('../assets/images/official_img/official2.jpg'),
        require('../assets/images/official_img/official3.jpg'),
        require('../assets/images/official_img/official4.jpg'),
        require('../assets/images/official_img/official5.jpg'),
        require('../assets/images/official_img/official6.jpg'),
        require('../assets/images/official_img/official7.jpg'),
        require('../assets/images/official_img/official8.jpg'),
        require('../assets/images/official_img/official9.jpg'),
        require('../assets/images/official_img/official10.jpg')
      ],
      index: null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
