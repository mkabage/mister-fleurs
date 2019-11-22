import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

let router = new VueRouter({
  mode: 'history',
  routes: [ { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/about', component: About, },
  { path: '/login', component: Login, meta: { guest: true } },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } } ] });

Vue.use(VueRouter)

Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
