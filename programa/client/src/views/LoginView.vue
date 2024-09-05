<template>
  <div class="login">
    <div class="login-content">
        <div class="logo">
            <img src="@/assets/icons/controller.svg" alt="Controle na logo" class="icon">
            <router-link class="navbar-brand" to="/">Game Store</router-link>
        </div>
        <form>
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="Digite aqui seu email">

            <label for="password" class="form-label">Senha</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="Digite aqui sua senha">

            <button type="submit" class="btn btn-primary">Submit</button>

        </form>
    </div>
    <div class="form-text mt-3">Não tem uma conta? <router-link>click aqui!</router-link> para criar uma conta!</div>
  </div>
</template>

<script>

export default {
    name: 'loginView'
}
</script>

<style scoped>
    .login {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
    }

    .login-content {
        display: flex;
        flex-direction: column;
        width: 30%;
        justify-content: center;
        padding: 20px 40px;
        background-color: #b3b3b3;
        border-radius: 10px;
        min-width: 375px;
    }

    .login-content input {
        margin-bottom: 10px;
    }

    .login-content button {
        margin-top: 10px;
        width: 100%;
    }

    .align-center {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    .logo {
        display: flex;
        width: 100%;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        gap: 2px;
    }

    .icon {
        width: 40px;
    }

</style>