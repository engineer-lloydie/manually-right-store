<template>
    <div>
        <v-sheet>
            <v-tabs
                v-model="tab"
                align-tabs="center"
                color="red-lighten-1"
                @update:model-value="setAuthForm"
            >
                <v-tab :value="'member'">Member</v-tab>
                <v-tab v-if="!modalStore.fromCheckout" :value="'non_member'">Non-member</v-tab>
                <v-tab v-else :value="'guest_checkout'">Guest</v-tab>
            </v-tabs>
            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="member">
                    <MemberAuth/>
                </v-tabs-window-item>

                <v-tabs-window-item value="non_member">
                    <NonMemberOrder/>
                </v-tabs-window-item>

                <v-tabs-window-item value="guest_checkout">
                    <GuestCheckout/>
                </v-tabs-window-item>
            </v-tabs-window>
        </v-sheet>
    </div>
</template>

<script setup>
import MemberAuth from '~/components/auth/type/member.vue';
import NonMemberOrder from '~/components/auth/type/non-member.vue';
import GuestCheckout from '~/components/auth/type/guest.vue';
import { useModalStore } from '@/store/modal';

const tab = ref('member');

const modalStore = useModalStore();

const setAuthForm = () => {
    modalStore.setAuthForm(tab);
}
</script>

<style lang="scss" scoped>

</style>