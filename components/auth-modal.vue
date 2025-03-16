<template>
    <v-dialog v-model="props.active" persistent :mobile="true" max-width="600">
        <v-card
            width="auto"
            max-width="600"
        >
            <v-card-title>
                <h3 class="text-center font-weight-regular text-wrap">{{ cardProperties.cardTitle }}</h3>
            </v-card-title>
            <v-card-text>
                <component :is="currentComponent"></component>
                <p class="text-center mt-4">
                    {{ cardProperties.bottomText }}
                    <a @click="switchAuthForm(cardProperties.redirectFlag)" href="javascript:;">
                        {{ cardProperties.bottomTextUrl }}
                    </a>
                </p>
            </v-card-text>
            <template v-slot:append>
                <v-btn
                    density="comfortable"
                    icon="$close"
                    variant="plain"
                    @click="$hideModal(); modalStore.setCheckoutSource(false);"
                ></v-btn>
            </template>       
        </v-card>
    </v-dialog>
</template>

<script setup>
import AuthLogin from '~/components/auth/login.vue';
import AuthRegister from '~/components/auth/register.vue';
import AuthGuest from '~/components/auth/type/guest.vue';
import { useModalStore } from '@/store/modal';

const props = defineProps({
    active: Boolean,
    default: false
});

const authForm = ref('login');
const { $hideModal } = useNuxtApp();
const modalStore = useModalStore();

const switchAuthForm = (value) => {
    authForm.value = value;
    modalStore.setAuthForm(value);
}

const cardProperties = computed(() => {
    switch (authForm.value) {
        case 'login':
            return {
                redirectFlag: 'register',
                cardTitle: 'Sign In To Your Account',
                bottomText: 'Not yet a member?',
                bottomTextUrl: 'Register here.'
            }
        
        case 'register':
            return {
                redirectFlag: 'login',
                cardTitle: 'New Member Registration',
                bottomText: 'Already a member?',
                bottomTextUrl: 'Login here.'
            }
    
        case 'guest':
            return {
                redirectFlag: 'login',
                cardTitle: 'Continue As Guest',
                bottomText: 'Already a member?',
                bottomTextUrl: 'Login here.'
            };

        default: 
            return {
                redirectFlag: 'login',
                cardTitle: 'View Order as Non-Member',
                bottomText: 'Already a member?',
                bottomTextUrl: 'Login here.'
            };
    }
});

const currentComponent = computed(() => {
    switch (authForm.value) {
        case 'login':
            return AuthLogin;
        
        case 'register':
            return AuthRegister;
    
        case 'guest':
            return AuthGuest
    }
});

</script>

<style lang="scss" scoped></style>
