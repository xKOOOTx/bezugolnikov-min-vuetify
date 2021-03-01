<template>
  <v-main>
    <v-container class="center">
      <v-row class="h1_wrapper">
        <v-col class="col-12">
          <h1 class="gallery-header">Freezing moment...</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(image, id) in imagesIndex"
          :key="id"
          cols="4"
          class="col-xl-3 col-lg-4 col-md-4 col-sm-5 col-12"
        >
          <div class="imgWrapper">
            <v-hover v-slot="{ hover }">
              <router-link :to="image.route" >
              <v-img
                class="customImg col-3"
                min-height="260px"
                :alt="image.alt"
                :src="image.path"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-out-linear-in v-card--reveal display-3"
                    style="height: 100%;"
                  >
                    {{ image.name }}
                  </div>
                </v-expand-transition>
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
            </router-link>
            </v-hover>
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
  @import '../assets/style/variables';

.gallery-header {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 3rem;
  font-weight: 300;
  color: $nav-font-color;
}
.h1_wrapper {
  text-align: center;

  }
.imgWrapper {
  overflow: hidden;
}
.customImg {
  position: relative;
}

.row {
  justify-content: center;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  left: 0;
  justify-content: center;
  opacity: .7;
  position: absolute;
  width: 100%;
  background: $font-hover;
  color: $font-color;
  text-transform: capitalize;
}
</style>
