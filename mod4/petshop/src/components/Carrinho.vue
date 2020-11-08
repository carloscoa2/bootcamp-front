<template>
  <div>
    <h1>Carrinho: {{ carrinho }}</h1>
    <v-btn @click="decrement">Decrement</v-btn>
    <v-btn @click="increment">Increment</v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Carrinho',
  computed: {
    ...mapGetters(['carrinho']),
  },
  methods: {
    ...mapActions(['decrement', 'increment']),
  },
};
</script>

<style></style>
