<template>
    <div class="list-cart">
        <img src="@/assets/images/150x95.png" alt="Imagem do produto" class="image-product">
        <div class="space-between">
            <router-link to="/product/joguinho-gamer" class="cart-link">
              <h1 class="game-name">nome do jogo</h1>
            </router-link>
            <div class="align-center">
            <p>R$00,00</p>
            <button class="btn p-0 align-center"><img src="@/assets/icons/trash.svg" alt="icone de uma lixeira para excluir itens"></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  p, h1 {
    margin: 0;
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

  .list-cart {
    display: flex;
    width: 100%;
    background-color: #f3f3f3;
    border-radius: 10px;
    padding: 10px 20px;
    align-items: center;
    gap: 12px;

  }

  .cart-link {
    text-decoration: none;
    color: #000;
  }

</style>