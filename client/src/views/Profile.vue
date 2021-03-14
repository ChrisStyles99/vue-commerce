<template>
  <div class="profile">
    <h1>Hello, {{ user.name }}</h1>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

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
      user
    }
  }
}
</script>

<style>

</style>