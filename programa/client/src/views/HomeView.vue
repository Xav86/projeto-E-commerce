<template>
  <div class="home">
    <NavbarComponent />
    <h1>Oi</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
  name: 'HomeView',
  components: {
    NavbarComponent
  }
}
</script>

<style scoped>
</style>