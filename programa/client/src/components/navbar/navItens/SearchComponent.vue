<template>
    <div class="seach-input">
        <div class="input-group">
            <span class="input-group-text" id="basic-addon1"><img src="@/assets/icons/search.svg" alt="icone de pesquisa"></span>
            <input type="text" name="search" id="search" class="form-control" placeholder="Digite aqui para pesquisar" aria-label="Search">
        </div>
    </div>
</template>

<style scoped>
    .seach-input {
        width: 500px;
    }

    @media (max-width: 991px) {
        .seach-input {
        width: 100%;
    }
    }
</style>