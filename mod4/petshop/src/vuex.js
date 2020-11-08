import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    carrinho: 'Lista do carrinho',
  },
  mutations: {
    decrement: (state) => (state.carrinho = 'Lista com menos'),
    increment: (state, add) => (state.carrinho = 'Lista com mais ' + add),
  },
  getters: {
    carrinho: (state) => state.carrinho,
  },
  actions: {
    decrement: ({ commit }) => commit('decrement'),
    increment: ({ commit }) => commit('increment', 'add'),
  },
});
export { store };
