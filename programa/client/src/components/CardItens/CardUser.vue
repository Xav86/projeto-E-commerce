<template>
    <div class="list-card">
        Email: {{ dados.EMAIL }}
        <div class="action">
            <abbr title="editar usuário" class="edit"><img src="@/assets/icons/pencil-square.svg" alt="icone de edição" data-bs-toggle="modal" data-bs-target="#exampleModal"></abbr> |
            <abbr title="excluir usuário" class="delete"><img src="@/assets/icons/trash3.svg" alt="icone de exclusão"></abbr>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
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
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        padding: 10px 20px;
        
        background-color: #fafafa;
        border-radius: 10px;
        color: #000;
        border: 3px solid #0d2388;
        transition: .2s;
    }

    .list-card:hover {
        background-color: #e2e2e2;
    }

    .action {
        display: flex;
        flex-direction: row;

        gap: 7px;
    }

    .edit {
        cursor: pointer;
    }

    .delete {
        cursor: pointer;
    }

</style>