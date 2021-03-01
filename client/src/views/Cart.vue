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
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <hr>
      <div class="cart-total">
        <h3>Total</h3>
        <h3>$10000</h3>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue'
export default {
  setup() {
    return {
      CartItem
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
        display: flex;
        justify-content: space-between;
      }

      .cart-total {
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>