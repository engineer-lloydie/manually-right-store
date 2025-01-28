<template>
    <div>
        <v-sheet>
            <form @submit.prevent="signin">
                <v-text-field
                    v-model="emailAddress.value.value"
                    :error-messages="emailAddress.errorMessage.value"
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
                    Sign In
                </v-btn>
            </form>
        </v-sheet>
    </div>
</template>

<script setup>
import { useField, useForm } from 'vee-validate'

const { handleSubmit } = useForm({
    validationSchema: {
        emailAddress (value) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

            return 'Must be a valid e-mail.'
        },
        password (value) {
            if (value?.length >= 8) return true

            return 'Password needs to be at least 8 characters.'
        }
    },
})

const emailAddress = useField('emailAddress');
const password = useField('password');

const passwordVisible = ref(false);

const signin = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
})
</script>

<style lang="scss" scoped>

</style>