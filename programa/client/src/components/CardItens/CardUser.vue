<template>
    <div :class="['list-card', {'no-transform': isModalOpen }]">
        <div>Email: {{ dados.EMAIL }}</div>
        <div class="action">
            <abbr title="editar usuário" class="edit">
            <img src="@/assets/icons/pencil-square.svg" alt="icone de edição" @click="openModal"/>
            </abbr> |
            <abbr title="excluir usuário" class="delete">
            <img src="@/assets/icons/trash3.svg" alt="icone de exclusão" />
            </abbr>
        </div>
  
        <!-- Modal -->
        <b-modal id="editModal" size="lg" v-model="isModalOpen" title="Modal title" @hide="closeModal">
            <div class="modal-body">
                <!-- Conteúdo do modal -->
                Conteúdo do modal
            </div>
    
            <template #modal-footer>
                <b-button variant="secondary" @click="closeModal">Close</b-button>
                <b-button variant="primary">Save changes</b-button>
            </template>
        </b-modal>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      dados: {
        type: Object
      }
    },
    data() {
      return {
        isModalOpen: false
      };
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      }
    }
  };
  </script>

<style scoped>
    .list-card {
        width: 75%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;

        padding: 10px 20px;
        
        background-color: #fafafa;
        border-radius: 10px;
        color: #000;
        border: 3px solid #0d2388;
        transition: all .3s;
    }

    .list-card:hover {
        transform: translateX(-7px);
        background-color: #e2e2e2;
    }

    .no-transform:hover {
        transform: none;
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

    @media (max-width: 390px) {
        .list-card {
            width: 100%;
        }
    }

</style>