<template>
    <div class="list">
        <div v-for="data in dados" :key="data.id" class="list-card">
            Email: {{ data.email }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dados: Array
    }

}
</script>

<style scoped>
    .list-card {
        min-width: 75%;

        padding: 10px 20px;
        
        background-color: #fafafa;
        border-radius: 10px;
        color: #000;
        border: 3px solid #0d2388;
    }

    .list {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 12px;
    }
</style>