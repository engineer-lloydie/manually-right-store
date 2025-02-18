<template>
    <div>
        <v-sheet>
            <form @submit.prevent="register">
                <v-text-field
                    v-model="first_name.value.value"
                    :counter="10"
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
            
                <v-btn
                    class="mt-2"
                    type="submit"
                    color="red-lighten-1"
                    block
                >
                    Register
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
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

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

const passwordVisible = ref(false);

const register = handleSubmit(async (values) => {
    try {
        const { status } = await useBaseFetch('/register', {
            method: 'POST',
            body: values
        })

        if (status == 200) {
            await login({
                email_address: values.email_address,
                password: values.password
            });
        }
    } catch (error) {
        console.error(error);
    }
})
</script>

<style lang="scss" scoped>

</style>