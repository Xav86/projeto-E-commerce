<template>
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="@/assets/images/1080x200.png" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <button class="btn btn-primary">teste</button>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="10000">
      <img src="@/assets/images/1080x200.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="10000">
      <img src="@/assets/images/1080x200.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item" data-bs-interval="10000">
      <img src="@/assets/images/1080x200.png" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>slide 4 label</h5>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>