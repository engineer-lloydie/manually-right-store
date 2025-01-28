<template>
    <div>
        <v-sheet>
            <form @submit.prevent="submit">
                <v-text-field
                    v-model="firstName.value.value"
                    :counter="10"
                    :error-messages="firstName.errorMessage.value"
                    variant="outlined"
                    clearable
                    label="First Name"
                ></v-text-field>
            
                <v-text-field
                    v-model="lastName.value.value"
                    :error-messages="lastName.errorMessage.value"
                    variant="outlined"
                    clearable
                    label="Last Name"
                ></v-text-field>
                
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
                    type="password"
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
        firstName (value) {
            if (value?.length >= 0) return true

            return 'First name is required.'
        },
        lastName (value) {
            if (value?.length >= 0) return true

            return 'Last name is required.'
        },
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

const firstName = useField('firstName');
const lastName = useField('lastName');
const emailAddress = useField('emailAddress');
const password = useField('password');

const passwordVisible = ref(false);

const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
})
</script>

<style lang="scss" scoped>

</style>