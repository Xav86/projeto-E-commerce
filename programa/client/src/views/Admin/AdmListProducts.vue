<template>
    <div  class="products">
        <NavbarComponent />
        <div class="container">
            <div class="title-new">
                <h1>Listagem de Produtos</h1>
                <div><router-link to="/admin/new-product" class="btn btn-success">Novo Jogo</router-link></div>
            </div>
            <hr>
            <ul class="products-list">
                <li v-for="i in 10" :key="i">
                    <CardItemListAdmin />
                </li>
            </ul>
        </div>
        <ModalEditGame />
        <FooterComponent />
    </div>
</template>

<script>
import CardItemListAdmin from '@/components/CardItens/CardItemListAdmin.vue';
import FooterComponent from '@/components/footer/footerComponent.vue';
import NavbarComponent from '@/components/navbar/NavbarComponent.vue';
import ModalEditGame from '@/components/modal/ModalEditGame.vue';

export default {
    components: {
      NavbarComponent,
      FooterComponent,
      CardItemListAdmin,
      ModalEditGame
    }
}
</script>

<style scoped>
    .title-new {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .admin-painel {
      min-height: 74.6vh;
    }

    .products {
        display: flex;
        flex-direction: column;
    }

    .container {
        text-align: center;
        min-height: 74.6vh;
        margin-bottom: 17px;
    }

    .products li {
        list-style-type:none;
        padding: 0;
    }

    .products ul {
        margin: 0;
        padding: 0;
    }

    .products-list {
        display: flex;
        flex-direction: column;
        gap: 17px;
    }
</style>