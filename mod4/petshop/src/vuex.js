import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    carrinho: [],
    quantItens: 0,
    precoTotal: 0,
    alert: false,
  },
  mutations: {
    addProduto: (state, produto) => {
      state.carrinho.push(produto);

      state.quantItens++;
      if (produto.desconto !== undefined) {
        state.precoTotal += produto.desconto;
      } else {
        state.precoTotal += produto.preco;
      }
      state.alert = true;
      setTimeout(() => {
        state.alert = false;
      }, 1000);
    },
    removerProduto: (state, produto) => {
      const found = state.carrinho.findIndex((item) => item.id === produto.id);
      state.carrinho.splice(found, 1);

      state.quantItens--;
      if (produto.desconto !== undefined) {
        state.precoTotal -= produto.desconto;
      } else {
        state.precoTotal -= produto.preco;
      }
    },
  },
  getters: {
    carrinho: (state) => state.carrinho,
    quantItens: (state) => state.quantItens,
    precoTotal: (state) => state.precoTotal,
    alert: (state) => state.alert,
  },
  actions: {
    addProduto: ({ commit }, produto) => commit('addProduto', produto),
    removerProduto: ({ commit }, produto) => commit('removerProduto', produto),
  },
});
export { store };
