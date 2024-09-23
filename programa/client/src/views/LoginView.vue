<template>
  <div class="background">
    <div class="login">
        <div v-if="this.error" class="alert-error" role="alert">
            <img src="@/assets/icons/exclamation-triangle-fill.svg" alt="alert Icon" class="icon">
            <div>
                <p>{{ textError }}</p>
            </div>
        </div>
        <div>
            <logoComponent />
        </div>
        <div class="login-content">
            <form @submit.prevent="logar()">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" name="email" v-model="email" placeholder="Digite seu email" required>

                <label for="password" class="form-label">Senha</label>
                <input type="password" class="form-control" id="password" name="password" v-model="password" placeholder="Digite sua senha" required>

                <button type="submit" class="btn btn-primary">Logar</button>
            </form>
        </div>
        <div class="form-text mt-3">Não tem uma conta? <router-link to="/register">click aqui</router-link> para criar uma!</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import logoComponent from '@/components/logo/LogoComponent.vue';

export default {
    name: 'loginView',
    components: {
        logoComponent
    },
    data() {
        return {
            email: '',
            password: '',
            error: false,
            textError: ''
        }
    },
    methods: {
        async logar() {

            try {
                const result = await axios.post('http://localhost:8919/login', {
                    email: this.email, 
                    password: this.password
                });

                localStorage.setItem('token', result.data.token)
                this.$router.push({name: 'home'});

            } catch(error) {
                this.error = true;
                this.textError = error.response.data.error;
            }
            
        }
    }
}
</script>

<style scoped>
    .background {
        background-image: url('@/assets/images/retro-background.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: center;
    }

    .login {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;

        color: #fafafa;
        background-color: #000000a3;
    }

    .login-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 30%;
        min-width: 330px;
        max-width: 30%;

        padding: 20px 35px;
        border-radius: 10px;
        background-color: #fafafa;
    }

    .alert-error {
        display: flex;
        flex-direction: row;
        gap: 7px;
        align-items: center;
        justify-content: center;

        padding: 10px 20px;
        margin-bottom: 17px;
        background-color: #fa02615d;
        border: 3px solid #ff0000;
        border-radius: 10px;
    }

    .alert-error p {
        margin: 0;
        color: #fafafa;
    }

    label {
        margin: 0;
        color: #0d2388;
    }

    .login-content input {
        margin-bottom: 10px;
        border: 2px solid #0d2388;
    }

    .login-content button {
        margin-top: 10px;
        width: 100%;

        background-color: #0d2388;
        border: none;
    }

    .login-content button:hover {
        margin-top: 10px;
        width: 100%;

        background-color: #3808bd;
    }

    .login-content button:active {
        background-color: #360099;
    }

    .form-text {
        color: #fafafa;
    }

    .align-center {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

</style>