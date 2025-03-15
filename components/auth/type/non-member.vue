<template>
    <div>
        <v-sheet class="mt-5">
            <form @submit.prevent="checkOrder">
                <v-select
                    v-model="type.value.value"
                    :error-messages="type.errorMessage.value"
                    :items="searchTypes"
                    item-value="value"
                    item-title="name"
                    label="Type"
                    variant="outlined"
                ></v-select>

                <v-text-field
                    v-model="searchQuery.value.value"
                    :error-messages="searchQuery.errorMessage.value"
                    variant="outlined"
                    clearable
                    label="Email Address, Order Number, or Transaction ID"
                ></v-text-field>

                <v-alert
                    v-if="errorMessage"
                    density="compact"
                    :text="errorMessage"
                    type="error"
                    closable
                ></v-alert>
            
                <v-btn
                    class="mt-2"
                    type="submit"
                    color="red-lighten-1"
                    block
                    :loading="processing"
                >
                    View Order
                </v-btn>
            </form>
        </v-sheet>
    </div>
</template>

<script setup>
import { useField, useForm } from 'vee-validate'
import { useOrderStore } from '@/store/order';
const { $hideModal } = useNuxtApp()

const { handleSubmit } = useForm({
    validationSchema: {
        searchQuery (value) {
            if (value?.length >= 0) return true

            return 'This field is required.'
        },
        type (value) {
            if (value?.length >= 0) return true

            return 'This field is required.'
        }
    },
    initialValues: {
        type: "order-number"
    },
})

const searchQuery = useField('searchQuery');
const type = useField('type');
const processing = ref(false);
const errorMessage = ref(null);

const orderStore = useOrderStore();

const checkOrder = handleSubmit(async (values) => {
    try {
        processing.value = true;
        errorMessage.value = null;
        const { orderMasterIds } = await useBaseFetch('/check-order', {
            method: 'get',
            params: values
        });

        if (orderMasterIds.length) {
            orderStore.setGuestOrderMasterIds(orderMasterIds);
            $hideModal();
            navigateTo('/orders')
        } else {
            errorMessage.value = 'No orders found. Please try again with different Email Address, Order Number, or Transaction ID.'
        }
    } catch (error) {
        errorMessage.value = error?.response?._data?.message ?? (error?.message ?? 'Unknown error occured. Please try again with a different email address.')
        console.error(error);
    } finally {
        processing.value = false;
    }
})

const searchTypes = [
    { name: 'Order Number', value: 'order-number' },
    { name: 'Transaction ID', value: 'transaction-id' },
    { name: 'Email Address', value: 'email-address' },
]
</script>

<style lang="scss" scoped>

</style>