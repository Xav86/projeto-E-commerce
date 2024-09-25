<template>
    <div class="background">
        <NavbarComponent />
        <div class="container-list-user">
            <div class="list-users">
                <CardUser :dados="dados" />
            </div>
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import CardUser from '@/components/CardItens/CardUser.vue';
import FooterComponent from '@/components/footer/footerComponent.vue';
import NavbarComponent from '@/components/navbar/NavbarComponent.vue';

export default {
    components: {
        NavbarComponent,
        FooterComponent,
        CardUser
    },
    data() {
        return {
            dados: [
            {
                    id: 2,
                    email: 'gustavo@gustavo',
                    role: 0
                },
                {
                    id: 22,
                    email: 'gustavo24@gustavo',
                    role: 1
                },
                {
                    id: 2,
                    email: 'gustavo@gustavo',
                    role: 0
                },
                {
                    id: 22,
                    email: 'gustavo24@gustavo',
                    role: 1
                },
                {
                    id: 2,
                    email: 'gustavo@gustavo',
                    role: 0
                },
                {
                    id: 22,
                    email: 'gustavo24@gustavo',
                    role: 1
                }
            ]
        }
    }
}
</script>

<style scoped>
    .background {
        background-image: url('@/assets/images/retro-background-adm.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: center;
        background-attachment: fixed;
    }

    .container-list-user {
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;

        background-color: #000000a3;
        color: #fff;
    }

    .list-users {
        width: 80%;
        height: 100vh;
        display: flex;
        justify-content: center;

        padding: 30px 0;
    }


</style>