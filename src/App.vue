<template>
  <v-app>
    <Nav/>
    <v-main class="blue-grey darken-4">
      <router-view/>
    </v-main>
    <v-footer class="blue-grey darken-4 white--text d-flex justify-start pl-16">
      <p class="footer_p pl-2">2021&copy; Gusev Alex</p>
    </v-footer>
  </v-app>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  name: 'App',

  components: {
    Nav
  },

  data: () => ({
    //
  })
}
</script>

<style lang="scss">
@import "src/assets/style/style";
@import "src/assets/style/variables";

.link {
  outline: 1px solid $white;
  border-radius: 3px;

  padding: 20px;

  &:hover {
    color: orangered;
  }
}

.footer_p {
  font-size: .6rem;
}

</style>
