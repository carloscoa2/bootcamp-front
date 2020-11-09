<template>
  <div>
    <v-menu
      transition="slide-x-transition"
      bottom
      right
      :close-on-content-click="false"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          style="float:right;"
          fab
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon dark>
            mdi-cart-outline
          </v-icon>
        </v-btn>
        <v-badge
          v-show="quantItens > 0"
          style="float:right;"
          color="green"
          :content="quantItens"
        >
        </v-badge>
      </template>

      <!-- Sem produto -->
      <v-list v-if="quantItens === 0">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Nenhum produto no carrinho</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!-- Com produto -->
      <v-list v-else>
        <v-list-item v-for="(produto, index) in carrinho" :key="index">
          <v-list-item-avatar>
            <img :src="produto.foto" :alt="produto.nome" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <span>{{ produto.nome }}</span>
              <!-- Preço com Desconto -->
              <span v-if="produto.desconto !== undefined">
                ({{ produto.desconto | grana }})</span
              >
              <!-- Preço sem Desconto -->
              <span v-else> ({{ produto.preco | grana }})</span>
              <!-- Fim Preço -->
              <button @click="removerProduto(produto)" style="float:right;">
                <v-icon>mdi-delete</v-icon>
              </button>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-title>
            <span>Total:</span>
            <span style="float:right;">{{ precoTotal | grana }}</span>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Carrinho',
  computed: {
    ...mapGetters(['carrinho', 'quantItens', 'precoTotal', 'alert']),
  },
  methods: {
    ...mapActions(['addProduto', 'removerProduto']),
  },
};
</script>

<style></style>
