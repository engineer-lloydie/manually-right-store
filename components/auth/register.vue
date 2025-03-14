<template>
    <div>
        <v-sheet>
            <form @submit.prevent="register">
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
                
                <v-text-field
                    v-model="password.value.value"
                    :error-messages="password.errorMessage.value"
                    :append-inner-icon="passwordVisible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="passwordVisible ? 'text' : 'password'"
                    variant="outlined"
                    clearable
                    label="Password"
                    @click:append-inner="passwordVisible = !passwordVisible"
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
                    Register
                </v-btn>
            </form>
        </v-sheet>
    </div>
</template>

<script setup>
import { useField, useForm } from 'vee-validate'
const { $hideModal, $login } = useNuxtApp()

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
        },
        password (value) {
            if (value?.length >= 8) return true

            return 'Password needs to be at least 8 characters.'
        }
    },
})

const first_name = useField('first_name');
const last_name = useField('last_name');
const email_address = useField('email_address');
const password = useField('password');
const processing = ref(false);
const errorMessage = ref(null);

const passwordVisible = ref(false);

const register = handleSubmit(async (values) => {
    try {
        processing.value = true;
        errorMessage.value = null;
        await useBaseFetch('/register', {
            method: 'POST',
            body: values
        });

        await $login({
            email_address: values.email_address,
            password: values.password
        }, 'email_password');
    } catch (error) {
        errorMessage.value = error?.response?._data?.message ?? (error?.message ?? 'Unknown error occured. Please try again with a different email address.')
        console.error(error);
    } finally {
        processing.value = false;
    }
})
</script>

<style lang="scss" scoped>

</style>