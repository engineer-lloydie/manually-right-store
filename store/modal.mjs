import { defineStore } from 'pinia'

export const useModalStore = defineStore("modal", {
    state: () => {
        return {
            isActiveModal: false,
            activeModalComponent: null
        };
    },
    getters: {
        modalActive: (state) => {
            return state.isActiveModal
        },
        modalComponent: (state) => {
            return state.activeModalComponent
        }
    },
    actions: {
        showModal(modalToShow) {
            this.isActiveModal = true;
            this.activeModalComponent = modalToShow;
        },
        hideModal() {
            this.isActiveModal = false;
            this.activeModalComponent = null;
        }
    }
});