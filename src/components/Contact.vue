<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>

    <form
      action="https://formspree.io/mdoorlge"
      method="POST"
    >
      <label>
        Your email:
        <input type="text" name="_replyto">
      </label>
      <label>
        Your message:
        <textarea name="message"></textarea>
      </label>

      <!-- your other form fields go here -->

      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
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
