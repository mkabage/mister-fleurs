import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Help from './components/Help.vue'
import Contact from './components/Contact.vue'
import CartItems from './components/CartItems.vue'
import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
import axios from 'axios'
import _ from 'lodash'
import BootstrapVue from 'bootstrap-vue'
import './main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(fab)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

let router = new VueRouter({
  mode: 'history',
  routes: [ { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/about', component: About, },
  { path: '/help', component: Help, },
  { path: '/login', component: Login, meta: { guest: true } },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } } ] });

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.component("CartItems", CartItems);

Vue.prototype.$http = axios

Vue.prototype.$cart = [];

Vue.prototype.addItemsToCart = function(item){
  let cartItems = this.getCartItems();

  if(cartItems[item.name]){
    cartItems[item.name].push(item);
  } else {
    cartItems[item.name] = [item];
  }

  Vue.prototype.$cart = cartItems
  localStorage.setItem('cartItems', JSON.stringify(Vue.prototype.$cart))
}

Vue.prototype.getCartItems = function(){
  Vue.prototype.$cart = JSON.parse(localStorage.getItem('cartItems') || JSON.stringify({}))
  return Vue.prototype.$cart
}

Vue.prototype.getcartItemsCounts = function(){
  return JSON.parse(localStorage.getItem('cartItemsCounts') || JSON.stringify({}))
}

Vue.prototype.recalculateCounts = function(){
  let cartItems = Vue.prototype.getCartItems();
  let keys = Object.keys(cartItems);
  let products = {}

  for(let index = 0; index < keys.length; index++){
    let item = keys[index];

    products[item] = cartItems[item] ? cartItems[item].length : 0;
  }
  
  localStorage.setItem('cartItemsCounts', JSON.stringify(products))
  return products;
}

Vue.prototype.isLogin = function(){
  let loginName = localStorage.getItem('userName')

  return (loginName != undefined && loginName != null && loginName.length > 0)
}

Vue.prototype.logout = function(){
  localStorage.removeItem('userName');
}

Vue.prototype.clearCart = function(){
  localStorage.removeItem('cartItems');
}

Vue.prototype.removeItemsFromCart = function(item){
  let cartItems = Vue.prototype.$cart;
  let removedItems = cartItems[item.name];
  let keys = Object.keys(cartItems);
  let newItems = {};

  if(removedItems == undefined){
    console.error('No more items in cart - ', item.name);
    return;
  }

  if(removedItems.length == 1){
    for(let index = 0; index < keys.length; index++){
      let cItem = cartItems[keys[index]];
  
      if(cItem != item.name){
        newItems[cItem.name] = cartItems[cItem.name];
      }
    }

    cartItems = newItems;
  } else {
    cartItems[item.name].pop();
  }

  Vue.prototype.$cart = cartItems
  localStorage.setItem('cartItems', JSON.stringify(Vue.prototype.$cart))
  return cartItems
}

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
