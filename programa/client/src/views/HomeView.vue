<template>
  <div class="home">
    <NavbarComponent />
    <CarouselComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/NavbarComponent.vue';
import CarouselComponent from '@/components/CarouselComponent.vue';

export default {
  name: 'HomeView',
  components: {
    NavbarComponent,
    CarouselComponent
  }
}
</script>

<style scoped>
</style>