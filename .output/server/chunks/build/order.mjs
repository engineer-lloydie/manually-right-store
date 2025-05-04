import { defineStore } from 'pinia';

const useOrderStore = defineStore("order", {
  state: () => {
    return {
      orderMasterIds: null
    };
  },
  getters: {
    guestOrderMasterIds: (state) => {
      return state.orderMasterIds;
    }
  },
  actions: {
    setGuestOrderMasterIds(orderMasterIds) {
      this.orderMasterIds = orderMasterIds;
    }
  }
});

export { useOrderStore as u };
//# sourceMappingURL=order.mjs.map
