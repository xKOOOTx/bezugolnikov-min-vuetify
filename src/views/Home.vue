<template>
  <v-main>
    <v-container class="">
      <v-row class="h1_wrapper">
        <v-col class="col-12">
          <h1 class="gallery-header">Enjoy your choice</h1>
        </v-col>
      </v-row>
      <v-row>
        <div class="imgWrapper"
             v-for="(image, id) in imagesIndex"
             :key="id"
             >
            <router-link :to="image.route" >
              <v-img
                class="customImg"
                min-height="250px"
                :alt="image.alt"
                :src="image.path"
                aspect-ratio="2"
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
      ] 
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
  font-family: 'Dancing Script', cursive;
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
  transition: all .3s ease-in;
  &:hover {
    transform: scale(1.1);
    transition-duration: .3s;
  }
}
</style>
