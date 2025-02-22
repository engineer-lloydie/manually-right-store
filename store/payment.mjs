import { defineStore } from 'pinia'

export const usePaymentStore = defineStore("payment", {
    state: () => {
        return {
            transactionDetails: null
        };
    },
    getters: {
        orderTransactionDetails: (state) => {
            return state.transactionDetails
        }
    },
    actions: {
        setTransactionDetails(transactionDetails) {
            this.transactionDetails = transactionDetails;
        }
    }
});