<template>
  <div class="background">
    <NavbarComponent />
      <div class="container-background">
          <div class="menu-bar">
            <buttonsAdm />
          </div>
      </div>
      <FooterComponent />
  </div>
</template>

<script>
import buttonsAdm from '@/components/buttons/buttonsAdm.vue';
import FooterComponent from '@/components/footer/footerComponent.vue';
import NavbarComponent from '@/components/navbar/NavbarComponent.vue';

export default {
  components: {
    buttonsAdm,
    NavbarComponent,
    FooterComponent
  }

}
</script>

<style scoped>
  .background {
    background-image: url('@/assets/images/retro-background-adm.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
  }

  .container-background {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #000000a3;
    color: #fafafa;
  }

  .menu-bar {
    display: flex;
    flex-wrap: wrap;
    
    padding: 20px 40px;

    background-color: #fafafa;
    color: #0d2388;
    border-radius: 10px;
  }

  .menu-itens p {
    margin: 0;
  }
</style>