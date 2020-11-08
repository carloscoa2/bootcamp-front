<template>
  <div>
    <h1>Lista de Produtos</h1>
    <v-row>
      <v-col
        v-for="(prod, index) in produtos"
        :key="index"
        md="4"
        sm="6"
        xs="12"
      >
        <Produto :produto="prod" classes="descricao-resumida" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Produto from "@/components/Produto";
import axios from "axios";

export default {
  components: {
    Produto,
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
};
</script>

<style>
</style>
