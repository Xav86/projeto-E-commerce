import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [] // O estado inicial do carrinho
  },
  mutations: {
    ADD_TO_CART(state, item) {
      state.cart.push(item); // Adiciona o item ao carrinho
    },
    REMOVE_FROM_CART(state, itemId) {
      state.cart = state.cart.filter(item => item.id !== itemId); // Remove item pelo ID
    }
  },
  actions: {
    addToCart({ commit }, item) {
      commit('ADD_TO_CART', item); // Chama a mutação para adicionar ao carrinho
    },
    removeFromCart({ commit }, itemId) {
      commit('REMOVE_FROM_CART', itemId); // Chama a mutação para remover do carrinho
    }
  },
  getters: {
    cartItems: state => state.cart, // Retorna os itens do carrinho
    cartTotal: state => state.cart.length // Exemplo de getter para total de itens
  }
});
