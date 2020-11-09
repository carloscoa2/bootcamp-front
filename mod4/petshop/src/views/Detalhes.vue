<template>
  <div>
    <v-container>
      <v-alert type="success" :value="alert">
        Produto adicionado
      </v-alert>

      <div v-if="objectIsEmpty(produto)">
        <h1>Página não encontrada</h1>
      </div>
      <div v-else>
        <v-row justify="end">
          <v-col>
            <router-link to="/produtos">
              <v-btn class="primary"> Voltar para a loja </v-btn>
            </router-link>
          </v-col>
          <v-col>
            <Carrinho />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <Produto :produto="produto" class=".descricao-resumida" />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import Produto from '@/components/Produto';
import Carrinho from '@/components/Carrinho';
import axios from 'axios';

import { mapGetters } from 'vuex';

export default {
  components: {
    Produto,
    Carrinho,
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

      throw 'Produto não encontrado';
    },
    objectIsEmpty(obj) {
      return Object.keys(obj).length === 0;
    },
  },
  computed: {
    ...mapGetters(['carrinho', 'quantItens', 'alert']),
  },
};
</script>

<style></style>
