import { useModalStore } from '@/store/modal';

export default defineNuxtPlugin((nuxtApp) => {
    const modalStore = useModalStore();
    
    return {
        provide: {
            showModal: (modalToShow) => {
                modalStore.isActiveModal = true;
                modalStore.activeModalComponent = modalToShow;
            },
            hideModal: () => {
                modalStore.isActiveModal = false;
                modalStore.activeModalComponent = null;
            }
        }
    }
})