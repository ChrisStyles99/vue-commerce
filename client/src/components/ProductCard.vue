<template>
  <div class="product-card">
    <h3>{{ product.name }}</h3>
    <img :src="product.image_url" alt="product image">
    <div class="btns">
      <button class="btn add" @click="addToCart()">Add to cart</button>
      <router-link class="btn link" :to="`/product/${product.id}`">See details</router-link>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  props: {
    product: {
      type: Object
    }
  },
  setup(props) {
    const store = useStore();
    const addToCart = () => {
      store.commit('add_to_cart', {...props.product, quantity: 1});
    }

    return {
      addToCart
    }
  }
}
</script>

<style lang="scss" scoped>
  .product-card {
    background-color: $bg;
    padding: 10px;
    margin: auto;
    border-radius: 12px;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);

    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }

    .btns {
      display: flex;
      justify-content: space-between;

      .btn {
        padding: 5px;
        font-size: .9rem;
        cursor: pointer;
        border: none;
        color: $bg;
        transition: 0.3s ease all;

        &:first-child {
          background-color: $primary;
        }

        &:last-child {
          background-color: $secondary;
          text-decoration: none;
        }

        &:hover {
          background-color: $third;
        }
      }
    }
  }
</style>