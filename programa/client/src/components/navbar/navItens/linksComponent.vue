<template>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <img src="@/assets/icons/house.svg" alt="icone de casa">
            <router-link class="nav-link" to="/" aria-current="page">Home</router-link>
        </li>
        <li class="nav-item">
            <img src="@/assets/icons/boxes.svg" alt="icone de caixas">
            <router-link class="nav-link" to="/about">About</router-link>
        </li>
    </ul>
</template>

<style scoped>
    .nav-item {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>