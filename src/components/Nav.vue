<template>
  <nav class="nav">
    <v-toolbar class="blue-grey darken-4 justify-space-around text-center">
      <v-row class="align-center">
        <v-col class="col-2">
          <v-btn depressed large
                 :to="'/about'"
                 class="align-center nav__btn blue-grey darken-4">
            <span class="nav__btn_span pr-3">About</span>
            <v-icon class="nav__btn_icon">perm_identity</v-icon>
          </v-btn>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="col-8">
          <v-toolbar-title>
            <router-link
              to="/"
              class="nav__link">
              mikhail bezugolnikov
            </router-link>
          </v-toolbar-title>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="col-2">
          <v-btn
            depressed
            :to="'/contacts'"
            class="nav__btn blue-grey darken-4">
            <v-icon class="nav__btn_icon">alternate_email</v-icon>
            <span class="nav__btn_span pl-3">Contacts</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/style";
@import "src/assets/style/variables";

.nav {
  &__link {
    display: block;
    padding: 1.5rem;

    text-transform: uppercase;

    color: $white;
    transition: .2s color linear;

    &:hover {
      color: orangered;
      text-decoration: none!important;
    }
  }
  &__btn {
    &_span {
      color: $white;
      transition: .2s color linear;
    }
    &:hover span,
    &:hover icon{
      color: orangered;
    }
    &_icon {
      color: $white;
    }
  }
}
.btn {

}
</style>
