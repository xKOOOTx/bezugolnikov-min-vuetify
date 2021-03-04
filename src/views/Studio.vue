<template>
  <v-container>
    <masonry
      :gutter="{ default: '15px', 700: '10px' }"
      :cols="{ default: 4, 1000: 3, 700: 2, 500: 1 }"
    >
      <CoolLightBox
        :items="imagesStudio"
        :index="index"
        :useZoomBar="true"
        @close="index = null">
      </CoolLightBox>
      <v-card
        v-for="(image, id) in imagesStudio"
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

  name: 'Studio',
  components: {
    CoolLightBox
  },
  data () {
    return {
      imagesStudio: [
        require('../assets/images/studio_img/studio1.jpg'),
        require('../assets/images/studio_img/studio2.jpg'),
        require('../assets/images/studio_img/studio3.jpg'),
        require('../assets/images/studio_img/studio4.jpg'),
        require('../assets/images/studio_img/studio5.jpg'),
        require('../assets/images/studio_img/studio6.jpg'),
        require('../assets/images/studio_img/studio7.jpg'),
        require('../assets/images/studio_img/studio8.jpg'),
        require('../assets/images/studio_img/studio9.jpg'),
        require('../assets/images/studio_img/studio10.jpg'),
        require('../assets/images/studio_img/studio11.jpg')
      ],
      index: null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
