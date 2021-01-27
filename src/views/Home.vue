<template>
  <v-main>
    <v-container class="mt-6">
      <v-row class="h1_wrapper">
        <v-col class="col-12">
          <h1 class="text-uppercase">gallery</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          class="d-block col-md-4 col-sm-6 col-xs-12 col-12"
          v-for="(image, idx) in imagesIndex"
          :key="idx">
          <div class="imgWrapper">
            <router-link :to="image.route">
              <v-img
                min-height="310px"
                class="customImg grey darken-4 rounded-lg border_all transform(scale1.1)"
                :alt="image.alt"
                :src="image.path"
              />
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      imagesIndex: [
        {
          name: 'club',
          alt: 'club_photo',
          path: require('../assets/images/index/club.jpg'),
          route: '/club'
        },
        {
          name: 'event',
          alt: 'event_photo',
          path: require('../assets/images/index/event.jpg'),
          route: '/event'
        },
        {
          name: 'food',
          alt: 'food_photo',
          path: require('../assets/images/index/food.jpg'),
          route: '/food'
        },
        {
          name: 'official',
          alt: 'official_photo',
          path: require('../assets/images/index/official.jpg'),
          route: '/official'
        },
        {
          name: 'studio',
          alt: 'studio_photo',
          path: require('../assets/images/index/studio.jpg'),
          route: '/studio'
        },
        {
          name: 'wedding',
          alt: 'wedding_photo',
          path: require('../assets/images/index/wedding.jpg'),
          route: '/wedding'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.h1_wrapper {
  text-align: center;
  color: #FF6D00;
  }
.imgWrapper {
  display: block;
  height: 310px;
}
.customImg {
  display: block;
  transition: .2s all linear;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
