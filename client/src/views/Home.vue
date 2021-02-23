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
      <CategoryCard :background="'#438b'" />
      <CategoryCard :background="'#123adc'" />
      <CategoryCard :background="'#abc123'" />
      <CategoryCard />
    </div>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#103c42" fill-opacity="1" d="M0,320L40,309.3C80,299,160,277,240,229.3C320,181,400,107,480,90.7C560,75,640,117,720,133.3C800,149,880,139,960,154.7C1040,171,1120,213,1200,234.7C1280,256,1360,256,1400,256L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg> -->
  </div>
</template>

<script>
import CategoryCard from '@/components/CategoryCard.vue';

export default {
  setup() {
    return {
      CategoryCard
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
    grid-template-columns: repeat(3, 1fr);
  }

  // svg {
  //   position: absolute;
  //   top: 80px;
  //   left: 0;
  //   z-index: -1;
  // }
}
</style>