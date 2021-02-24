<template>
  <v-main>
    <v-container class="">
      <v-row class="h1_wrapper">
        <v-col class="col-12">
          <h1 class="gallery-header">Freezing time...</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(image, id) in imagesIndex"
          :key="id"
          cols="4"
        >
          <div class="imgWrapper">
            <router-link :to="image.route" >
              <v-img
                class="customImg col-3"
                min-height="260px"
                :alt="image.alt"
                :src="image.path"
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
      images: [
        require('../assets/images/index/club.jpg'),
        require('../assets/images/index/event.jpg'),
        require('../assets/images/index/food.jpg'),
        require('../assets/images/index/official.jpg'),
        require('../assets/images/index/studio.jpg'),
        require('../assets/images/index/wedding.jpg')
      ],
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
  },
  methods: {
    displayBlock () {

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
  color: lighten($font-color, 10%);

  padding-top: 1rem;
}
.h1_wrapper {
  text-align: center;

  }
.imgWrapper {
  overflow: hidden;
}
.customImg {
  position: relative;
  transition: all .3s linear;
  filter: blur(.8px);

  &:hover {
    transform: scale(1.1);
    transition-duration: .3s;
    filter: none;
  }
}
.img__content {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  width: 100%;
  height: 100%;
  color: $black;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 1.4rem;
  text-align: center;
}

.active {
  display: flex;
}
</style>
