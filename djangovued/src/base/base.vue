<template>
  <div class="container">
    <div class="nav" >

      <h3 v-if="!loggedIn"><router-link :to="{ name: 'home' }">Login</router-link></h3>
      <h3 v-if="loggedIn"><router-link :to="{ name: 'blog' }">Blog</router-link></h3>

      <h3 v-if="!loggedIn"><router-link :to="{ name: 'register' }">Register</router-link></h3>
      <h3 v-if="loggedIn"><router-link :to="{ name: 'logout' }">Logout</router-link></h3>


      </div>
    <transition name="router-animation" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
      <router-view></router-view>
    </transition>
     <div class="footer">  <h3> no copy right @ made by Rostom </h3> </div>
  </div>
</template>

<script>
  export default {
    computed: {
      loggedIn() {
        return this.$store.getters.loggedIn
      }
    }
  }
</script>

<style >


  .container {
    display: grid;
    background-color: #cddcdc;

    grid-template-areas:
      "nav content content"
      "nav content content"
      "footer footer footer";

    grid-template-columns: 100px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;

    height: 100vh;
  }

  header {
    grid-area: header;
  }

  .nav {
    grid-area: nav;
    background-color: gray;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-items: stretch;
  }




  h3{

    font-family: 'Ubuntu', sans-serif;
    margin-bottom: 200px;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
  }



  h3:hover {
    color: white;
    border-left: 1px solid white;
    border-right: 1px solid white;
    text-decoration-color: gainsboro;
  }

  #twist {
    color: blue;
  }


  .main {
    grid-area: content;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    transition: all 0.3s ease-out;

  }



  .footer {
    height: 100px;
    grid-area: footer;
    flex-direction: row;
    justify-content: center;

    align-items: center;
    background-color: black;
  }

  p{
    font-style: normal;
    color:white;

  }
  p:hover {
        font-size: 0.9em;
        text-transform: uppercase;



  }


</style>

