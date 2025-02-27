const deslugify = (text) => {
    return text
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
};

export default defineNuxtPlugin((nuxtApp) => {    
    nuxtApp.provide('deslugify', deslugify);
});