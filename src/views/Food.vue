<template>
  <v-container>
    <masonry
      :gutter="{ default: '15px', 700: '10px' }"
      :cols="{ default: 4, 1000: 3, 700: 2, 500: 1 }"
    >
      <CoolLightBox
        :items="imagesFood"
        :index="index"
        :useZoomBar="true"
        @close="index = null">
      </CoolLightBox>
      <v-card
        v-for="(image, id) in imagesFood"
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
import Vue from 'vue'
import CoolLightBox from 'vue-cool-lightbox'
import VueMasonry from 'vue-masonry-css'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
Vue.use(VueMasonry)

export default {

  name: 'Food',
  components: {
    CoolLightBox
  },
  data () {
    return {
      imagesFood: [
        require('../assets/images/food_img/food1.jpg'),
        require('../assets/images/food_img/food2.jpg'),
        require('../assets/images/food_img/food3.jpg'),
        require('../assets/images/food_img/food4.jpg'),
        require('../assets/images/food_img/food5.jpg'),
        require('../assets/images/food_img/food6.jpg'),
        require('../assets/images/food_img/food7.jpg'),
        require('../assets/images/food_img/food8.jpg'),
        require('../assets/images/food_img/food9.jpg'),
        require('../assets/images/food_img/food10.jpg'),
        require('../assets/images/food_img/food11.jpg'),
        require('../assets/images/food_img/food12.jpg'),
        require('../assets/images/food_img/food13.jpg'),
        require('../assets/images/food_img/food14.jpg'),
        require('../assets/images/food_img/food15.jpg'),
        require('../assets/images/food_img/food16.jpg'),
        require('../assets/images/food_img/food17.jpg'),
        require('../assets/images/food_img/food18.jpg')
      ],
      index: null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
