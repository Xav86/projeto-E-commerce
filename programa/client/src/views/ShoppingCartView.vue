<template>
  <div>
    <NavbarComponent />
    <footerComponent />
  </div>
</template>

<script>
import NavbarComponent from '@/components/navbar/NavbarComponent.vue';
import footerComponent from '@/components/footer/footerComponent.vue';

export default {
    components: {
        NavbarComponent,
        footerComponent
    }
}

</script>

<style>

</style>