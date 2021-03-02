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
          <v-tab>
            <router-link
              to="/clients"
              class="nav__buttons"
            >
              <span>Clients</span>
            </router-link>
          </v-tab>
      </div>
      <button
        class="burger"
        type="button"
        id="sidebarToggle"
      >
        <span>Открыть навигацию</span>
      </button>
    </div>
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
@import "src/assets/style/mixins";
@import "src/assets/style/burger";

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
      @include breakpoint($mobile-bp) {
        max-width: 15rem;
        padding-left: 2rem;
      }
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

      @include breakpoint($mobile-bp) {
        display: none;
      }
    }
    &_burger {
      display: none;

      @include breakpoint($mobile-bp) {
        display: flex;
      }
    }
  }

  &__buttons {
    margin: 5px;
    padding: .5rem 1rem;

    color: $nav-font-color;
    font-size: .8rem;

    transition: color .2s linear, border-color .2s linear;

    &:hover {
      color: $font-hover!important;
      border-color: $font-hover;
    }
  }
}
//.sidebar {
//  position: absolute;
//  //display: none;
//  overflow-y: hidden;
//  top: 4.9%;
//  right: 0;
//  height: 83vh;
//  z-index: 55;
//  background-color: $white;
//  width: 100%;
//
//  &__link {
//    margin-top: 50px;
//
//    &_buttons {
//      margin: 5px;
//      padding: 3rem 1rem;
//
//      color: $nav-font-color;
//      font-size: .8rem;
//    }
//      &_right {
//        margin-top: 10%;
//        & span {
//          font-size: 1.2rem;
//        }
//    }
//  }
//}
</style>
