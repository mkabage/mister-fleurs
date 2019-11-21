import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Home from './components/Home.vue'

Vue.config.productionTip = false

let router = new VueRouter({
  mode: 'history',
  routes: [ { path: '/', component: Home },
  { path: '/App', component: App }})

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
