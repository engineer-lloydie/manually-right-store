import { defineStore } from 'pinia'

export const useCartStore = defineStore("cart", {
    state: () => {
        return {
            carts: [],
            count: 0,
            total: 0,
            fetching: false,
            processing: false,
            cartAdded: false
        };
    },
    getters: {
        cartItems: (state) => {
            return state.carts;
        },
        totalCount: (state) => {
            return state.count;
        },
        totalPrice: (state) => {
            return state.total;
        },
        fetchingCarts: (state) => {
            return state.fetching;
        },
        addingCart: (state) => {
            return state.processing;
        },
        newCartAdded: (state) => {
            return state.cartAdded;
        }
    },
    actions: {
        async fetchCartItems() {
            const { isAuthenticated, user } = useSanctumAuth();

            try {
                this.fetching = true;

                const params = {};
        
                if (isAuthenticated.value) {
                    params.userId = user.value.id;
                } else {
                    params.guestId = localStorage.getItem('guestId')
                }
        
                const { data, count, total } = await useBaseFetch('/carts', {
                    method: 'GET',
                    params: params
                })
        
                this.carts = data;
                this.total = total;
                this.count = count;
            } catch (error) {
                console.error(error);
            } finally {
                this.fetching = false;
            }
        },
        async addToCart(params) { 
            try {
                this.processing = true;
        
                await useBaseFetch('/carts', {
                    method: 'POST',
                    body: params
                })
            } catch (error) {
                console.error(error);
                throw error;
            } finally {
                this.processing = false;
            }
        },
        async transferCart() {
            const { user } = useSanctumAuth();

            try {
                const cartIds = this.cartItems.map(cart => cart.id);
                
                await useBaseFetch('/carts/transfer', {
                    method: 'POST',
                    body: {
                        userId: user.value.id,
                        cartIds: cartIds
                    }
                })
            } catch (error) {
                console.error(error);
            }
        },
        setNewAddedCart(value) {
            this.cartAdded = value;
        }
    }
});