<template>
    <v-dialog v-model="props.active" width="auto" persistent>
        <v-card
            width="600"
        >
            <v-card-title>
                <h3 class="text-center font-weight-regular">{{ cardProperties.cardTitle }}</h3>
            </v-card-title>
            <v-card-text>
                <component :is="currentComponent"></component>
                <p class="text-center mt-4">
                    {{ cardProperties.bottomText }}
                    <a @click="switchToLoginForm(!isLogin)" href="javascript:;">
                        {{ cardProperties.bottomTextUrl }}
                    </a>
                </p>
            </v-card-text>
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
import AuthLogin from '~/components/auth/login.vue';
import AuthRegister from '~/components/auth/register.vue';

const props = defineProps({
    active: Boolean,
    default: false
});

const isLogin = ref(true);

const switchToLoginForm = (value) => {
    isLogin.value = value;
}

const cardProperties = computed(() => {
    if (isLogin.value) {
        return {
            cardTitle: 'Sign In To Your Account',
            bottomText: 'Not yet a member?',
            bottomTextUrl: 'Register here.'
        }
    } else {
        return {
            cardTitle: 'New Member Registration',
            bottomText: 'Already a member?',
            bottomTextUrl: 'Login here.'
        }
    }
});

const { $hideModal } = useNuxtApp();

const currentComponent = computed(() => {
    return isLogin.value ? AuthLogin : AuthRegister;
});

</script>

<style lang="scss" scoped></style>
