<template>
  <div class="main">
    <form action="#" @submit.prevent="login">


        <input type="email" name="username" id="username"  placeholder="Enter your email " v-model="email">

        <input type="password" name="password" id="password" placeholder="Enter your password" v-model="password">

        <button type="submit"  :disabled="loading">Login</button>

    </form>
    <Loading v-if="loading" ></Loading>
  </div>
</template>

<script>
  import Loading from "./loading";
  export default {
    name: 'signin',
    components: {Loading},
    data() {
      return {
        email: '',
        password: '',
        loading: false,
      }
    },
    methods: {
      login() {
        this.loading = true;
        this.$store.dispatch('retrieveToken', {
          email: this.email,
          password: this.password,
        })
          .then(response => {
            this.loading = false;

          })
          .catch(error => {
            this.loading = false;
            this.password = '';
          });
        this.$router.push({ name: 'blog' });
      }
    }
  }
</script>
<style scoped >


  form{
    margin-top: 200px;
    justify-self: center;
    width: 300px;
    height: 300px;
    box-sizing: border-box;
    transition: all 3s ease-in-out 0s;
    box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
    justify-items: center;
    display: grid;
    grid-template-columns:   1fr ;

  }
  input{
    margin-top: 10px;
    width: 200px;
    height: 30px;
    outline: none;
    border: 1px solid gainsboro;
    background-color: transparent;
    font: inherit;
    display: block;
    box-sizing: border-box;
    padding: 5px;
    box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
  }
  input:focus{
    outline: red;
    background-color:transparent;
  }

  button {

    justify-self: center;
    margin-bottom: 1em;
    width: 80px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.3);
    border: none;
    text-align: center;
    display: inline-block;
    color: white;
    font-family: inherit;
    box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
    cursor: pointer;
  }

  button:hover {background-color: black}

  button:active {
    background-color: black;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }


</style>
