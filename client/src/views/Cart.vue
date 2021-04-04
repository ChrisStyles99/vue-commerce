<template>
  <div class="cart-page">
    <h1>Your Cart</h1>
    <div class="cart-products">
      <div class="cart-info">
        <h2>Product name</h2>
        <h2>Quantity</h2>
        <h2>Cost</h2>
      </div>
      <hr>
      <CartItem v-for="item in cartItems" :key="item.id" :product="item" />
      <hr>
      <div class="cart-total">
        <h3>Total</h3>
        <h3>${{cartTotal}}</h3>
      </div>
      <div class="cart-btns">
        <button @click="removeAll()">Remove all products</button>
        <button @click="makeOrder()">Pay the order</button>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue'
import { useStore } from 'vuex'
import { computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const cartItems = computed(() => {
      return store.state.cartItems;
    });
    const cartTotal = computed(() => {
      return store.getters.cartItemsTotal;
    });
    const removeAll = () => {
      store.commit('remove_all');
    }

    const makeOrder = () => {
      console.log(store.state.cartItems);
      const data = {
        products: store.state.cartItems,
        totalPrice: store.getters.cartItemsTotal,
        totalItems: store.getters.cartItemsTotalQuantity
      };

      store.dispatch('makeOrder', data);
      router.push('/profile');
    }

    return {
      CartItem, cartItems, cartTotal, removeAll, makeOrder
    }
  }
}
</script>

<style lang="scss" scoped>
  .cart-page {
    h1 {
      text-align: center;
    }

    .cart-products {
      max-width: 600px;
      margin: auto;
      box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);
      border-radius: 12px;
      padding: 10px;

      .cart-info {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;

        h2 {
          margin: auto;
        }
      }

      .cart-total {
        display: flex;
        justify-content: space-between;
      }

      .cart-btns {
        display: flex;
        justify-content: space-between;

        button {
          background-color: #df3e3e;
          font-size: 1.2rem;
          border: none;
          border-radius: 12px;
          padding: 10px;
          cursor: pointer;
          color: #fff;

          &:last-child {
            background-color: $secondary;
          }
        }
      }
    }
  }
</style>