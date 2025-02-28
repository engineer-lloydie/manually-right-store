<template>
    <div>
        <v-sheet>
            <form @submit.prevent="continueAsGuest">
                <v-text-field
                    v-model="first_name.value.value"
                    :error-messages="first_name.errorMessage.value"
                    variant="outlined"
                    clearable
                    label="First Name"
                ></v-text-field>
            
                <v-text-field
                    v-model="last_name.value.value"
                    :error-messages="last_name.errorMessage.value"
                    variant="outlined"
                    clearable
                    label="Last Name"
                ></v-text-field>
                
                <v-text-field
                    v-model="email_address.value.value"
                    :error-messages="email_address.errorMessage.value"
                    variant="outlined"
                    clearable
                    label="Email Address"
                ></v-text-field>
            
                <v-btn
                    class="mt-2"
                    type="submit"
                    color="red-lighten-1"
                    block
                >
                    Checkout As Guest
                </v-btn>
            </form>
        </v-sheet>
    </div>
</template>

<script setup>
import { useField, useForm } from 'vee-validate'

const { handleSubmit } = useForm({
    validationSchema: {
        first_name (value) {
            if (value?.length >= 0) return true

            return 'First name is required.'
        },
        last_name (value) {
            if (value?.length >= 0) return true

            return 'Last name is required.'
        },
        email_address (value) {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (emailRegex.test(value)) return true

            return 'Must be a valid e-mail.'
        }
    },
})

const first_name = useField('first_name');
const last_name = useField('last_name');
const email_address = useField('email_address');

const { $hideModal } = useNuxtApp();

const continueAsGuest = handleSubmit(async (values) => {
    localStorage.setItem('checkoutInformation', JSON.stringify(values));
    $hideModal();
    navigateTo('/checkout');
})
</script>

<style lang="scss" scoped>

</style>