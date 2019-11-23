<template>
    <div class="container">
        <div class="row" id="login-form">
            <div class="col-md-4 offset-md-4">
                <h4>Login</h4>
                <form>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input autofocus type="email" v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                        <small v-if="invalidEmail" class="text-danger">Invalid email</small>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
                    </div>
                    <!-- <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> -->
                    <button type="submit" @click="handleSubmit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                email : "",
                password : "",
                invalidEmail: false
            }
        },
        methods : {
            handleSubmit(e){
                e.preventDefault()
                const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                
                if(emailRegex.test(this.email) && this.password.length > 0){
                    this.$http.post('http://localhost:3000/login', {
                        email: this.email,
                        password: this.password
                    })
                    .then(response => {
                        localStorage.setItem('user',JSON.stringify('user'))
                        localStorage.setItem('jwt','token')

                        if (localStorage.getItem('jwt') != null){
                            this.$emit('loggedIn')
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                            }
                            else {
                                this.$router.push('dashboard')
                            }
                        }

                    })
                    .catch(function (error) {
                        console.error(error.response);
                    });
                } else {
                    this.invalidEmail = true;
                }
                }
            }
        }
    
</script>
