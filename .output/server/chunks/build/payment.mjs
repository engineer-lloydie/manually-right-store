import { defineStore } from 'pinia';

const usePaymentStore = defineStore("payment", {
  state: () => {
    return {
      transactionDetails: null
    };
  },
  getters: {
    orderTransactionDetails: (state) => {
      return state.transactionDetails;
    }
  },
  actions: {
    setTransactionDetails(transactionDetails) {
      this.transactionDetails = transactionDetails;
    }
  }
});

export { usePaymentStore as u };
//# sourceMappingURL=payment.mjs.map
