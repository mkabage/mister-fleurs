<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/">Home</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">

      <ul class="navbar-nav">
      <li class="nav-item">
      <router-link class="nav-link" to="/about">About</router-link>
      </li>
      <li class="nav-item">
      <router-link class="nav-link" to="/contact">Contact</router-link>
      </li>
      <li class="nav-item">
      <router-link class="nav-link" to="/login">Login</router-link>
      </li>      
      </ul>
    </div>
  </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
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
  margin-top: 60px;
}
</style>
