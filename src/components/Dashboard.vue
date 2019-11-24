<template>
  <div class="container">
    <div class="row">
    <h4>Cart Items</h4>
    <button class="btn btn-danger" v-if="this.cartItems.length > 0" @click="clearItemsIncart()">Clear all</button>
    </div>
    <div class="row">
      <table class="table">
        <thead>
          <th>
          Name
        </th>
        <th>
          Price
        </th>
        <th>
          Quantity
        </th>
        <th>
          Total
        </th>
        </thead>
        <tbody>
          <tr v-if="this.cartItems.length == 0" colspan="4">
            <td>
              No Items in cart
            </td>
          </tr>
          <tr v-else v-for="cartItem in this.cartItems" :key="cartItem.name" :name="cartItem.name">
            <td>
              {{cartItem.name}}
            </td>
            <td>
              {{cartItem.price}}
            </td>
            <td>
              {{cartItem.quantity}}
            </td>
            <td>
              {{cartItem.total}}
            </td>    
          </tr>
        </tbody>
        <tfoot v-if="this.cartItems.length > 0">
          <td colspan="3">
            Grand Total
          </td>
          <td>
            <b>{{this.totalAmount}}</b>
          </td>
        </tfoot>
      </table>        
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  components: {
  },
  data: function(){
    return {
      cartItems: {},
      totalAmount: 0
    }
  },
  created(){
    if(!this.isLogin()){
      this.$router.push('\login');
    }

    let cartItemsList = this.getCartItems();
    let cartKeys = Object.keys(cartItemsList);
    let totalAmount = 0;

    this.cartItems = cartKeys.map(itemKey => {
      let items = cartItemsList[itemKey];
      let itemTotal = items.length * items[0].amount;

      totalAmount = totalAmount + itemTotal;

      return {
        "quantity": items.length,
        "price": items[0].amount,
        "name": items[0].name,
        "total": items.length * items[0].amount
      }
    })

    this.totalAmount = totalAmount;
  },
  methods: {
    clearItemsIncart(){
      this.clearCart();
      this.totalAmount = 0;
      this.cartItems = [];
    }
  }
}
</script>

<style>

</style>
