<template>
    <div>
        <NavbarComponent />
        <div class="container">
            <div>
               <h1>Nome do Jogo legal, bem grande o nome só pra ver como fica.</h1>
               <div class="game-container">
                   <div class="game">
                        <CarouselGameBase />
                   </div>
                   <div class="game-buy">
                       <h2>R$ 666,66</h2>

                       <router-link to="/cart" class="btn btn-primary">Comprar!!!!</router-link>
                   </div>
               </div>
               <div class="description">
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab a beatae, sint sequi architecto cum cupiditate deserunt culpa hic recusandae placeat eligendi quo ipsum, dignissimos dicta, totam inventore aut!
                   In consequuntur, minima magnam architecto doloribus ut autem doloremque, voluptatum id qui recusandae eum pariatur assumenda cumque quia quo alias corporis! Incidunt distinctio voluptatum voluptatibus quia laboriosam vitae voluptas aut.</p>
               </div>
            </div>
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import FooterComponent from '@/components/footer/footerComponent.vue';
import NavbarComponent from '@/components/navbar/NavbarComponent.vue';
import CarouselGameBase from '@/components/Carousel/CarouselGameBase.vue'

    export default {
        name: 'ProductView',
        components: {
            NavbarComponent,
            FooterComponent,
            CarouselGameBase
        }
    }
</script>

<style scoped>
    h1 {
        margin-bottom: 17px;
    }

    .game-container {
        display: flex;
        flex-direction: row;
        gap: 17px;
    }

    .container {
        display: flex;
        min-width: 100%;
        padding: 2rem 4rem;
        margin: 0;
        min-height: 74.6vh;
    }

    .game-buy {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 40px 20px 0;
    }

    .game {
        width: 500px;
    }

    .description {
        margin-top: 20px;
    }

</style>