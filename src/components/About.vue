<template>
  <div class="container">
    <h3><u>ABOUT US</u></h3>
    <br/>
    <span style="text-align: left">
    <p>
      At Mister Fleurs we sell the best qality prices at the best possible prices, 
      straight from the farm.
    </p>
    <p>
      After being in the industry for many and years selling flowers all over the world we have been witness to 
      the many inefficiencies with the current industry models
    </p>
    <p>Namely;</p>

    
    <p>
      1. The final customer ends up pay for these inefficiencies and many intermediaries (After leaving the farm the typical flower changes 
      hands 3 times before the end customer get their hands on them)
    </p>
    <p>
      2. Final customers tend to get old flowers that have been sitting in cold rooms.
    </p>
    <p> 
      3. Tons of lowers are thrown away they are 
    </p>
    
    </span>

    <CartItems />
  </div>
  
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
