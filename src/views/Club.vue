<template>
  <v-container>
    <masonry
      :gutter="{ default: '15px', 700: '10px' }"
      :cols="{ default: 4, 1000: 3, 700: 2, 500: 1 }"
    >
      <CoolLightBox
        :items="imagesClub"
        :index="index"
        :useZoomBar="true"
        @close="index = null">
      </CoolLightBox>
      <v-card
        v-for="(image, id) in imagesClub"
        :key="image.id"
        class="customImage mt-2 mb-2"
        color="blue-grey darken-4 customImage"
      >
        <v-img
          @click="index = id"
          :src="image"
          class="customImage"
        >
          <template v-slot:placeholder
                    class="customImage"
          >
            <v-row
              class="fill-height ma-0 customImage"
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

  name: 'Club',
  components: {
    CoolLightBox
  },
  data () {
    return {
      imagesClub: [
        require('../assets/images/club_img/club1.jpg'),
        require('../assets/images/club_img/club2.jpg'),
        require('../assets/images/club_img/club3.jpg'),
        require('../assets/images/club_img/club4.jpg'),
        require('../assets/images/club_img/club5.jpg'),
        require('../assets/images/club_img/club6.jpg'),
        require('../assets/images/club_img/club7.jpg'),
        require('../assets/images/club_img/club8.jpg'),
        require('../assets/images/club_img/club9.jpg'),
        require('../assets/images/club_img/club10.jpg')
      ],
      index: null
    }
  }
}
</script>

<style lang="scss" scoped>
.customImage {
  cursor: pointer;
  &:hover {
    cursor: pointer;
  }
}
</style>
