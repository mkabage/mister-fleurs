<template>
  <div class="hello">
    <h1>About us page</h1>
    <p>
      Old legacy systems can obstruct your goal to be a data-driven business. Competitive pressures, a code-heavy legacy system that is expensive to maintain, new compliance standards in play(e.g. GDPR)
      can become very overwhelming for a business.
    </p>
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
