<template>
  <v-container>
    <masonry
      :gutter="{ default: '15px', 700: '10px' }"
      :cols="{ default: 4, 1000: 3, 700: 2, 500: 1 }"
    >
      <CoolLightBox
        :items="imagesWedding"
        :index="index"
        :useZoomBar="true"
        @close="index = null">
      </CoolLightBox>
      <v-card
        v-for="(image, id) in imagesWedding"
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

  name: 'Wedding',
  components: {
    CoolLightBox
  },
  data () {
    return {
      imagesWedding: [
        require('../assets/images/wedding_img/wedding1.jpg'),
        require('../assets/images/wedding_img/wedding2.jpg'),
        require('../assets/images/wedding_img/wedding3.jpg'),
        require('../assets/images/wedding_img/wedding4.jpg'),
        require('../assets/images/wedding_img/wedding5.jpg'),
        require('../assets/images/wedding_img/wedding6.jpg'),
        require('../assets/images/wedding_img/wedding7.jpg'),
        require('../assets/images/wedding_img/wedding8.jpg'),
        require('../assets/images/wedding_img/wedding9.jpg'),
        require('../assets/images/wedding_img/wedding11.jpg'),
        require('../assets/images/wedding_img/wedding12.jpg'),
        require('../assets/images/wedding_img/wedding13.jpg'),
        require('../assets/images/wedding_img/wedding14.jpg'),
        require('../assets/images/wedding_img/wedding15.jpg'),
        require('../assets/images/wedding_img/wedding16.jpg'),
        require('../assets/images/wedding_img/wedding17.jpg'),
        require('../assets/images/wedding_img/wedding18.jpg'),
        require('../assets/images/wedding_img/wedding19.jpg'),
        require('../assets/images/wedding_img/wedding20.jpg'),
        require('../assets/images/wedding_img/wedding21.jpg'),
        require('../assets/images/wedding_img/wedding22.jpg'),
        require('../assets/images/wedding_img/wedding23.jpg')
      ],
      index: null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
