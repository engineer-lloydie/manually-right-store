<template>
    <v-dialog v-model="props.active" width="auto">
        <v-card
            max-width="400"
            prepend-icon="mdi-update"
            text="Your application will relaunch automatically after the update is complete."
            title="Update in progress"
        >
            <template v-slot:actions>
                <v-btn
                    class="ms-auto"
                    text="Ok"
                    @click="hideAccountModal()"
                ></v-btn>
            </template>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { useModalStore } from '@/store/modal';

const props = defineProps({
    active: Boolean,
    default: false
});

const { hideModal } = useModalStore();

const hideAccountModal = (modalComponent) => {
    hideModal(modalComponent);
};

</script>

<style lang="scss" scoped></style>
