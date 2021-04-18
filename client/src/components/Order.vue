<template>
  <div class="order">
    <h3>Order id: {{order.order_id}}</h3>
    <h3>{{order.name}}</h3>
    <h4>Quantity: {{order.quantity}}</h4>
    <img :src="order.image_url" :alt="order.name">
  </div>
</template>

<script>
export default {
  props: {
    order: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>

</style>