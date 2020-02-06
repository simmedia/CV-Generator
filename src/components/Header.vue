<template>
  <div>
    <v-navigation-drawer temporary v-model="drawer" app>
      <v-list dense>
        <v-list-item
          color="indigo"
          router
          :to="item.link"
          v-for="item in menuItems"
          :key="item.title"
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat app light>
      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer"
          ><span class="headline">CV Generator</span></router-link
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        
          <router-link v-for="item in menuItems" :key="item.title" class="navLink" :to="item.link">{{item.title}}</router-link>
          <!-- <router-link class="navLink" to="/about">About</router-link> -->
          <!-- <router-link class="navLink" to="/cvmaker">Create</router-link> -->
    
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  }),
  computed: {
    menuItems() {
      let menuItems = [
        {title: "Home", link: "/" },
        {title: "About", link: "/about" },
        {title: "Make CV", link: "/cvmaker" }
      ];
      return menuItems;
    }
  }
};
</script>

<style lang="scss" scoped>
 .navLink {
   text-decoration: none;
   padding: 20px 30px;
   font-weight: 500;
   text-align: center !important;
 }
</style>
