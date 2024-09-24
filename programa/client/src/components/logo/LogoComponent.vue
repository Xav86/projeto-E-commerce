<template>
    <div>
        <abbr title="Ir para pagina inicial" class="text-decoration-none">
            <router-link class="navbar-brand logo" to="/">
            
                <h1 class="logo-text"><div class="other">Other </div>. Control</h1>
            
                <img src="@/assets/icons/controller-white.svg" alt="Controle na logo" class="icon">
            </router-link>
        </abbr>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .logo {
        display: flex;
        width: 100%;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        gap: 2px;
    }

    .logo-text {
      display: flex;
      flex-direction: row;
    }

    .icon {
        width: 40px;
    }

    .other {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 2px 4px;

        background-color: #fa02615d;
        border-radius: 10px;
        border: 3px solid #ff0000;
        rotate: -5deg;
        transition: .1s;
    }

    .logo:hover .other {
        border: 3px dashed #fa02615d;
        rotate: 0deg;
    }
</style>