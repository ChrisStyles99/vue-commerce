import { createStore } from 'vuex'
import axios from 'axios';
import router from '../router';
axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.withCredentials = true;

export default createStore({
  state: {
    isLoggedIn: document.cookie.includes('isLoggedIn=true') === true ? true : false,
    products: [],
    productsError: null,
    product: {},
    productError: null,
    filteredProducts: [],
    filteredProductsError: null,
    categories: [],
    categoriesError: null,
    loginError: null,
    registerError: null,
    user: {},
    userError: null
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
    },
    get_products_category_error(state, msg) {
      state.filteredProductsError = msg;
    },
    get_products_category(state, products) {
      state.filteredProducts = products;
    },
    get_profile_error(state, msg) {
      state.userError = msg;
    },
    get_profile(state, user) {
      state.user = user;
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
    },
    async getProductsByCategory({commit}, category) {
      const res = await axios.get(`/products/category/${category}`);

      if(res.data.error) {
        commit('get_products_category_error', res.data.msg);
      } else {
        commit('get_products_category', res.data.products);
      }
    },
    async getProfile({commit}) {
      const res = await axios.get('/users/profile');
      console.log(res.data);
      if(res.data.error) {
        commit('get_profile_error', res.data.msg);
      } else {
        commit('get_profile', res.data.user);
      }
    }
  },
  getters: {
    products: state => state.products
  },
  modules: {
  }
})
