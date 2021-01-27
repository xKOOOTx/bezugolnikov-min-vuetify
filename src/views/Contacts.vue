<template>
  <v-main class="contacts pt-16">
    <form class="contacts__form centerForm center d-flex flex-column white--text">
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
@import "src/assets/style/variables";
.contacts {
  &__form {
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
</style>
