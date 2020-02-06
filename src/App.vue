<template>
  <v-app>
    <Header />

    <v-content>
      <v-container style="background: white" class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </v-col>
        </v-row>
      </v-container>
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",

  components: {
    Header,
    Footer
  },

  data: () => ({
    items: [
      { title: "Home", icon: "mdi-home" },
      { title: "About", icon: "mdi-note" }
    ]
  }),
  computed: {},
  methods: {}
};
</script>

<style lang="scss">

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
