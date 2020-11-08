<template>
  <div>
    <div v-if="objectIsEmpty(produto)">
      <h1>Página não encontrada</h1>
    </div>
    <div v-else>
      <v-spacer />
      <router-link to="/produtos">
        <v-btn class="primary"> Voltar para a loja </v-btn>
      </router-link>
      <v-row>
        <v-col>
          <Produto :produto="produto" class=".descricao-resumida" />
        </v-col>
      </v-row>
    </div>
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
      produto: {},
      erro: null,
    };
  },
  async created() {
    try {
      this.produto = await this.buscarProduto(this.$route.params.id);
    } catch (erro) {
      this.erro = erro;
    }
  },
  methods: {
    async buscarProduto(id) {
      const { data } = await axios.get(`http://localhost:3000/produtos/${id}`);

      if (data !== undefined) {
        return data;
      }

      throw "Produto não encontrado";
    },
    objectIsEmpty(obj) {
      return Object.keys(obj).length === 0;
    },
  },
};
</script>

<style>
</style>