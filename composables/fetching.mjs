export const useCustomFetch = (request, opts) => {
    const config = useRuntimeConfig();
    
    return useFetch(request, { 
        baseURL: config.public.apiBaseUrl, 
        ...opts 
    });
};

export const useCustomLazyFetch = (request, opts) => {
    const config = useRuntimeConfig();

    return useLazyFetch(request, { 
        baseURL: config.public.apiBaseUrl, 
        ...opts 
    });
};

// Use $fetch for modifying data (POST, PUT, DELETE)
export const useBaseFetch = async (request, opts) => {
    const config = useRuntimeConfig();

    return await $fetch(request, { 
        baseURL: config.public.apiBaseUrl, 
        ...opts 
    });
};
