<template>
  <v-app>
      <Nav/>
      <v-main class="main-body">
        <router-view/>
      </v-main>
      <v-footer class="footer white--text d-flex justify-start pl-16">
        <p class="footer_p pl-2">2021&copy; Gusev Alex</p>
      </v-footer>
  </v-app>
</template>

<script>
import Nav from '../src/components/Nav'

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

.main-body {
  background-color: $background;
}
.link {
  outline: 1px solid $white;
  border-radius: 3px;

  padding: 20px;

  &:hover {
    color: $font-hover;
  }
}

.footer {
  border-top: 2px solid $font-hover!important;
  background-color: $background!important;
  box-shadow: 0 14px 30px -15px rgba($font-hover, 0.22) inset!important;
}

.footer_p {
  font-size: .6rem;
}

</style>
