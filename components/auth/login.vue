<template>
    <div>
        <v-sheet>
            <form @submit.prevent="signin">
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
                    :loading="loading"
                >
                    Sign In
                </v-btn>
            </form>
        </v-sheet>
    </div>
</template>

<script setup>
import { useField, useForm } from 'vee-validate'

const { $hideModal, $login } = useNuxtApp()
const errorMessage = ref(null);
const loading = ref(false);

const { handleSubmit } = useForm({
    validationSchema: {
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

const email_address = useField('email_address');
const password = useField('password');

const passwordVisible = ref(false);

const signin = handleSubmit(async (values) => {
    try {
        loading.value = true;
        errorMessage.value = null;
        await $login(values);
    } catch (error) {
        if (error?.response && error?.response?._data?.message) {
            errorMessage.value = error.response._data.message;
        } else {
            errorMessage.value = "Something went wrong. Please try again."
        }
    } finally {
        loading.value = false;
    }
})
</script>

<style lang="scss" scoped>

</style>