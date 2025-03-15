<template>
    <div>
        <v-sheet>
            <v-tabs
                v-model="tab"
                align-tabs="center"
                color="red-lighten-1"
                v-if="!modalStore.fromCheckout"
            >
                <v-tab :value="'member'">Member</v-tab>
                <v-tab :value="'non_member'">Non-member</v-tab>
            </v-tabs>
            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="member">
                    <MemberAuth/>
                </v-tabs-window-item>

                <v-tabs-window-item value="non_member">
                    <NonMemberOrder/>
                </v-tabs-window-item>
            </v-tabs-window>
        </v-sheet>
    </div>
</template>

<script setup>
import MemberAuth from '~/components/auth/type/member.vue';
import NonMemberOrder from '~/components/auth/type/non-member.vue';
import { useModalStore } from '@/store/modal';

const tab = ref('member');

const modalStore = useModalStore();
</script>

<style lang="scss" scoped>

</style>