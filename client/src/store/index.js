import { createStore } from 'vuex'
import axios from 'axios';
import router from '../router';

axios.defaults.baseURL = 'http://localhost:3000/api';

export default createStore({
  state: {
    isLoggedIn: document.cookie.includes('isLoggedIn=true') === true ? true : false,
    products: [],
    productsError: null,
    product: {},
    productError: null,
    categories: [],
    categoriesError: null,
    loginError: null,
    registerError: null
  },
  mutations: {
    get_products_error(state, msg) {
      state.productsError = msg;
    },
    get_products(state, products) {
      state.products = products;
    },
    get_product_error(state, msg) {
      state.productError = msg;
    },
    get_product(state, product) {
      state.product = product;
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
    },
    register_error(state, msg) {
      state.registerError = msg;
    }
  },
  actions: {
    async getProducts({commit}) {
      if(this.state.products.length > 0) {
        return
      }

      const res = await axios.get('/products/all');
      
      if(res.data.error) {
        commit('get_products_error', res.data.msg);
      } else {
        commit('get_products', res.data.products);
      }
    },
    async getSingle({commit}, id) { 
      const res = await axios.get(`/products/product/${id}`);

      if(res.data.error) {
        commit('get_product_error', res.data.msg);
      } else {
        commit('get_product', res.data.product);
      }
    },
    async getCategories({commit}) {
      if(this.state.categories.length > 0) {
        return
      }
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
    },
    async register({commit}, data) {
      const res = await axios.post('/users/register', data);
      if(res.data.error) {
        commit('register_error', res.data.msg);
      } else {
        router.push('/login');
      }
    }
  },
  getters: {
    products: state => state.products
  },
  modules: {
  }
})
