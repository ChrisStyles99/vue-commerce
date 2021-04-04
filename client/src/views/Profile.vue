<template>
  <div class="profile">
    <h1>Hello, {{ user.name }}</h1>
    <h3>Your orders</h3>
    <div class="order-history">
      <Order />
      <Order />
      <Order />
      <Order />
      <Order />
      <Order />
      <Order />
      <Order />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Order from '@/components/Order.vue';

export default {
  setup() {
    const store = useStore();

    const user = computed(() => {
      return store.state.user;
    });

    const getProfile = () => {
      store.dispatch('getProfile');
    }
    getProfile();

    return {
      user, Order
    }
  }
}
</script>

<style>

</style>