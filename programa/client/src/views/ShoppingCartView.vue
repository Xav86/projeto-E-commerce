<template>
  <div>
    <NavbarComponent />
    <div class="container">
      <div class="space-between">
        <h1 class="title">Carrinho</h1>
        <button class="btn btn-success">Finalizar Compra</button>
      </div>
      <ul class="list">
        <li v-for="i in 5" :key="i" class="list-product">
          <CardItemList />
        </li>
      </ul>
    </div>
    <footerComponent />
  </div>
</template>

<script>
import NavbarComponent from '@/components/navbar/NavbarComponent.vue';
import footerComponent from '@/components/footer/footerComponent.vue';
import CardItemList from '@/components/CardItens/CardItemList.vue';

export default {
    name: 'cartView',
    components: {
        NavbarComponent,
        footerComponent,
        CardItemList
    }
}

</script>

<style scoped>
  p, h1 {
    margin: 0;
  }

  .container {
    min-height: 72.5vh;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .list-product {
    list-style-type:none;
  }

  .title {
    margin: 20px 0;
  }
  
  ul {
    padding: 0;
  }

</style>