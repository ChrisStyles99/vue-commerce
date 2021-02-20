<template>
  <Nav></Nav>
  <router-view/>
</template>

<script>
import Nav from '@/components/Navbar.vue';

export default {
  setup() {
    return {
      Nav
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }
</style>
