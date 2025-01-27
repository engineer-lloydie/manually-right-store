import { useModalStore } from '@/store/modal';

export default defineNuxtPlugin((nuxtApp) => {
    const modalStore = useModalStore();

    modalStore.showModal = (modalToShow) => {
        modalStore.isActiveModal = true;
        modalStore.activeModalComponent = modalToShow;
    };

    modalStore.hideModal = () => {
        modalStore.isActiveModal = false;
        modalStore.activeModalComponent = null;
    };
})