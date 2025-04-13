<template>
    <v-footer class="bg-grey-lighten-3 text-center d-flex justify-space-around">
        <v-row>
            <v-col cols="12" md="6" lg="8" xl="9">
                @{{ new Date().getFullYear() }} — <strong>Manuallyright</strong>
            </v-col>
            <v-col cols="12" md="6" lg="4" xl="3">
                <div class="d-flex justify-space-around flex-wrap">
                    <v-btn density="comfortable" class="text-none" to="/policies/terms-and-conditions" active-color="red-lighten-1" variant="text" :ripple="false" flat>
                        Terms and Conditions
                    </v-btn>
                    <v-btn density="comfortable" class="text-none" to="/policies/privacy-policy" active-color="red-lighten-1" variant="text" :ripple="false" flat>
                        Privacy Policy
                    </v-btn>
                    <!-- <v-btn density="comfortable" class="text-none" href="/sitemap.xml" variant="text" :ripple="false" flat>
                        Sitemap
                    </v-btn> -->
                </div>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script setup>
const icons = ref([
    "mdi-facebook",
    "mdi-twitter",
    "mdi-linkedin",
    "mdi-instagram",
]);
</script>
