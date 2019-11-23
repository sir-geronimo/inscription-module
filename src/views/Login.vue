<template>
<div>
    <form action="">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Login</p>
            </header>
            <section class="modal-card-body">
                <b-field label="Username">
                    <b-input
                        type="text"
                        :value="username"
                        v-model="username"
                        placeholder="Your username"
                        required>
                    </b-input>
                </b-field>

                <b-field label="Password">
                    <b-input
                        type="password"
                        :value="password"
                        v-model="password"
                        password-reveal
                        placeholder="Your password"
                        required>
                    </b-input>
                </b-field>
            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$router.go(-1)">Cancel</button>
                <button class="button is-primary" @click="login()">Login</button>
            </footer>
        </div>
    </form>
</div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            if (this.username === this.$store.state.credentials.username 
                && this.password === this.$store.state.credentials.password
            ){
                this.$store.state.user.username=this.username;
                this.$store.state.user.password=this.password;
                this.$store.state.user.logged=true;
                this.$router.push({ name: 'enrollment'});
            } else {
                Swal.fire({
                    icon: 'error',
                    text: 'Usuario invalido'
                });
            }            
        }
    }
}
</script>
