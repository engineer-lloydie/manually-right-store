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

const { $hideModal } = useNuxtApp();

</script>

<style lang="scss" scoped></style>
