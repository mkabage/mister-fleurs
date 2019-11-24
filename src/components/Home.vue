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

  <CartItems />
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

  <CartItems />
</div>
</template>

<script>
import CartItems from './CartItems'

export default {
  name: 'home',
  components: {
    CartItems: CartItems
  },
  data: function(){
    return {
      brandedProduct: {}
    }
  },
  created(){
    this.$http.get('https://api.myjson.com/bins/19pv12').then(res => {
      this.brandedProduct = res.data[4];
    })
  },
  components: {
  }
}
</script>

<style>

</style>
