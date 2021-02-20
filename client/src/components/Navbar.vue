<template>
  <nav class="nav">
    <h1 class="logo"><router-link class="logo-link" to="/">E-commerce</router-link></h1>
    <ul class="nav-list">
      <li class="nav-link"><router-link to="/cart">Cart</router-link></li>
      <li class="nav-link"><router-link to="/login">Login</router-link></li>
      <li class="nav-link"><router-link to="/register">Register</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .nav {
    height: 80px;
    background-color: $primary;

    .logo {
      .logo-link {
        color: $bg;
        font-size: 2rem;
        text-decoration: none;
      }
    }
  }
</style>