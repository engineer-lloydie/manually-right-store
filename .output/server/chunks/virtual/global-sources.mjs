const sources = [
    {
        "sourceType": "user",
        "fetch": "https://api.manually-right.com/api/sitemap/pages/urls"
    },
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/"
            },
            {
                "loc": "/orders"
            },
            {
                "loc": "/checkout"
            },
            {
                "loc": "/contact-us"
            },
            {
                "loc": "/payment-success"
            },
            {
                "loc": "/policies/privacy-policy"
            },
            {
                "loc": "/manuals/categories"
            },
            {
                "loc": "/policies/terms-and-conditions"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
