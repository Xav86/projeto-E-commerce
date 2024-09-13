<template>
    <div  class="products">
        <NavbarComponent />
        <div class="container">
            <h1>Listagem de Produtos</h1>
            <hr>
            <ul  class="products-list">
                <li v-for="i in 10" :key="i">
                    <CardItemListAdmin />
                </li>
            </ul>
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import CardItemListAdmin from '@/components/CardItens/CardItemListAdmin.vue';
import FooterComponent from '@/components/footer/footerComponent.vue';
import NavbarComponent from '@/components/navbar/NavbarComponent.vue';

export default {
    components: {
        NavbarComponent,
        FooterComponent,
        CardItemListAdmin
    }
}
</script>

<style scoped>
    .products {
        display: flex;
        flex-direction: column;
    }

    .container {
        text-align: center;
        min-height: 74.6vh;
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