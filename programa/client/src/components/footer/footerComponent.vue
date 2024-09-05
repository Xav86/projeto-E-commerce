<template>
    <div class="footer">
        <div class="description">
            <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae vero veritatis maiores iste facilis voluptatum tempore qui earum a assumenda neque, quas id dolorem, quod et consequatur aliquam laborum? Recusandae.</small>
        </div>
        <hr>
        <div class="footer-itens-between">
            <div class="logo">
                <img src="@/assets/icons/controller.svg" alt="Controle na logo" class="icon">
                <a class="navbar-brand" href="#">Game Store</a>
            </div>
            <p>&copy; Gustavo</p>
        </div>
    </div>    
</template>

<script>


export default {

}

</script>


<style scoped>
    .footer {
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: #cacaca;
        padding: 0 10% 20px 10%;
    }

    .description {
        padding: 20px;
        text-align: center;
    }

    .logo {
        display: flex;
        flex-direction: row;
        gap: 2px;
    }

    .footer-itens-between {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
    }

    .icon {
        width: 30px;
    }

    p {
        margin: 0;
    }
</style>