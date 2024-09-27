<template>
    <div class="background">
        <NavbarComponent />
        <div class="container-list-user">
            <div class="list-users">
                <div class="list">
                    <CardUser v-for="data in dados" :key="data.USER_ID" :dados="data" />
                </div>
            </div>
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import axios from 'axios';
import getToken from '@/utils/getToken';
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
            dados: []
        }
    },
    async created() {
        const req = getToken();

        try {
            const result = await axios.get('http://localhost:8919/users', req);
            
            this.dados = result.data;
        } catch(error) {
            console.log(error.response.data.error)
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

    .list {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 10px;
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
        transition: .2s;
    }

    @media (max-width: 800px) {
        .list-users {
            width: 100%;
        }
    }


</style>