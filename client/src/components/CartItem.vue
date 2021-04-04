<template>
  <div class="cart-item">
    <h3>{{product.name}}</h3>
    <div class="buttons">
      <button @click="addOne()">+</button>
      <p>{{product.quantity}}</p>
      <button @click="removeOne()">-</button>
    </div>
    <h4>{{ productTotal }}</h4>
  </div>
</template>

<script>
import { computed } from 'vue';
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

    const productTotal = computed(() => {
      return props.product.price * props.product.quantity;
    });

    return {
      addOne, removeOne, productTotal
    }
  }
}
</script>

<style lang="scss" scoped>
  .cart-item {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    margin: 10px 0;

    .buttons {
      margin: auto;
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

    h4 {
      margin: auto;
    }
  }
</style>