import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
axios.defaults.baseURL = 'http://127.0.0.1:8000/';

export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    posts: [],
    showForm:false,


  },
  getters: {
    loggedIn(state) {
      return state.token !== null
    },

  },
  mutations: {
    showForm(state){
      state.showForm=!state.showForm;

    },


    addPost(state, newPost) {
      state.posts.push({
        id: newPost.id,
        title: newPost.title,
        body: newPost.body
      })
    },

    deletePost(state, id) {
      const index = state.posts.findIndex(item => item.id == id)
      state.posts.splice(index, 1)
    },

    retrievePosts(state, posts) {
      state.posts = posts
    },
    retrieveToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null;
      localStorage.removeItem('access_token');

    },
  },
    actions: {
      register(context, data) {
          axios.post('api/account/', {
            email: data.email,
            name: data.name,
            password: data.password,
          })
            .then(response => {
            })
            .catch(error => {
              reject(error)
            })

      },
      destroyToken(context) {

        context.commit('destroyToken');


      },
      retrieveToken(context, credentials) {
          axios.post('api/login/', {
            email: credentials.email,
            password: credentials.password,
          })
            .then(response => {
              const token = response.data.token;
              console.log(token);
              localStorage.setItem('access_token', token);
              context.commit('retrieveToken', token);

            })
            .catch(error => {
              console.log(error);
              reject(error)
            })
      },

      retrievePosts(context) {
        console.log('look here 55555555');
        console.log(context.state.token);
        axios.defaults.headers.common['authorization'] = context.state.token;
        axios.get('post/postlist/')
          .then(response => {
            context.commit('retrievePosts', response.data)
          })
          .catch(error => {
            console.log(error)
          })
      },

      addPost(context, newPost) {
        axios.defaults.headers.common['authorization'] = context.state.token;

        axios.post('/post/postlist/', {
          title: newPost.title,
          body: newPost.body,
          id: newPost.id,
        })
          .then(response => {
            context.commit('addPost', response.data)
          })
          .catch(error => {
            console.log(error)
          })
      },


      deletePost(context, id) {
        axios.defaults.headers.common['authorization'] = context.state.token;
        axios.delete('/post/postlist/' + id)
          .then(response => {
            context.commit('deletePost', id)
          })
          .catch(error => {
            console.log(error)
          })
      },

    },
  });
