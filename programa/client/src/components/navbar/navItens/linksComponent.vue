<template>
    <ul class="nav-links">
        <li class="none-decoration nav-link-iten">
            <router-link to="/" aria-current="page">
                <img src="@/assets/icons/house.svg" alt="icone de casa">
                Home
            </router-link>
        </li>
        <li class="none-decoration nav-link-iten">
            <router-link to="/about">
                <img src="@/assets/icons/boxes.svg" alt="icone de caixas">
                About
            </router-link>
        </li>
        <li v-if="true" class="none-decoration nav-link-iten nav-link-iten-admin">
            <router-link to="/admin">Painel de Administrador</router-link>
        </li>
    </ul>
</template>

<style scoped>
    .nav-links {
        display: flex;
        flex-direction: row;
        
        gap: 13px;

        list-style: none;
        padding: 0;
        margin: 0;
    }

    .nav-link-iten {
        display: flex;
        flex-direction: row;
        align-items: center;

        gap: 3px;

        position: relative;
    }
    
    .nav-link-iten-admin {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-decoration: none;
        color: #000;

        gap: 3px;

        position: relative;
    }

    .nav-link-iten::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -5px;
        height: 2px;
        width: 0;
        background-color: #000;
        transition: width .3s;
    }

    .nav-link-iten-admin::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -5px;
        height: 2px;
        width: 0;
        background-color: #ff4545;
        transition: width .3s;
    }

    .nav-link-iten:hover::after {
        width: 100%;
    }

    .nav-link-iten-admin:hover::after {
        width: 100%;
    }

    .none-decoration a {
        text-decoration: none;
        color: #000;
    }

    @media (max-width: 490px) {
        .nav-links {
            display: flex;
            flex-direction: column;
        }
    }
</style>