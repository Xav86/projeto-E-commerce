<template>
    <ul class="nav-links">
        <li class="nav-link-iten">
            <img src="@/assets/icons/house.svg" alt="icone de casa">
            <router-link to="/" aria-current="page">Home</router-link>
        </li>
        <li class="nav-link-iten">
            <img src="@/assets/icons/boxes.svg" alt="icone de caixas">
            <router-link to="/about">About</router-link>
        </li>
        <li v-if="true" class="nav-link-iten">
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
    }

    .nav-link-iten:hover {
        text-decoration: underline 2px;
    }

    .nav-link-iten a {
        text-decoration: none;
        color: #000;
    }
</style>