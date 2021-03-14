<template>
  <nav class="nav">
    <h1 class="logo"><router-link class="logo-link" to="/">E-commerce</router-link></h1>
    <ul class="nav-list">
      <li class="nav-link"><router-link class="link-ref" to="/products">Products</router-link></li>
      <li class="nav-link"><router-link class="link-ref" to="/cart" v-if="isLoggedIn">Cart</router-link></li>
      <li class="nav-link"><router-link class="link-ref" to="/login" v-if="!isLoggedIn">Login</router-link></li>
      <li class="nav-link"><router-link class="link-ref" to="/register" v-if="!isLoggedIn">Register</router-link></li>
    </ul>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const isLoggedIn = computed(() => {
      return store.state.isLoggedIn;
    });

    return {
      isLoggedIn
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav {
    height: 80px;
    background-color: $primary;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 2px 4px 8px rgba($color: #000000, $alpha: 1.0);
    z-index: 3;

    .logo {
      .logo-link {
        color: $bg;
        font-size: 2rem;
        text-decoration: none;
      }
    }

    .nav-list {
      display: flex;
      list-style-type: none;

      .nav-link {
        margin: 0 10px;

        .link-ref {
          color: $bg;
          text-decoration: none;
          padding: 10px 15px;
          border-radius: 12px;
          transition: 0.3s ease all;

          &:hover {
            background-color: $secondary;
          }
        }
      }
    }
  }
</style>