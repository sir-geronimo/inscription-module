<template>
  <div id="app">
    <NavBar></NavBar>
    <div v-if="isLogged" class="section">
      <router-view/>
    </div>
    <div v-else>
      <Login/>    
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Login from '@/views/Login.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Login
  },
  computed: {
    isLogged() {
      return this.$store.state.user.logged;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
