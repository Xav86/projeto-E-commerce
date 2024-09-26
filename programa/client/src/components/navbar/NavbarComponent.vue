<template>
  <div>
    <nav class="navbar">
        <div class="routes">
            <div class="logo-content">
                <logoComponent />
            </div>
            <div class="routes-content">
                <linksComponent />
            </div>
        </div>
        <div class="buttons">
            <cartButton />
            <div v-if="isLoged">
                <p>pra fazer ainda</p>
            </div>
            <div v-else>
              <loginButton />
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
import axios from 'axios';
import getToken from '@/utils/getToken.js';
import cartButton from '@/components/buttons/cartButton.vue';
import loginButton from '@/components/buttons/loginButton.vue';
import logoComponent from './navItens/logoComponent.vue';
import linksComponent from './navItens/linksComponent.vue';

export default {
  components: {
    cartButton,
    loginButton,
    logoComponent,
    linksComponent,
  },
  data() {
    return {
      isLoged: false
    }
  },
  async created() {
      const req = getToken();

      if (req) {
          try {
              await axios.post('http://localhost:8919/validate', {}, req);

              this.isLoged = true;
          } catch (error) {
              this.isLoged = false;
          }
      } else {
          this.isLoged = false;
      }
  }
}
</script>

<style>
    .navbar {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: nowrap;

        background-color: #fafafa;
        box-shadow: 0px 4px 10px #0000001a;
    }

    .routes {
        display: flex;
        flex-direction: row;

        gap: 17px;
    }

    .routes-content {
        display: flex;
        align-items: center;
    }

    .buttons {
        display: flex;
        gap: 7px;
        margin-right: 3px;
    }

</style>