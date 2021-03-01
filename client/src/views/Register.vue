<template>
  <div class="register">
    <svg class="bg-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#103c42" fill-opacity="1" d="M0,320L40,309.3C80,299,160,277,240,229.3C320,181,400,107,480,90.7C560,75,640,117,720,133.3C800,149,880,139,960,154.7C1040,171,1120,213,1200,234.7C1280,256,1360,256,1400,256L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>

    <div class="register-card">
      <form @submit.prevent="register">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Add name here...">
        <label for="email">E-mail</label>
        <input type="email" id="email" placeholder="Add email here...">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Add password here...">
        <button type="submit">Register!</button>
      </form>
      <img src="https://images.pexels.com/photos/2564463/pexels-photo-2564463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Login card Image">
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const register = () => {
      console.log('login');
    }

    return {
      register
    }
  }
}
</script>

<style lang="scss" scoped>
  .register {
    .bg-svg {
      position: absolute;
      top: 80px;
      left: 0;
      z-index: -1;
    }

    .register-card {
      width: 60vw;
      margin: auto;
      margin-top: 20px;

      display: grid;
      grid-template-columns: 1fr 1fr;
      border-radius: 24px;
      box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);

      img {
        width: 100%;
        height: 100%;
        border-radius: 0 24px 24px 0;
      }

      form {
        border-radius: 24px 0 0 24px;
        background-color: $bg;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        label {
          font-size: 1.5rem;
          margin: 10px 0;
        }

        input {
          font-size: 1.2rem;
          padding: 10px;
          width: 50%;
          border: none;
          border-bottom: 2px solid $secondary;
          outline: none;
        }

        button {
          margin-top: 10px;
          padding: 5px 10px;
          width: 50%;
          border-radius: 8px;
          border: none;
          background: rgb(16,60,66);
          background: linear-gradient(90deg, rgba(16,60,66,1) 0%, rgba(2,87,108,1) 46%, rgba(5,161,156,1) 100%);
          color: #fff;
          font-size: 1.2rem;
          cursor: pointer;
          transition: 0.3s ease all;

          &:hover {
            letter-spacing: 2px;
          }
        }
      }
    }
  }
</style>