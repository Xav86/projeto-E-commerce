<template>
  <div class="home">
    <NavbarComponent />
    <CarouselComponent />
    <CardItem />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/navbar/NavbarComponent.vue';
import CarouselComponent from '@/components/Carousel/CarouselComponent.vue';
import CardItem from '@/components/CardItens/CardItem.vue';

export default {
  name: 'HomeView',
  components: {
    NavbarComponent,
    CarouselComponent,
    CardItem
  }
}
</script>

<style scoped>
</style>