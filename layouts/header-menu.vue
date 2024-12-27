<template>
<v-app-bar app class="floating-header">
    <v-toolbar-title>Upright Manual</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-cart</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup>
const appTitle = ref("Upright Manual");
const sidebar = ref(false);

const menuItems = ref([
    { title: 'Home', path: '/home', icon: 'mdi-home' },
    { title: 'Sign Up', path: '/signup', icon: 'mdi-login-variant' },
    { title: 'Sign In', path: '/signin', icon: 'mdi-lock-open' }
])
</script>

<style lang="scss" scoped>
.floating-header {
  background-color: #26A69A !important;
  color: white !important;
//   border-radius: 15px;
  margin: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .v-btn {
    color: white !important;

    &:hover {
      background-color: rgba(#26A69A, 0.3) !important;
    }
  }
}
</style>