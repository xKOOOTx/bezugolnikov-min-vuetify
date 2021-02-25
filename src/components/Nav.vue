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
      <div class="nav__link_right">
        <router-link
          to="/contacts"
          class="nav__buttons"
        >
          <span>Contacts</span>
          <v-icon class="nav__btn_icon white--text">alternate_email</v-icon>
        </router-link>
        <router-link
          to="/about"
          class="nav__buttons"
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
  padding: 0 1rem;
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
        color: lighten($font-color, 10%);
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
      justify-content: end;
      text-align: left;
    }
  }
  &__btn,
  &__btn .nav__btn_icon{
    transition: .2s color linear;
    &_span {
      color: $white;
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
    border: 1px solid $white;
    border-radius: 5px;

    color: $white;
    font-size: .8rem;

    transition: color .2s linear, border-color .2s linear;

    & span {
      padding-right: 10px;
    }

    &:hover,
    &:hover .nav__btn_icon{
      color: $font-hover!important;
      border-color: $font-hover;
    }
  }
}
</style>
