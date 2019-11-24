<template>
  <div id="app">


    <img src="../assets/brand-logo.png" />
      <div>
    <nav class="container navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/">Bouquets</router-link>
    <ul class="navbar-nav" style="width: 100%;">


          <li class="nav-item">
            <router-link class="nav-link" to="/about">About us</router-link>
          </li>
          <li class="nav-item" style="margin-right: 490px">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>


        <div class="col-md-4">
          <li class="nav-item right">
            <router-link class="nav-link" to="/help">Help</router-link>
          </li>
          <li class="nav-item right">
            <a v-if="isLogin()" class="nav-link" @click="logoutBtn">Logout</a>
            <router-link v-else class="nav-link" to="/login">Login</router-link>
          </li>

          <li class="nav-item right">
            <router-link class="nav-link" to="/dashboard">Cart</router-link>
          </li>
        </div>

    </ul>

  </nav>
</div>

  <hr/>
  <router-view></router-view>

<hr/>

<div style="margin-left: 80px">
    <div class="row footer">
      <div class="col-md-2" style="text-align: left;">
        <b>Mister Fluers</b>
        <div>
          <router-link to="/">Home</router-link>
        </div>
        <div>
          <router-link to="/about">About us</router-link>
        </div>
        <div>
          Concept
        </div>
        <div>
          <router-link to="/contact">Contact us</router-link>
        </div>
      </div>


      <div class="col-md-8 social-plugins" style="padding: 77px; text-align: center;">

        <div>
          <font-awesome-icon :icon="['fab', 'twitter']" />
          <font-awesome-icon :icon="['fab', 'facebook']" />
          <font-awesome-icon :icon="['fab', 'pinterest']" />
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </div>

        <div>
        COPYRIGHT 2018 MISTER FLUERS
        </div>
      </div>

      <div class="col-md-2" style="text-align: left;">
        <b>Services</b>
        <div>
          <router-link to="/">Bouquets</router-link>
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
  },
  methods: {
    logoutBtn(e){
      this.logout();
      this.$router.push('/');
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
  margin-top: 60px;
}
</style>
