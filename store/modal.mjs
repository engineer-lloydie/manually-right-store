import { defineStore } from 'pinia'

export const useModalStore = defineStore("modal", {
    state: () => {
        return {
            isActiveModal: false,
            activeModalComponent: null,
            isFromCheckout: false,
            authForm: null
        };
    },
    getters: {
        modalActive: (state) => {
            return state.isActiveModal;
        },
        modalComponent: (state) => {
            return state.activeModalComponent;
        },
        fromCheckout: (state) => {
            return state.isFromCheckout;
        },
        authFormDisplay: (state) => {
            return state.authForm;
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
        },
        setCheckoutSource(value) {
            this.isFromCheckout = value;
        },
        setAuthForm(value) {
            this.authForm = value;
        }
    }
});