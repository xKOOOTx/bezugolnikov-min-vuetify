<template>
  <nav class="nav">
    <div class="header center">
      <div class="nav__link_left">
        <router-link
          to="/"
          class="nav__link_left-logo">
          mikhail <span>bezugolnikov</span>
        </router-link>
      </div>
      <div class="center">
        <span class="strip"></span>
      </div>
      <div class="nav__link_right">
        <v-tab>
          <router-link
            to="/contacts"
            class="nav__buttons"
          >
            <span>Contacts</span>
          </router-link>
        </v-tab>
        <v-tab>
          <router-link
            to="/about"
            class="nav__buttons"
          >
            <span>About</span>
          </router-link>
        </v-tab>
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
  justify-content: space-between;
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
        color: $font-color;
        transition: .2s color linear;
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
      display: flex;
      justify-content: end;
      text-align: left;
    }
  }
  &__btn,
  &__btn .nav__btn_icon{
    transition: .2s color linear;
    &_span {
      color: $font-color;
      transition: .2s color linear;
    }
    &__btn {
      &_icon {
        color: $white;
      }
    }
  }
  &__btn {
    &_icon {
      font-size: 1.2rem!important;
    }
  }

  &__buttons {
    margin: 5px;
    padding: .5rem 1rem;

    color: $nav-font-color;
    font-size: .8rem;

    transition: color .2s linear, border-color .2s linear;

    &:hover,
    &:hover .nav__btn_icon{
      color: $font-hover!important;
      border-color: $font-hover;
    }
  }
}
</style>
