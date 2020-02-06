<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-text class="py-4 secondary white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["fab fa-twitter", "fab fa-linkedin", "fab fa-instagram"]
  })
};
</script>
