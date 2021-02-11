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
        require('../assets/images/event_img/event10.jpg'),
        require('../assets/images/4k/pexels-chevanon-photography-325044.jpg'),
        require('../assets/images/4k/pexels-cátia-matos-1072179.jpg'),
        require('../assets/images/4k/pexels-eberhard-grossgasteiger-1287145.jpg'),
        require('../assets/images/4k/pexels-eberhard-grossgasteiger-1367192.jpg'),
        require('../assets/images/4k/pexels-faaiq-ackmerd-1025469.jpg'),
        require('../assets/images/4k/pexels-francesco-ungaro-2835436.jpg'),
        require('../assets/images/4k/pexels-frank-cone-2258536.jpg'),
        require('../assets/images/4k/pexels-giorgio-de-angelis-1413412.jpg'),
        require('../assets/images/4k/pexels-irina-iriser-1366957.jpg'),
        require('../assets/images/4k/pexels-jeremy-bishop-6212576.jpg'),
        require('../assets/images/4k/pexels-mohamed-almari-1485894.jpg'),
        require('../assets/images/4k/pexels-pixabay-36717.jpg'),
        require('../assets/images/4k/pexels-vlad-alexandru-popa-1402787.jpg')
      ],
      index: null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
