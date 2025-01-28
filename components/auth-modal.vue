<template>
    <v-dialog v-model="props.active" width="auto">
        <v-card
            width="600"
        >
            <v-card-title>
                <h3 class="text-center font-weight-regular">New Member Registration</h3>
            </v-card-title>
            <v-card-item>
                <auth-register v-if="authForm == 'register'"></auth-register>
                <auth-login v-else></auth-login>
                <p v-if="authForm == 'register'" class="text-center mt-4">Already a member? <a @click="switchAuthForm('login')" href="javasript:;">Login here.</a></p>
                <p v-else class="text-center mt-4">Not yet a member? <a @click="switchAuthForm('register')" href="javasript:;">Register here.</a></p>  
            </v-card-item>
            <template v-slot:append>
                <v-btn
                    density="comfortable"
                    icon="$close"
                    variant="plain"
                    @click="$hideModal()"
                ></v-btn>
            </template>       
        </v-card>
    </v-dialog>
</template>

<script setup>
const props = defineProps({
    active: Boolean,
    default: false
});

const authForm = ref('login');

const switchAuthForm = (form) => {
    authForm.value = form;
}

const { $hideModal } = useNuxtApp();

</script>

<style lang="scss" scoped></style>
