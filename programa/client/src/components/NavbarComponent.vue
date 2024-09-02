<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary nav-underline justify-content-center">
      <div class="container-fluid">
        <logoComponent />
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <linksComponent />
          <form class="d-flex gap-2">
            <SearchComponent />
            <cartButton />
            <loginButton />
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import cartButton from './navbar/buttons/cartButton.vue';
import loginButton from './navbar/buttons/loginButton.vue';
import logoComponent from './navbar/logoComponent.vue';
import linksComponent from './navbar/linksComponent.vue';
import SearchComponent from './navbar/SearchComponent.vue';

export default {
  components: {
    cartButton,
    loginButton,
    logoComponent,
    linksComponent,
    SearchComponent
  }
}
</script>

<style>
  .navbar {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

</style>