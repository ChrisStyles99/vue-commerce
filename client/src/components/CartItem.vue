<template>
  <div class="cart-item">
    <h3>{{product.name}}</h3>
    <div class="buttons">
      <button @click="addOne()">+</button>
      <p>{{product.quantity}}</p>
      <button @click="removeOne()">-</button>
    </div>
    <h4>{{product.price}}</h4>
  </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
  props: {
    product: {
      type: Object
    }
  },
  setup(props) {
    const store = useStore();
    const addOne = () => {
      store.commit('add_to_cart', {...props.product, quantity: 1});
    }
    const removeOne = () => {
      store.commit('remove_one', {...props.product});
    }
    return {
      addOne, removeOne
    }
  }
}
</script>

<style lang="scss" scoped>
  .cart-item {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;

    .buttons {
      display: flex;
      align-items: center;

      p {
        font-size: 1.2rem;
        margin: 0 5px;
      }

      button {
        font-size: 1.2rem;
        padding: 5px;
        cursor: pointer;
        border: none;
        width: 20px;

        &:first-child {
          background-color: #4b55eb;
        }

        &:last-child {
          background-color: #df3e3e;
        }
      }
    }
  }
</style>