import { createStore } from 'vuex'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

export default createStore({
  state: {
    isLoggedIn: document.cookie.includes('isLoggedIn=true') === true ? true : false,
    products: [],
    productsError: null,
    categories: [],
    categoriesError: null,
  },
  mutations: {
    get_products_error(state, msg) {
      state.productsError = msg;
    },
    get_products(state, products) {
      state.products = products;
    },
    get_categories_error(state, msg) {
      state.categoriesError = msg;
    },
    get_categories(state, categories) {
      state.categories = categories;
    }
  },
  actions: {
    async getProducts({commit}) {
      const res = await axios.get('/products/all');
      
      if(res.data.error) {
        commit('get_products_error', res.data.msg);
      } else {
        commit('get_products', res.data.products);
      }
    },
    async getCategories({commit}) {
      const res = await axios.get('/products/categories');

      if(res.data.error) {
        commit('get_categories_error', res.data.msg);
      } else {
        commit('get_categories', res.data.categories);
      }
    }
  },
  modules: {
  }
})
