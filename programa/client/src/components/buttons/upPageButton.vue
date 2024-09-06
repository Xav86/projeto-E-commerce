<template>
  <div>
    <button class="btn botao" @click="topoDaPagina">/\</button>
  </div>
</template>

<script>
export default {
    methods: {
        topoDaPagina() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>

<style scoped>
 .botao {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    padding: 20px;
    background-color: #2999fe;
    border-radius: 50%;
    color: #fff;
 }

 .botao:hover {
    background-color: #1472c4;
 }
</style>