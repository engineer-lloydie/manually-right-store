import { defineStore } from 'pinia'

export const useAuthStore = defineStore("auth", {
    state: () => {
        return {
            guestCredentials: null
        };
    },
    getters: {
        guestCheckoutCredentials: (state) => {
            return state.guestCredentials
        }
    },
    actions: {
        setGuestCredentials(guestCredentials) {
            this.guestCredentials = guestCredentials;
        }
    }
});