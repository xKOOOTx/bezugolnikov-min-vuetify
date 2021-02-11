<template>
  <nav class="nav">
    <div class="header">
      <div class="nav__link_left">
        <router-link
          to="/"
          class="nav__link_left-logo">
          mikhail <span>bezugolnikov</span>
        </router-link>
      </div>
      <v-spacer />
      <div class="nav__link_right">
        <router-link
          to="/contacts"
        >
          <span>Contacts</span>
          <v-icon class="nav__btn_icon white--text">alternate_email</v-icon>
        </router-link>
        <router-link
          to="/contacts"
        >
          <span>Contacts</span>
          <v-icon class="nav__btn_icon white--text">perm_identity</v-icon>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data: () => ({
    drawer: false,
    group: null
  }),
  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/style";
@import "src/assets/style/variables";

.header {
  background-color: $background!important;
  border-bottom: 2px solid $font-hover!important;
  box-shadow: 0 14px 7px -10px rgba($font-hover, 0.22)!important;

  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav {
  &__link {
    &_left {
      &-logo {
        display: inline-block;
        padding: .3rem;

        text-transform: uppercase;

        font-size: 1.5rem;
        font-weight: 300;
        color: lighten($font-color, 10%);
        transition: .2s color linear;
        flex: 1;
        &:hover {
          color: $font-hover;
          text-decoration: none !important;
        }
        & span {
          font-weight: bold;
        }
      }
    }
    &_right {
      justify-content: end;
      text-align: left;
      flex: .5;
    }
  }
  &__btn,
  &__btn .nav__btn_icon{
    transition: .2s color linear;
    &_span {
      color: $white;
      transition: .2s color linear;
    }
    &:hover span,
    &:hover .nav__btn_icon{
      color: $font-hover!important;
    }
    &__btn {
      &_icon {
        color: $white;
      }
    }
  }
}
.btn {

}
</style>
