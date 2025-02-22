import { defineStore } from 'pinia'

export const useOrderStore = defineStore("order", {
    state: () => {
        return {
            orderMasterIds: null
        };
    },
    getters: {
        guestOrderMasterIds: (state) => {
            return state.orderMasterIds
        }
    },
    actions: {
        setGuestOrderMasterIds(orderMasterIds) {
            this.orderMasterIds = orderMasterIds;
        }
    }
});