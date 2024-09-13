<template>
    <router-link to="" class="edit-link">
    <div class="list-produtcs">
        <img src="@/assets/images/150x95.png" alt="Imagem do produto" class="image-product">
        <div class="space-between-here">
              <h1 class="game-name">nome do jogo</h1>
              
              <small class="info">clique no card para visualizar mais detalhes</small>
              
              <p>R$00,00</p>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {

}
</script>

<style scoped>
  p, h1 {
    margin: 0;
  }

  .space-between-here {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .info {
    color: #b2b2b2a9;
    padding-right: 50px;
  }

  .game-name {
    font-size: 1.5em;
  }

  .image-product {
    border-radius: 10px;
  }

  .align-center{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 7px;
  }

  .list-produtcs {
    display: flex;
    width: 100%;
    background-color: #f3f3f3;
    border-radius: 10px;
    padding: 10px 20px;
    align-items: center;
    gap: 12px;

  }

  .edit-link {
    text-decoration: none;
    color: #000;
  }

</style>