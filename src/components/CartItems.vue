<template>
<div>
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
          <a class="text-info pointer" v-on:click="addToCart(product)"> Add</a>
          <span style="margin: 0 15px;">{{productsCount[product.name] || 0}}</span>
          <a class="text-info pointer" v-if="productsCount[product.name]" v-on:click="removeFromCart(product)"> Remove</a>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CartItems',
  components: {
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
