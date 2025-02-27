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

                <v-sheet v-if="modalStore.fromCheckout && authForm != 'guest'" class="mt-5 text-center">
                    <v-btn @click="switchAuthForm('guest')" color="red-lighten-1" variant="outlined">Continue as guest</v-btn>
                </v-sheet>
                <v-sheet v-if="!modalStore.fromCheckout && authForm != 'order'" class="mt-5 text-center">
                    <v-btn @click="switchAuthForm('order')" color="red-lighten-1" variant="outlined">Non-Member Order</v-btn>
                </v-sheet>
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
import AuthGuest from '~/components/auth/guest.vue';
import NonMemberOrder from '~/components/auth/order.vue';
import { useModalStore } from '@/store/modal';

const props = defineProps({
    active: Boolean,
    default: false
});

const authForm = ref('login');

const switchAuthForm = (value) => {
    authForm.value = value;
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

const { $hideModal } = useNuxtApp();
const modalStore = useModalStore();

const currentComponent = computed(() => {
    switch (authForm.value) {
        case 'login':
            return AuthLogin;
        
        case 'register':
            return AuthRegister;
    
        case 'guest':
            return AuthGuest

        default:
            return NonMemberOrder;
    }
});

</script>

<style lang="scss" scoped></style>
