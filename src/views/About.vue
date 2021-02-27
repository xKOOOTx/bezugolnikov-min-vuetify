<template>
  <v-responsive
    class="$responsive-transition"
  >
    <v-main class="pl-16 pr-16 pt-16">
      <v-row class="pt-16 white--text">
        <div class="card__wrapper">
          <v-col class="col-10 d-flex border">
            <v-col class="col-12 pt-16 d-flex">
              <v-row>
                <h1>Hey! My name is Mikhail Bezugolnikov.</h1>
              </v-row>
              <v-row>
                <h2>I'm a professional photographer!</h2>
              </v-row>
              <v-row>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam at, commodi doloremque dolores excepturi itaque iure
                  laudantium magnam quia quo repellendus repudiandae sint sunt?
                  Consectetur debitis dolore doloremque excepturi illum laboriosam
                  molestias praesentium quidem, veritatis!
                  A accusantium aliquam aperiam blanditiis dicta dolores ea,
                  enim esse incidunt iure mollitia neque non pariatur perferendis quae quasi saepe velit,
                  voluptate. Amet laboriosam omnis sint sunt vel? Ab atque autem consequuntur error et
                  explicabo incidunt iste iure iusto labore laudantium minima modi molestias
                  mollitia non officia quisquam quo, reprehenderit sequi similique sit soluta sunt, suscipit velit, vero!
                  Aliquam asperiores consectetur, deleniti doloremque fuga praesentium quisquam quod totam vel.
                  Corporis nisi, quidem? Aperiam dolores inventore labore obcaecati pariatur quisquam quo saepe voluptate!
                  Assumenda blanditiis corporis eligendi eos ipsam, laborum magnam officiis saepe tempore velit.
                  Ab atque consequatur cumque cupiditate dolor, dolore esse facere natus necessitatibus
                  numquam optio recusandae repellat reprehenderit, similique suscipit ullam vel vitae!
                  Atque doloribus ducimus eligendi magni nostrum, nulla odit quam quas rerum!
                  Delectus ipsa optio quia similique. Amet facilis harum iusto libero,
                  pariatur perspiciatis quasi unde velit vero voluptates? Atque autem cupiditate
                  delectus et ex fugit molestias repellendus soluta vel voluptate.
                  Consectetur debitis fugit, nam nemo perspiciatis placeat quasi quos rem!</p>
              </v-row>
              <v-img
                min-height="auto"
                width="500px"
                class="align-center d-block ml-16 justify-end"
                src="../assets/images/main_phototest.png"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-col>
          <v-col class="col-2">
            <v-spacer />
          </v-col>
        </div>
      </v-row>
      <v-row class="pl-15 pr-15 pt-16 white--text">
        <v-col class="col-2">
          <v-spacer />
        </v-col>
        <v-col class="col-5">
          <v-img
            min-height="auto"
            width="500px"
            height="300px"
            class="align-center ml-16"
            src="../assets/images/main_phototest.png"
          />
        </v-col>
        <v-col class="col-5 pt-16">
          <v-row>
            <h1>Hey! My name is Mikhail Bezugolnikov.</h1>
          </v-row>
          <v-row>
            <h2>I'm a professional photographer!</h2>
          </v-row>
          <v-row>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquam at, commodi doloremque dolores excepturi itaque iure
              laudantium magnam quia quo repellendus repudiandae sint sunt?
              Consectetur debitis dolore doloremque excepturi illum laboriosam
              molestias praesentium quidem, veritatis!
              A accusantium aliquam aperiam blanditiis dicta dolores ea,
              enim esse incidunt iure mollitia neque non pariatur perferendis quae quasi saepe velit,
              voluptate. Amet laboriosam omnis sint sunt vel? Ab atque autem consequuntur error et
              explicabo incidunt iste iure iusto labore laudantium minima modi molestias
              mollitia non officia quisquam quo, reprehenderit sequi similique sit soluta sunt, suscipit velit, vero!
              Aliquam asperiores consectetur, deleniti doloremque fuga praesentium quisquam quod totam vel.
              Corporis nisi, quidem? Aperiam dolores inventore labore obcaecati pariatur quisquam quo saepe voluptate!
              Assumenda blanditiis corporis eligendi eos ipsam, laborum magnam officiis saepe tempore velit.
              Ab atque consequatur cumque cupiditate dolor, dolore esse facere natus necessitatibus
              numquam optio recusandae repellat reprehenderit, similique suscipit ullam vel vitae!
              Atque doloribus ducimus eligendi magni nostrum, nulla odit quam quas rerum!
              Delectus ipsa optio quia similique. Amet facilis harum iusto libero,
              pariatur perspiciatis quasi unde velit vero voluptates? Atque autem cupiditate
              delectus et ex fugit molestias repellendus soluta vel voluptate.
              Consectetur debitis fugit, nam nemo perspiciatis placeat quasi quos rem!</p>
          </v-row>
        </v-col>
      </v-row>
    </v-main>
  </v-responsive>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.card__wrapper {
  display: flex;

}
</style>
