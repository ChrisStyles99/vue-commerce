<template>
  <div class="products">
    <transition name="svg" appear>
      <svg class="bg-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#103c42" fill-opacity="1" d="M0,320L40,309.3C80,299,160,277,240,229.3C320,181,400,107,480,90.7C560,75,640,117,720,133.3C800,149,880,139,960,154.7C1040,171,1120,213,1200,234.7C1280,256,1360,256,1400,256L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
    </transition>
    <h1>All products</h1>
    {{productsError}}
    <div class="product-grid">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
  setup() {
    const store = useStore();
    const products = computed(() => {
      return store.state.products;
    });
    const productsError = computed(() => {
      return store.state.productsError
    });

    const getProducts = async() => await store.dispatch('getProducts');

    getProducts();
    
    return {
      ProductCard, products, productsError
    }
  }
}
</script>

<style lang="scss" scoped>
  .products {
    .bg-svg {
      position: absolute;
      top: 80px;
      left: 0;
      z-index: -1;
    }

    h1 {
      text-align: center;
      color: $bg;
    }

    .product-grid {
      max-width: 80vw;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      row-gap: 10px;
    }
  }

  .svg-enter-from {
    transform: translateY(-100px);
  }

  .svg-leave-to {
    transform: translateY(-100px);
  }

  .svg-enter-active,
  .svg-leave-active {
    transition: all 0.3s ease-in;
  }
</style>