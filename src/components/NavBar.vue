<template>
<b-navbar
    type="is-dark"
    wrapper-class="container"
    class="b-navbar is-spaced"
  >
    <template slot="brand">
      <b-navbar-item
        tag="router-link"
        :to="{ name: 'home' }"
      >
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>

    <template slot="start">
      <b-navbar-item
        tag="router-link"
        :to="{ name: 'home' }"
      >
        <i class="fas fa-home"></i>
        &nbsp;Home
      </b-navbar-item>

      <b-navbar-item
        tag="router-link"
        :to="{ name: 'enrollment' }"
      >
        <i class="fas fa-edit"></i>
        &nbsp;Enrollment
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag='div'>
        <template v-if="$store.state.user.logged">
          <b>{{ $store.state.user.firstname }} {{ $store.state.user.lastname }}</b>
        </template>

        <template v-else>
          <b-button
            type="is-info"
            inverted
            outlined
            @click="login()"
          >
            Login
          </b-button>
        </template>
      </b-navbar-item>

      <div class="buttons">
        <b-navbar-item tag="div">
          <template v-if="$store.state.user.logged">
            <b-button
              type="is-warning"
              icon-left="sign-out-alt"
              icon-pack="fas"
              @click="logout()"
            >
              Logout
            </b-button>
          </template>

          <template v-else>
            <b-button
              type="is-warning"
              icon-left="sign-in-alt"
              icon-pack="fas"
              @click="signup()"
            >
              Register
            </b-button>
          </template>
        </b-navbar-item>
      </div>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    login() {

    },
    signup() {

    },
    logout() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
