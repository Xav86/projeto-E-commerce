<template>
    <div>
        <NavbarComponent />
        <div class="container">
            <div>
               <h1>Nome do Jogo legal</h1>
               <div class="game">
                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="@/assets/images/500x350.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                            <img src="@/assets/images/500x350.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                            <img src="@/assets/images/500x350.png" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
               </div>
            </div>
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import FooterComponent from '@/components/footer/footerComponent.vue';
import NavbarComponent from '@/components/navbar/NavbarComponent.vue';

    export default {
        name: 'ProductView',
        components: {
            NavbarComponent,
            FooterComponent
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        min-width: 100%;
        padding: 2rem 4rem;
        margin: 0;
        min-height: 74.6vh;
    }

    .game {
        width: 500px;
    }

</style>