export default defineNuxtPlugin((nuxtApp) => {    
    return {
        provide: {
            deslugify: (text) => {
                return text
                    .replace(/-/g, ' ')
                    .replace(/\b\w/g, (char) => char.toUpperCase());
            }
        }
    }
})