<template>
  <div class="cart-item">
    <h3>Product name</h3>
    <div class="buttons">
      <button>+</button>
      <p>4</p>
      <button>-</button>
    </div>
    <h4>$1000</h4>
  </div>
</template>

<script>
export default {
  
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