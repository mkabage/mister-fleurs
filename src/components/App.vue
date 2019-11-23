<template>
  <div id="app">

    <img src="../assets/brand-logo.png" />
      <div>
    <nav class="container navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/">Home</router-link>
    <ul class="navbar-nav" style="width: 100%;">

        
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item" style="margin-right: 490px">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
       

        <div class="col-md-4">
          <li class="nav-item right">
            <router-link class="nav-link" to="/help">Help</router-link>
          </li>    
          <li class="nav-item right">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>

          <li class="nav-item right">
            <router-link class="nav-link" to="/contact">Cart</router-link>
          </li>
        </div>
       
    </ul>

  </nav>
</div> 

  <hr/>
  <router-view></router-view>

<hr/>

<div style="margin-left: 80px">
    <div class="row">
      <div class="col-md-2" style="text-align: left;">
        <b>Mister Fluers</b>
        <div>
          Home
        </div>
        <div>
          About us
        </div>
        <div>
          Concept
        </div>
        <div>
          Contact us
        </div>
      </div>
      

      <div class="col-md-8 social-plugins" style="padding: 96px; text-align: center;">
        <font-awesome-icon icon="twitter" />
        COPYRIGHT 2018 MISTER FLUERS
      </div>

      <div class="col-md-2" style="text-align: left;">
        <b>Services</b>
        <div>
          Bouquets
        </div>
      </div>
    </div>
  </div>
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
