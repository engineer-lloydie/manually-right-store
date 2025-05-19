import { unref } from 'vue';
import { u as useRequestURL, a as useCookie } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'consola';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'node:crypto';
import 'pinia';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue/server-renderer';
import 'devalue';
import 'node:util';
import 'node:process';
import 'node:tty';

const cookieTokenKey = "sanctum.token.cookie";
const cookieTokenStorage = {
  async get(app) {
    return app.runWithContext(() => {
      const cookie = useCookie(cookieTokenKey, { readonly: true });
      return unref(cookie.value) ?? void 0;
    });
  },
  async set(app, token) {
    await app.runWithContext(() => {
      const isSecure = useRequestURL().protocol.startsWith("https");
      const cookie = useCookie(cookieTokenKey, { secure: isSecure });
      cookie.value = token;
    });
  }
};

export { cookieTokenStorage };
//# sourceMappingURL=cookieTokenStorage.mjs.map
