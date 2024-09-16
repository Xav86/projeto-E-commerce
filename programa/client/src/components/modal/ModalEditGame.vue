<template>
    <div class="modal fade" id="product" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="productModalLabel">Edição do Jogo</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="name" class="form-label">Nome do Jogo</label>
                            <input type="text" class="form-control" id="name" name="name" placeholder="nomeLegal!">
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Preço</label>
                            <input type="text" class="form-control" id="price" name="price" placeholder="66,66">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger">Excluir</button>
                    <button type="button" class="btn btn-success">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>