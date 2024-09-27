<template>
    <div class="menu-itens">
        <div class="menu-card">
            <router-link to="/admin/list-users" class="item">
                <img src="@/assets/icons/people.svg" alt="icone de pessoas">
            </router-link>
            <p>Listagem de Usuários</p>
        </div>
        <div class="menu-card">
            <router-link to="/admin/list-products" class="item">
                <img src="@/assets/icons/basket.svg" alt="icone de pessoas">
            </router-link>
            <p>Listagem de Produtos</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .menu-itens {
        width: 100%;
        display: flex;
        flex-direction: row;

        gap: 17px;

    }

    .menu-itens p {
        margin: 0;
    }

    .menu-card {
        width: 85px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        text-align: center;
    }

    .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;

        border-radius: 10px;
        background-color: #0d2388;
        border: 7px solid #3808bd;

        transition: all .2s;
    }

    .item:hover {
        transform: translateY(-10px);
        background-color: #3808bd;
        border: 7px solid #0d2388;
        cursor: pointer;
    }
</style>