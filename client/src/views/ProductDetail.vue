<template>
  <div class="product">
    <img src="https://via.placeholder.com/500" alt="Image">
    <div class="product-info">
      <h1>Product name</h1>
      <h2>Price: $500</h2>
      <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis inventore nulla explicabo corrupti libero quia velit repellendus voluptas nisi tenetur alias ut veniam nihil natus temporibus expedita sunt, commodi culpa.</p>
      <div class="buttons">
        <input type="number" max="99" min="1">
        <button>Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .product {
    width: 80vw;
    height: calc(100vh - 80px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: auto;

    img {
      margin: auto;
    }

    .product-info {
      margin: auto;

      h1 {
        text-transform: uppercase;
      }

      h2 {
        color: #2e2e2e;
      }

      p {
        text-align: justify;
      }

      .buttons {
        button {
          font-size: 1.2rem;
          padding: 5px;
          background-color: $primary;
          color: $bg;
          border: 2px solid $primary;
          margin: 0 5px;
          transition: 0.3s ease-in all;
          cursor: pointer;

          &:hover {
            background-color: $third;
            border: 2px solid $third;
          }
        }

        input {
          font-size: 1.2rem;
          padding: 5px;
          width: 60px;
        }
      }
    }
  }
</style>