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
        <v-tabs
          slider-color="#d7ba7e"
          v-for="(route, idx) in routes"
          :key="idx"
          hide-slider
          fixed-tabs
          height="35px"
          class="align-center nav__tabs"
          background-color="#1b1b1b"
        >
          <router-link
            class="align-self-center"
            :to= route.path
            :class= route.class
          >
            <span>{{ route.name }}</span>
          </router-link>
        </v-tabs>
        <v-app-bar
          color="#1b1b1b"
          dark
          max-height="20px"
          max-width="20px"
          flat
          class="burger align-center justify-center"
        >
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer
          v-model="drawer"
          absolute
          right
          color="#1b1b1b"
        >
          <v-list
            nav
          >
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
              v-for="(route, idx) in routes"
              :key="idx"
              class="burger__menu"
            >
              <router-link
                :to=route.path
                :class=route.mobileClass
              >
                {{ route.name }}
              </router-link>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Nav',
  data: () => ({
    routes: [
      {
        name: 'Contacts',
        path: '/contacts',
        class: 'nav__buttons',
        mobileClass: 'nav__buttons-mobile'
      },
      {
        name: 'About',
        path: '/about',
        class: 'nav__buttons',
        mobileClass: 'nav__buttons-mobile'
      },
      {
        name: 'Clients',
        path: '/clients',
        class: 'nav__buttons',
        mobileClass: 'nav__buttons-mobile'
      }
    ],
    drawer: false,
    group: null
  })
}
</script>

<style lang="scss" scoped>
@import "../assets/style/mixins";
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
      @include breakpoint($mobile-bp) {
        max-width: 15rem;
        padding-left: .5rem;
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

        @include breakpoint($wideTablet-bp) {
          font-size: 1.2rem;
        }
        @include breakpoint($tablet-bp) {
          font-size: 1rem;
        }
      }
    }
    &_right {
      display: flex;
      justify-content: end;
      align-items: center;
      text-align: left;
    }
  }
  &__tabs {
    display: flex;

    @include breakpoint($tablet-bp) {
      display: none;
    }
  }
  &__buttons {
    margin: 5px;
    padding: .5rem 1rem;
    position: relative;

    color: $nav-font-color;
    font-size: 1rem;

    transition: color .2s linear, border-color .2s linear;

    &:hover {
      color: $font-hover!important;
      border-color: $font-hover;
    }

    &-mobile {
      margin: 1rem 0;
      color: $nav-font-color;
    }
  }
}
.v-tab {
  background-color: $background!important;
  &:before {
    background-color: $font-hover;
  }
  &:hover .nav__buttons {
    color: $font-hover!important;
  }
}
.v-application .primary--text {
  color: $font-hover!important;
  caret-color: red!important;
}
.burger {
  display: none;

  @include breakpoint($tablet-bp) {
    display: flex;
  }
  &__menu {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 50% 0;

    font-size: 1.6rem;
  }
}
</style>
