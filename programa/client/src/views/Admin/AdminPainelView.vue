<template>
    <div>
      <NavbarComponent />
        <div class="admin-painel">
          <router-link to="/admin/products-list">Listagem de Produtos</router-link>
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
    .admin-painel {
      min-height: 74.6vh;
    }
</style>