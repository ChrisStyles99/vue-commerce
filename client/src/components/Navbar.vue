<template>
  <nav class="nav">
    <h1 class="logo"><router-link class="logo-link" to="/">E-commerce</router-link></h1>
    <ul class="nav-list">
      <li class="nav-link"><router-link class="link-ref" to="/cart">Cart</router-link></li>
      <li class="nav-link"><router-link class="link-ref" to="/login">Login</router-link></li>
      <li class="nav-link"><router-link class="link-ref" to="/register">Register</router-link></li>
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
    display: flex;
    justify-content: space-around;
    align-items: center;

    .logo {
      .logo-link {
        color: $bg;
        font-size: 2rem;
        text-decoration: none;
      }
    }

    .nav-list {
      display: flex;
      list-style-type: none;

      .nav-link {
        margin: 0 10px;

        .link-ref {
          color: $bg;
          text-decoration: none;
          padding: 10px 15px;
          border-radius: 12px;
          transition: 0.3s ease all;

          &:hover {
            background-color: $secondary;
          }
        }
      }
    }
  }
</style>