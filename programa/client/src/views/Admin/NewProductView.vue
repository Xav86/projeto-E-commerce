<template>
    <div>
        <NavbarComponent />
        <div class="container">
            <h1>Novo Jogo</h1>
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Nome do Jogo</label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="nomeLegal!">
                </div>
                <div class="mb-3">
                    <label for="price" class="form-label">Preço</label>
                    <input type="text" class="form-control" id="price" name="price" placeholder="66,66">
                </div>
                <div class="bottons">
                    <button class="btn btn-success">Salvar</button>
                    <router-link to="/admin" class="btn btn-danger">cancelar</router-link>
                </div>
            </form>
        </div>
        <FooterComponent />     
    </div>
</template>

<script>
import FooterComponent from '@/components/footer/footerComponent.vue';
import NavbarComponent from '@/components/navbar/NavbarComponent.vue';

export default {
    components: {
        NavbarComponent,
        FooterComponent
    }
}
</script>

<style scoped>
    h1 {
        text-align: center;
    }

    .container {
        min-height: 74.6vh;
    }

    .bottons {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: end;
        gap: 7px;
    }
</style>