// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

const env = process.env.ENV || 'local';
const envPath = path.resolve(process.cwd(), `.env.${env}`);
const defaultEnvPath = path.resolve(process.cwd(), '.env');
dotenv.config({ path: fs.existsSync(envPath) ? envPath : defaultEnvPath });

export default defineNuxtConfig({
    compatibilityDate: '2024-11-11',
    devtools: { enabled: false },
    runtimeConfig: {
        public: {
            apiBaseUrl: process.env.BASE_URL,
            paypalClientId: process.env.PAYPAL_CLIENT_ID
        }
    },
    modules: [
        '@pinia/nuxt',
        '@vee-validate/nuxt',
        'nuxt-auth-sanctum'
    ],
    plugins: [
        '~/plugins/modal.mjs',
        '~/plugins/auth.mjs'
    ],
    components: { 
        dirs: [ 
            '~/components',
            '~/layouts',
        ]
    },
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        plugins: [vuetify({ autoImport: true })],
        ssr: {
            noExternal: ['vuetify']
        },
        vue: {
            template: {
                transformAssetUrls,
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    silenceDeprecations: ['legacy-js-api']
                }
            }
        }
    },
    sanctum: {
        baseUrl: process.env.AUTH_BASE_URL,
        mode: 'token',
        endpoints: {
            login: '/api/login',
            logout: '/api/logout'
        },
        redirect: {
            onLogin: false
        }
    },
})