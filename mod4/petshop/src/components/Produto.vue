<template>
  <v-card style="margin-bottom: 20px" elevation="5">
    <router-link :to="{ path: `${produto.id}` }" append>
      <v-img height="250" :src="produto.foto" :alt="produto.id"></v-img>
    </router-link>
    <div class="pa-4">
      <v-card-title>
        <div>{{ produto.nome }}</div>
      </v-card-title>
      <v-card-subtitle class="d-flex flex-row justify-end">
        <div
          :class="produto.desconto !== undefined ? ['desconto', 'mr-2'] : ''"
        >
          {{ produto.preco | grana }}
        </div>
        <div>{{ produto.desconto | grana }}</div>
      </v-card-subtitle>
      <v-card-text :class="classes">
        {{ produto.descricao }}
      </v-card-text>
      <v-card-actions>
        <v-btn block class="primary full width" @click="addProduto(produto)">
          Comprar
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  props: ['produto', 'classes'],
  methods: {
    comprar(nome, preco) {
      const formatedPrice = this.formatNumber(preco);
      alert(`Produto: ${nome}\nPreço: ${formatedPrice}`);
    },
    formatNumber(value) {
      if (typeof value !== 'number') {
        return value;
      }

      value = value.toFixed(2);
      return `R$ ${value}`;
    },
  },
  computed: {
    ...mapGetters(['carrinho']),
  },
  methods: {
    ...mapActions(['addProduto']),
  },
};
</script>

<style scoped>
.descricao-resumida {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.desconto {
  text-decoration: line-through;
}
</style>
