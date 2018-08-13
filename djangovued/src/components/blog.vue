<template>
  <div class="body" >


    <div v-for="post in posts" v-bind:key="post.id"  >
      <h2>{{post.title}}</h2>
      <h3>{{  post.body}}</h3>
      <br/>
      <br/>
      <br/>
      <button v-on:click="deletePostHandle(id)" > delete </button>

    </div>
    <div class="div" >
      <button v-if="!showForm"   v-on:click="showForm=!showForm"  > add post </button>
      <button v-on:click="logoutHandle" > sign out </button>
    </div>
    <div>
      <textarea rows="3" cols="30" placeholder="  post's title "  v-model="title"  ></textarea>
      <textarea rows="20" cols="30" placeholder="your post" v-model="body"  ></textarea>
      <button v-on:click="addPostHandel"  >submit</button>


    </div>



  </div>

</template>

<script>

  import {mapState} from 'vuex'

  export default {
    name: "blog",
    computed: {
      ...mapState([
        'posts'
      ])
    },

    data() {
      return {
        showForm: false,
        'title': this.post.title,
        'body': this.post.body,
      }
    },

    created() {
      getPosts().then(data=>{
        this.$store.commit('retrievePosts',data);

      })


    },
    methods: {
      deletePostHandle(id) {
        deletePost(id);
        this.$store.commit('deletePost');


      },

      logoutHandle() {
        this.$store.commit('destroyToken');


        this.$router.push({name: 'enter'});

      },

      addPostHandel(){
        addPost(this.post);
        this.$store.commit('addPost',this.post)
      },



    },

  }




</script>

<style scoped>

  .body{
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 200px;
    justify-self: center;
    width: 600px;
    height: 400px;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
    justify-items: center;
    padding: 10px 10px 10px 10px;

  }

  h2{


  }

  .div {
    display: flex;
    flex-direction: row;
    justify-items: self-end;
  }


  button {

    margin-right: 1em;
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
