<template>
  <v-main class="contacts pt-16">
    <p class="notification centerForm center d-flex">
      Sorry. Looks like feedback form is broken...
      My web-developer has already been notified of this issue.
      And he's already trying to fix it.
      But you still can contact me with
    </p>
    <a href="https://wa.me/+79998198079"
       target="_blank"
       class="whatsApp center"
    >
      WhatsApp
      <v-icon
        class="whatsApp__icon"
      >
        mdi-whatsapp
      </v-icon>
    </a>
    <form class="contacts__form centerForm center white--text">
      <input type="text" placeholder="Your name">
      <input type="tel" placeholder="Your phone number">
      <input type="email" placeholder="Your email">
      <textarea class="text-area" placeholder="Your message" />
      <v-btn
        type="submit"
        class="mt-3 blue-grey darken-3 customBtn"
      >
        <span class="btn-span">
        Submit
        </span>
      </v-btn>
    </form>
  </v-main>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/style";
@import "src/assets/style/mixins";
@import "src/assets/style/variables";
.contacts {
  margin-top: 40%;

  text-align: center;
  &__form {
    display: none;
    //display: flex;
    flex-direction: column;
    transform: rotate(180deg);
    margin-top: 50px;

    & input {
      border: 1px solid orange;
      margin-bottom: 2rem;
      padding: 1rem;
    }

    & input,
    & textarea {
      padding: 1rem;
      border-radius: 10px;

      &:focus,
      &:active {
        border: 1px solid orange;
        outline: 1px solid orange;
      }

      &::placeholder {
        color: $white;
      }
    }
  }
}
.text-area {
  border: 1px solid orange;
  resize: vertical;
}
.centerForm {
  padding-left: calc(50% - 300px);
  padding-right: calc(50% - 300px);

  @include breakpoint($mobile-bp) {
    margin: 0 1rem 4rem;
  }
}
.customBtn {
  transition: .2s all linear;
  &:hover .btn-span {
    color: orange;
  }
  &:active .btn-span {
    color: black;
  }
}
.btn-span {
  color: white;

}

.v-application p {
  margin-bottom: 40px;
}
.notification {
  text-align: left;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1.4rem;
  color: $nav-font-color;
}
.whatsApp {
  margin-top: 1rem;

  text-align: center;
  border: 1px solid $nav-font-color;
  border-radius: 1rem;
  padding: 1rem;

  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1.2rem;
  color: $nav-font-color;
  transition: all .2s linear;

  &__icon {
    margin: .5rem;
    color: $nav-font-color;
  }

  &:hover {
    box-shadow: inset 0 0 10px rgba($font-hover,0.5);
  }

  &:hover,
  &:hover .whatsApp__icon {
    color: $font-hover;
    border-color: $font-hover;
  }
}
</style>
