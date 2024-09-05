<template>
  <div class="home">
    <NavbarComponent />
    <CarouselComponent />
    <div class="container search-item">
      <SearchComponent />
    </div>
    <div class="grid-container">
      <CardItem class="card-item" />
      <CardItem class="card-item" />
      <CardItem class="card-item" />
      <CardItem class="card-item" />
      <CardItem class="card-item" />
      <CardItem class="card-item" />
      <CardItem class="card-item" />
      <CardItem class="card-item" />
    </div>
    <div class="container">
      <hr>
      <div class="button-more-itens">
        <router-link to="/games" class="btn btn-primary">Ver Mais</router-link>
      </div>
    </div>
    <footerComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/navbar/NavbarComponent.vue';
import CarouselComponent from '@/components/HomeComponets/Carousel/CarouselComponent.vue';
import CardItem from '@/components/HomeComponets/CardItens/CardItem.vue';
import footerComponent from '@/components/footer/footerComponent.vue';
import SearchComponent from '@/components/HomeComponets/SearchComponent.vue';

export default {
  name: 'HomeView',
  components: {
    NavbarComponent,
    CarouselComponent,
    CardItem,
    footerComponent,
    SearchComponent
  }
}
</script>

<style scoped>
 .grid-container {
  padding: 50px 10% 20px 10%;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  gap: 3%;
 }

 .card-item {
  margin-bottom: 25px;
 }

 .button-more-itens {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px;
 }

 .search-item {
  padding: 60px 0 20px 0;
 }

</style>