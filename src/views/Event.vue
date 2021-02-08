<template>
  <v-container>
    <masonry
      :gutter="{ default: '15px', 700: '10px' }"
      :cols="{ default: 4, 1000: 3, 700: 2, 500: 1 }"
    >
      <CoolLightBox
        :items="imagesEvent"
        :index="index"
        :useZoomBar="true"
        @close="index = null">
      </CoolLightBox>
      <v-card
        v-for="(image, id) in imagesEvent"
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

  name: 'Event',
  components: {
    CoolLightBox
  },
  data () {
    return {
      imagesEvent: [
        require('../assets/images/event_img/event1.jpg'),
        require('../assets/images/event_img/event2.jpg'),
        require('../assets/images/event_img/event3.jpg'),
        require('../assets/images/event_img/event4.jpg'),
        require('../assets/images/event_img/event5.jpg'),
        require('../assets/images/event_img/event6.jpg'),
        require('../assets/images/event_img/event7.jpg'),
        require('../assets/images/event_img/event8.jpg'),
        require('../assets/images/event_img/event9.jpg'),
        require('../assets/images/event_img/event10.jpg')
      ],
      index: null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
