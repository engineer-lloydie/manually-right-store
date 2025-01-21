<template>
    <div>
        <v-container>
            <breadcrumbs />
            <v-row>
                <v-col xl="3" sm="6" md="6" lg="3">
                    <v-card>
                        <v-card-title>Manuals</v-card-title>
                        <v-card-text>
                            <v-list>
                                <v-list-item
                                    v-for="(item, i) in items"
                                    :key="i"
                                    :value="item"
                                    color="primary"
                                >
                                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
const items = [
    { text: 'Manual 1', path: '/test' },
    { text: 'Manaul 2', path: '/test' },
    { text: 'Manual 3', path: '/test' },
    { text: 'Manual 4', path: '/test' }
]
</script>

<style lang="scss" scoped>

</style>