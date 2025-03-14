import { useCartStore } from '@/store/cart';
import { useModalStore } from '@/store/modal';

export default defineNuxtPlugin((nuxtApp) => {
    const { login, logout } = useSanctumAuth();
    const cartStore = useCartStore();
    const modalStore = useModalStore();
    
    return {
        provide: {
            login: async (values, strategy) => {
                try {
                    values.auth_method = strategy;
                    await login(values);

                    modalStore.isActiveModal = false;
                    modalStore.activeModalComponent = null;

                    if (cartStore.cartItems.length) {
                        await cartStore.transferCart();
                    }

                    if (modalStore.fromCheckout) {
                        navigateTo('/checkout');
                    } else {
                        cartStore.fetchCartItems();
                    }
                } catch (error) {
                    throw error;
                }
            },
            logout: async () => {
                try {
                    await logout();

                    cartStore.fetchCartItems();
                } catch (error) {
                    throw error;
                }
            }
        }
    }
})