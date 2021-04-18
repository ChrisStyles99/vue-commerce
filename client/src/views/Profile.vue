<template>
  <div class="profile">
    <h1>Hello, {{ user.name }}</h1>
    <h3>Your orders</h3>
    <div class="order-history">
      <Order v-for="order in orders" :key="order.order_id" :order="order" />
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

    const orders = computed(() => {
      return store.state.orders;
    });

    const getProfile = () => {
      store.dispatch('getProfile');
      store.dispatch('getProfileOrders');
    }
    getProfile();

    return {
      user, orders, Order
    }
  }
}
</script>

<style>

</style>