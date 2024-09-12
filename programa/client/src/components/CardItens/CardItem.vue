<template>
  <div>
    <div class="card">
        <img src="@/assets/images/286x180.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <router-link to="/product/algo" class="btn btn-primary">Go somewhere</router-link>
        </div>
    </div>
  </div>
</template>

<style scoped>
  .card {
    width: 18rem;
  }

@media (max-width: 740px) {
  .card-item {
    width: 90%;
  }

  .card {
    width: 100%
  }
 }

</style>