<template>
    <router-link to="/cart" class="btn btn-primary">
        <img src="@/assets/icons/basket-small.svg" alt="icone de carrinho de compras">
        Carrinho
    </router-link>
</template>

<style scoped>
    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        gap: 3px;

        background-color: #0d2388;
        border: 3px solid #3808bd;
        border-radius: 10px;
    }

    a:hover {
        background-color: #3808bd;
        border: 3px solid #0d2388;
        cursor: pointer;
    }
    
</style>