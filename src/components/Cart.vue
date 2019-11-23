<template>
  <div>
    <div class="row">
    <div class="col-md-4" style="border: 1px solid gray" v-for="cartItem in items" :key="cartItem.name" :name="cartItem.name">
      
      </div>
  </div>
</template>

<script>
import Product from './Product'

export default {
  name: 'cart',
  components: {
    Product
  },
  data: function(){
    return {
      items: []
    }
  },
  components: {
  },
  created(){
    this.items = this.getCartItems()
  }
}
</script>

<style>

</style>
