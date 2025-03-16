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
import { useModalStore } from '@/store/modal';

const props = defineProps({
    active: Boolean,
    default: false
});

const { $hideModal } = useNuxtApp();
const modalStore = useModalStore();

modalStore.setAuthForm('member');

const switchAuthForm = (value) => {
    modalStore.setAuthForm(value);
}

const cardProperties = computed(() => {
    switch (modalStore.authFormDisplay) {
        case 'member':
            return {
                redirectFlag: 'register',
                cardTitle: 'Sign In To Your Account',
                bottomText: 'Not yet a member?',
                bottomTextUrl: 'Register here.'
            }
    
        case 'guest_checkout':
            return {
                redirectFlag: 'register',
                cardTitle: 'Continue As Guest',
                bottomText: 'Not yet a member?',
                bottomTextUrl: 'Register here.'
            };

        case 'non_member':
            return {
                redirectFlag: 'register',
                cardTitle: 'View Order as Non-Member',
                bottomText: 'Not yet a member?',
                bottomTextUrl: 'Register here.'
            };

        default:
            return {
                redirectFlag: 'member',
                cardTitle: 'New Member Registration',
                bottomText: 'Already a member?',
                bottomTextUrl: 'Login here.'
            }
    }
});

const currentComponent = computed(() => {
    switch (modalStore.authFormDisplay) {
        case 'member':
        case 'non_member':
        case 'guest_checkout':
            return AuthLogin;
        
        default:
            return AuthRegister;
    }
});

</script>

<style lang="scss" scoped></style>
