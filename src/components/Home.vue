<template>
  <div>
    <div class="row">
    <div class="col-md-4" style="border: 1px solid gray" v-for="product in this.products" :key="product.name" :name="product.name">
      <div>{{product.name}}</div>
      <img :src="product.img" style="width: 100%"/>
      <span> Price: {{product.amount}}</span>
      <a class="text-info" href="">Add to cart</a>
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
      products: []
    }
  },
  created(){
    this.$http.get('https://api.myjson.com/bins/19pv12').then(res => {
      console.log(res, '???%%%');
      this.products = res.data;
    })
  },
  components: {
  }
}
</script>

<style>

</style>
