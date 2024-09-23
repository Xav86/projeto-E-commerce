<template>
    <div class="background">
        <div class="login">
            <div v-if="this.error" class="alert-error" role="alert">
                <img src="@/assets/icons/exclamation-triangle-fill.svg" alt="alert Icon" class="icon">
                <div>
                    <p>{{ textError }}</p>
                </div>
            </div>
            <div v-if="this.success" class="alert-success" role="alert">
                <img src="@/assets/icons/exclamation-triangle-fill.svg" alt="alert Icon" class="icon">
                <div>
                    <p>{{ textSuccess }} <router-link to="/login">clique aqui para fazer o login! </router-link></p>
                </div>
            </div>
            <div>
                <LogoComponent />
            </div>
            <div class="login-content">
                <form @submit.prevent="create()">
                    <label for="name">Nome <span>*</span> </label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Digite seu nome" v-model="name" required>

                    <label for="email" class="form-label">Email <span>*</span> </label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="Digite seu email" v-model="email" required>

                    <label for="password" class="form-label">Senha <span>*</span> </label>
                    <input type="password" class="form-control" id="password" name="password" placeholder="Digite sua senha" v-model="password" required>

                    <label for="date-nasc">Data de Nascimento <span>*</span> </label>
                    <input type="date" class="form-control" id="date_nasc" name="date_nasc" placeholder="Digite sua data de nascimento" v-model="date_nasc" required>

                    <button type="submit" class="btn btn-primary">Cadastrar</button>
                </form>
            </div>
            <div class="form-text mt-3">Já tem uma conta? <router-link to="/login">click aqui!</router-link> para fazer o login!</div>
        </div>
    </div>
  </template>
  
<script>
import axios from 'axios';  
import LogoComponent from '@/components/logo/LogoComponent.vue';

export default {
    name: 'RegisterView',
    components: {
        LogoComponent
    },
    data() {
        return {
            name: '',
            email: '',
            password: '',
            date_nasc: '',
            error: false,
            textError: '',
            success: false,
            textSuccess: ''
        }
    },
    methods: {
        async create() {
            try {
                const result = await axios.post('http://localhost:8919/user', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    date_nasc: this.date_nasc
                });

                console.log(result)
                this.textSuccess = result.data.msg;
                this.error = false;
                this.success = true;

            } catch(error) {
                this.textError = error.response.data.error;
                this.success = false;
                this.error = true;

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

    .login-content span {
        color: #ff0000;
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

    .alert-success {
        display: flex;
        flex-direction: row;
        gap: 7px;
        align-items: center;
        justify-content: center;

        padding: 10px 20px;
        margin-bottom: 17px;
        background-color: #0d2917;
        border: 3px solid #00ff00;
        border-radius: 10px;
    }

    .alert-error p {
        margin: 0;
        color: #fafafa;
    }

    .alert-success p {
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