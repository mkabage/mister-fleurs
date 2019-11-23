<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-md-8 brand-text">
        Uniquely designed bouquets directly from the farm 
        <br/>
        Delivered from 25 Euros
      </div>

      <div class="col-md-4">
        <img :src="brandedProduct.img" style="width: 100%"/>
      </div>
    </div>
  </div>
  <hr/>
  <div class="container">
    <div class="row">
      <div class="col-md-4" style="margin-left: -50px">
        <b>Select A Bouquet</b>
      </div>
      <div class="col-md-4">
        <b style="background-color: black; padding: 5px 10px;color: pink;border-radius:20px;">Our BQTS</b>
      </div>
    </div>
    <div class="row">
    <div class="col-md-4" style="padding: 80px 80px 40px 80px;" v-for="product in this.products" :key="product.name" :name="product.name">
      <img :src="product.img" style="width: 100%"/>
      <div style="text-align: left; padding: 20px;">
        <div> <b>Name:</b> {{product.name}}</div>
        <div> <b>Price:</b> {{product.amount}}</div>
        <div> <b>Delivery:</b> Free</div>
        <div>
          <a class="text-info" v-on:click="addToCart(product)"> Add</a>
          <span style="margin: 0 15px;">{{productsCount[product.name] || 0}}</span>
          <a class="text-info" v-if="invalidEmail" v-on:click="removeFromCart(product)"> Remove</a>
        </div>
      </div>
    </div>
  </div>
  </div>
  
  <hr/>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <img src="../assets/1.png">
        Flowers delivered from equitable farms that respect
        the environment and contribute to the well being of communities
      </div>

      <div class="col-md-3">
        <img src="../assets/2.png">
        More money for the farmer
      </div>

      <div class="col-md-3">
        <img src="../assets/3.png">
        Customer gets higher quality flowers that longer at the most 
        competitive price
      </div>

      <div class="col-md-3">
        <img src="../assets/4.png">
        Better for the environment less weastless products are cut on 
        demand ZERO Waste
      </div>
    </div>
  </div>

  <hr/>

  <div class="container">
    <div class="row">
      <div class="col-md-4" style="margin-left: -50px">
        <b>Select A Bouquet</b>
      </div>
      <div class="col-md-4">
        <b style="background-color: black; padding: 5px 10px;color: pink;border-radius:20px;">Our BQTS</b>
      </div>
    </div>
    <div class="row">
    <div class="col-md-4" style="padding: 80px;" v-for="product in this.products" :key="product.name" :name="product.name">
      <img :src="product.img" style="width: 100%"/>
      <div style="text-align: left; padding: 20px;">
        <div> <b>Name:</b> {{product.name}}</div>
        <div> <b>Price:</b> {{product.amount}}</div>
        <div> <b>Delivery:</b> Free</div>
        <div>
          <a class="text-info" v-on:click="addToCart(product)"> Add</a>
          <span style="margin: 0 15px;">{{productsCount[product.name] || 0}}</span>
          <a class="text-info" v-on:click="removeFromCart(product)"> Remove</a>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import Product from './Product'

export default {
  name: 'home',
  components: {
    Product
  },
  data: function(){
    return {
      products: [],
      brandedProduct: {},
      productsCount: {}
    }
  },
  created(){
    this.$http.get('https://api.myjson.com/bins/19pv12').then(res => {
      this.products = res.data.slice(2);
      this.brandedProduct = res.data[4];
      this.productsCount = this.recalculateCounts();
    })
  },
  components: {
  },
  methods: {
    addToCart: function(item){
      this.addItemsToCart(item);
      this.productsCount = this.recalculateCounts();
    },
    removeFromCart: function(item){
      this.removeItemsFromCart(item);
      this.productsCount =  this.recalculateCounts();
    }
  }
}
</script>

<style>

</style>
