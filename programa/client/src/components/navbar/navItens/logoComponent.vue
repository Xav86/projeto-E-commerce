<template>
    <div>
      <div class="logo">
        <img src="@/assets/icons/controller.svg" alt="Controle na logo" class="icon">
        <router-link class="navbar-brand" to="/">Game Store</router-link>
      </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</template>

<style scoped>
  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;
  }

  .icon {
    width: 30px;
  }
</style>