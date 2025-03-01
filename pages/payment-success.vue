<template>
    <v-container v-if="paymentStore.orderTransactionDetails">
        <h1 class="text-center mb-10">Transaction Was Successful</h1>
        <v-sheet class="d-flex justify-center">
            <v-icon size="100" color="success">
                mdi-check-circle
            </v-icon>
        </v-sheet>

        <v-sheet class="d-flex flex-column align-center mt-10">
            <p class="my-2">Order Number: {{ paymentStore.orderTransactionDetails.orderNumber }}</p>
            <p class="my-2">Transaction ID: {{ paymentStore.orderTransactionDetails.transactionId }}</p>
            <p class="my-2">Total Amount Paid: ${{ paymentStore.orderTransactionDetails.totalPrice }}</p>

            <v-btn color="primary" @click="copyToClipboard">Copy</v-btn>
        </v-sheet>

        <v-divider class="ma-10" inset></v-divider>

        <v-sheet class="mb-10">
            <h2 class="text-center">Thank you for your order. </h2>
        </v-sheet>

        <v-sheet class="d-flex justify-center">
            <v-btn to="/orders" color="red-lighten-1">Go to orders</v-btn>
        </v-sheet>
    </v-container>
</template>

<script setup>
import { usePaymentStore } from '@/store/payment';

definePageMeta({
    layout: false,
});

const paymentStore = usePaymentStore();

if (!paymentStore.orderTransactionDetails) {
    navigateTo('/');
}

const copyToClipboard = async () => {
  const clipboardText = `Order Number: ${paymentStore.orderTransactionDetails.orderNumber}
    Transaction ID: ${paymentStore.orderTransactionDetails.transactionId}
    Total Amount Paid: $${paymentStore.orderTransactionDetails.totalPrice}`;

  try {
    await navigator.clipboard.writeText(clipboardText);
    alert('Copied to clipboard!');
  } catch (err) {
    console.error('Failed to copy:', err);
  }
};

</script>

<style lang="scss" scoped>

</style>