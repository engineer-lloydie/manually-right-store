import '@mdi/font/css/materialdesignicons.css';
import "@/assets/main.scss";

import { createVuetify } from 'vuetify';
import { en } from 'vuetify/locale';

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // theme: {
        //     defaultTheme: 'dark'
        // },
        locale: {
            locale: 'en',
            messages: { en },
        }
    });
    
    app.vueApp.use(vuetify);
});
