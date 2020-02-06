<template>
  <v-stepper v-model="el">
    <v-stepper-header>
      <v-stepper-step :complete="el > 1" step="1" editable
        >Step 1</v-stepper-step
      >

      <v-divider></v-divider>

      <v-stepper-step :complete="el > 2" step="2" editable
        >Step 2</v-stepper-step
      >

      <v-divider></v-divider>

      <v-stepper-step :complete="el > 3" step="3" editable
        >Step 3</v-stepper-step
      >

      <v-divider></v-divider>

      <v-stepper-step :complete="el > 4" step="4" editable
        >Step 4</v-stepper-step
      >
    </v-stepper-header>
    <!-- STEPPER CONTENT -->

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-12" height="200px">
          <input type="text" v-model="steps.name" />
        </v-card>

        <v-btn color="primary" @click="el = 2">
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-card class="mb-12" height="200px">
          <input type="number" v-model="steps.age" />
        </v-card>

        <v-btn color="primary" @click="el = 3">
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card class="mb-4" height="100px">
          <v-row justify="center">
            <v-col xs="12" sm="12">
              <v-btn raised class="primary" @click="onPickFile"
                >Upload image</v-btn
              >
              <input
                @change="uploadImage"
                type="file"
                style="display:none"
                ref="fileInput"
                accept="image/*"
              />
            </v-col>

            <v-col xs="12" sm="12">
              <v-img height="200" :src="steps.previewImage"></v-img>
            </v-col>
          </v-row>
        </v-card>

        <v-btn color="primary" @click="el = 4">
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="4">
        <v-card class="mb-12" height="200px">
          Done!
        </v-card>

        <v-btn color="primary" @click="finishForm()">
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      el: 1,
      steps: {
        name: "",
        age: "",
        previewImage: ""
      }
    };
  },

  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    }
  },

  methods: {
    finishForm() {
      this.$store.commit("setCV", {
        name: this.steps.name,
        age: this.steps.age,
        previewImage: this.steps.previewImage
      });
      localStorage.setItem("cv", JSON.stringify(this.steps));
      this.$router.push("/about");
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      console.log(image);

      reader.readAsDataURL(image);
      reader.onload = e => {
        this.steps.previewImage = e.target.result;
        console.log(this.steps.previewImage);
      };
    }
    // onFilePicked(event) {
    //   const files = event.target.files;
    //   let filename = files[0];
    //   const fileReader = new FileReader();
    //   fileReader.addEventListener("load", () => {
    //     this.imageUrl = fileReader.result;
    //   });
    //   console.log(filename);
    //   fileReader.readAsDataURL(filename);
    //   this.image = filename;
    // }
  }
};
</script>

<style></style>
