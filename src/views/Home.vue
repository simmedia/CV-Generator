<template>
  <v-container class="mx-auto">
    <v-row justify="center">
      <v-col class="col-md-10" align="center">
        <v-row justify="center">
          <v-col class="col-md-5">
            <v-img
              id="homeImage"
              class="align-center"
              src="../assets/images/homeImage.png"
              width="90%"
            />
          </v-col>
          <v-col class="col-md-7">
            <h1 class="display-1 font-weight-bold" style="text-align: left">
              FAST AND EASY <br />
              CIRRICULUM VITAE GENERATOR
            </h1>
            <p class="text-left mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              ipsum cumque possimus pariatur dicta id.
            </p>
            <div class="mt-5 text-left">
              <v-btn
                router
                to="/cvmaker"
                class="mt-5 text-left"
                color="primary"
                dark
                >Create</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 600px) {
  #homeImage {
    width: 70% !important;
    margin: 0 auto;
  }
}
</style>
