<template>
  <div class="contact-us">
    <h4><u>Contact us</u></h4>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>

    <div class="row">
      <div class="col-md-4 offset-md-4">
      <form
        action="https://formspree.io/mdoorlge"
        method="POST"
      >
      <div class="form-group">
        <label>
          Your email:
          <input class="form-control" type="text" name="_replyto">
        </label>
        </div>
      <div class="form-group">
        <label>
          Your message:
          <textarea class="form-control" name="message"></textarea>
        </label>

        <!-- your other form fields go here -->
      </div>
        <button type="submit" class="btn btn-primary">Send</button>  
      </form>
      </div>
    </div>
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
