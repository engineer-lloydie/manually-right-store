<template>
    <v-container>
        <v-divider></v-divider>
        <v-sheet class="my-5">
            <h2 class="mb-3">Get in Touch</h2>
            <p>If you have any inquiries or require assistance, please complete the form below. Our team strives to provide a response within one business day.</p>
        </v-sheet>
        <v-form>
            <v-sheet max-width="500px">
                <v-text-field label="Enter your first name"
                    class="mb-2"
                    v-model="firstName.value.value"
                    :error-messages="firstName.errorMessage.value"
                    variant="outlined"
                ></v-text-field>
                <v-text-field label="Enter your email address"
                    class="mb-2"
                    v-model="email.value.value"
                    :error-messages="email.errorMessage.value"
                    variant="outlined"
                ></v-text-field>
                <v-textarea label="Enter your message"
                    class="mb-2"
                    v-model="message.value.value"
                    :error-messages="message.errorMessage.value"
                    variant="outlined"
                ></v-textarea>
                <v-btn @click.prevent="sendMessage"
                    :loading="submitting"
                    color="red-lighten-1"
                    class="text-none"
                    block
                >
                    Send Message
                </v-btn>
            </v-sheet>
        </v-form>
        <v-dialog
            v-model="successDialog"
            width="auto"
        >
            <v-card
                max-width="400"
                prepend-icon="mdi-check"
                text="Your message has been sent successfully."
                title="Message sent successfully"
            >
                <template v-slot:actions>
                    <v-btn
                        class="ms-auto"
                        text="Ok"
                        @click="successDialog = false"
                    ></v-btn>
                </template>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script setup>
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

definePageMeta({
    title: 'Contact Us'
});

const submitting = ref(false);
const successDialog = ref(false);

const { handleSubmit, resetForm } = useForm({
    initialValues: {
        firstName: '',
        email: '',
        message: ''
    },
    validationSchema: yup.object({
        firstName: yup.string().required('First name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        message: yup.string().required('Message is required')
    })
});
const firstName = useField('firstName');
const email = useField('email');
const message = useField('message');

const sendMessage = handleSubmit(async (values) => {
    try {
        submitting.value = true;
        
        await useBaseFetch('/inquiries/message', {
            method: 'POST',
            body: values
        });

        successDialog.value = true;
        resetForm();
    } catch (error) {
        console.error('Error sending message:', error);
    } finally {
        submitting.value = false;
    }
});

</script>

<style lang="scss" scoped>

</style>