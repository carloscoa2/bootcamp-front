<template>
  <v-app>
    <v-app-bar app color="purple" dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Vuetity Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <router-link
        style="text-decoration: none"
        to="/produtos"
        class="white--text mx-3"
        >Loja</router-link
      >
      <router-link
        style="text-decoration: none"
        to="/petshop"
        class="white--text mx-3"
        >Petshop</router-link
      >
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({}),
};
</script>
