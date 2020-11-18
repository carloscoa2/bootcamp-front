<template>
  <div>
    <v-container>
      <v-alert type="success" :value="alert"> Produto adicionado </v-alert>
      <v-row justify="end">
        <v-col>
          <h1>Lista de Produtos</h1>
        </v-col>
        <v-col>
          <!--  -->
          <Carrinho />
          <!--  -->
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-col
        v-for="(produto, index) in produtos"
        :key="index"
        md="4"
        sm="6"
        xs="12"
      >
        <Produto :produto="produto" classes="descricao-resumida" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Produto from "@/components/Produto";
import Carrinho from "@/components/Carrinho";
import axios from "axios";

import { mapGetters } from "vuex";

export default {
  components: {
    Produto,
    Carrinho,
  },
  data() {
    return {
      produtos: [],
    };
  },
  async created() {
    this.produtos = await this.buscarProdutos();
  },
  methods: {
    async buscarProdutos() {
      const { data } = await axios.get("http://localhost:3000/produtos");
      return data;
    },
  },
  computed: {
    ...mapGetters(["carrinho", "quantItens", "alert"]),
  },
};
</script>

<style></style>
