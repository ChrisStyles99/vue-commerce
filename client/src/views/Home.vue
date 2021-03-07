<template>
  <div class="home">
    <div class="home-hero">
      <h1>Welcome to <span>E-commerce</span></h1>
    </div>
    <div class="home-info">
      <div class="home-info-inner">
        <img
          src="https://images.pexels.com/photos/5632403/pexels-photo-5632403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Shopping cart photo"
        />
        <div class="info-text">
          <h2>Our goal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            omnis accusamus nulla officia minima, ex nesciunt dolores iure
            possimus voluptate quisquam nemo ea tempora architecto, autem quas
            blanditiis corrupti voluptatum? Ad ipsa, quidem architecto nulla
            quaerat at quos cum quibusdam.
          </p>
        </div>
      </div>
    </div>
    <div class="home-categories">
      <CategoryCard v-for="category in categories" :key="category.category" :category="category.category" :background="randomColor()" />
    </div>
  </div>
</template>

<script>
import CategoryCard from '@/components/CategoryCard.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup() {
    const store = useStore();
    const categories = computed(() => {
      return store.state.categories;
    });

    const getCategories = async() => {
      await store.dispatch('getCategories');
    }

    getCategories();

    const randomColor = () => {
      const colors = ['#ff8080', '#00cccc', '#3399ff', '#59b300', '#9966ff', '#e6e600'];
      const index = Math.floor(Math.random() * 6);
      return colors[index];
    }

    randomColor();

    return {
      CategoryCard, randomColor, categories
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;

  .home-hero {
    height: 50vh;
    background-image: url("https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1226&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    h1 {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -40%);
      font-size: 3rem;
      color: $bg;

      span {
        color: $third;
      }
    }
  }

  .home-info {
    height: 50vh;
    background-color: #dad8e3;

    .home-info-inner {
      width: 80vw;
      height: inherit;
      margin: auto;
      display: flex;
      justify-content: space-between;

      img {
        padding: 15px;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .info-text {
        margin: auto;
        text-align: justify;
        padding: 10px;

        h2 {
          text-transform: uppercase;
        }
      }
    }
  }

  .home-categories {
    width: 80vw;
    min-height: 40vh;
    padding: 20px 0;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }

  // svg {
  //   position: absolute;
  //   top: 80px;
  //   left: 0;
  //   z-index: -1;
  // }
}
</style>