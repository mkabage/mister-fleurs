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

                    <div>
                        <small class="text-danger" v-if="invalidCredentials">Invalid credentials</small>
                    </div>
                    
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
                invalidEmail: false,
                invalidCredentials: false
            }
        },
        methods : {
            handleSubmit(e){
                e.preventDefault()
                const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                this.invalidEmail = false;
                this.invalidCredentials = false;

                if(emailRegex.test(this.email) && this.password.length > 0){
                    this.$http.get('https://api.myjson.com/bins/1gcjp6')
                    .then(response => {
                        let usersData = response.data;

                        let user = usersData.filter(user => {
                            return (user.email.trim() == this.email.trim() && 
                            user.password == this.password.trim())
                        })

                        if(user.length > 0){
                            localStorage.setItem('userName', user.email);
                            this.$router.push('dashboard')
                        } else {
                            this.invalidCredentials = true;
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
