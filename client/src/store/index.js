import { createStore } from 'vuex'
import axios from 'axios';
import router from '../router';

axios.defaults.baseURL = 'http://localhost:3000/api';

export default createStore({
  state: {
    isLoggedIn: document.cookie.includes('isLoggedIn=true') === true ? true : false,
    products: [],
    productsError: null,
    categories: [],
    categoriesError: null,
    loginError: null
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
    },
    login_error(state, msg) {
      state.loginError = msg;
    },
    login(state) {
      state.isLoggedIn = true;
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
    },
    async login({commit}, data) {
      const res = await axios.post('/users/login', data);
      console.log(res);

      if(res.data.error) {
        commit('login_error', res.data.msg);
      } else {
        commit('login');
        router.push('/');
      }
    }
  },
  modules: {
  }
})
