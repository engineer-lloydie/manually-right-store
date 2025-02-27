// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    compatibilityDate: '2024-11-11',
    devtools: { enabled: false },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
    runtimeConfig: {
        public: {
            apiBaseUrl: process.env.BASE_URL,
            paypalClientId: process.env.PAYPAL_CLIENT_ID
        }
    },
    modules: [
      '@pinia/nuxt',
      '@vee-validate/nuxt',
      'nuxt-auth-sanctum',
      '@nuxtjs/device',
    ],
    plugins: [
        '~/plugins/modal.mjs',
        '~/plugins/auth.mjs',
        '~/plugins/url-slug.mjs'
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
            onLogin: false,
            onLogout: false
        }
    },
})