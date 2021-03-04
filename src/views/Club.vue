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
import CoolLightBox from 'vue-cool-lightbox'
import Vue from 'vue'
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
        require('../assets/images/club_img/club10.jpg'),
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
        require('../assets/images/4k/pexels-vlad-alexandru-popa-1402787.jpg'),
        require('../assets/images/2k/arthur-rachbauer-vYyHLDPKWd4-unsplash.jpg'),
        require('../assets/images/2k/cosmic-timetraveler-BzqaeA-hkkc-unsplash.jpg'),
        require('../assets/images/2k/jonathan-bean-sbZU1j31ggE-unsplash.jpg'),
        require('../assets/images/2k/mar-bustos-ARVFsI-32Uk-unsplash.jpg'),
        require('../assets/images/2k/mar-bustos-HsEz1XZ1TO8-unsplash.jpg'),
        require('../assets/images/2k/mika-luoma-jc0rtJtBC1k-unsplash.jpg')
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
