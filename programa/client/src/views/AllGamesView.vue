<template>
  <div>
    <NavbarComponent />
    <div class="all-game">
      <div class="container text-center">
          <h1>Todos os Jogos disponiveis</h1>
          <hr>
          <searchComponent />
      </div>
      <div class="grid-container">
          <CardItem class="card-item" v-for="n in 23" :key="n" />
      </div>
    </div>
    <footerComponent />
    <upPageButton class="fixed-right-down" />
  </div>
</template>

<script>
import SearchComponent from '@/components/search/SearchComponent.vue';
import CardItem from '@/components/CardItens/CardItem.vue';
import NavbarComponent from '@/components/navbar/NavbarComponent.vue';
import footerComponent from '@/components/footer/footerComponent.vue';
import upPageButton from '@/components/buttons/upPageButton.vue';

export default {
  name: 'AllgamesView',
  components: {
    SearchComponent,
    CardItem,
    NavbarComponent,
    footerComponent,
    upPageButton
  }
}
</script>

<style scoped>
  .all-game {
    min-height: 74.6vh;
  }

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

 .fixed-right-down {
    display: flex;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 2;
 }

</style>