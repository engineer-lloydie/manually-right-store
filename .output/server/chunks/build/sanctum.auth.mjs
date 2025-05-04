import { a0 as defineNuxtRouteMiddleware, a1 as useSanctumConfig, m as useSanctumAuth, $ as createError, a2 as trimTrailingSlash, n as navigateTo } from './server.mjs';
import 'vue';
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

const sanctum_auth = defineNuxtRouteMiddleware((to) => {
  const options = useSanctumConfig();
  const { isAuthenticated } = useSanctumAuth();
  if (isAuthenticated.value) {
    return;
  }
  const endpoint = options.redirect.onAuthOnly;
  if (endpoint === void 0) {
    throw new Error("`sanctum.redirect.onAuthOnly` is not defined");
  }
  if (endpoint === false) {
    throw createError({ statusCode: 403 });
  }
  const redirect = { path: endpoint };
  if (options.redirect.keepRequestedRoute) {
    redirect.query = { redirect: trimTrailingSlash(to.fullPath) };
  }
  return navigateTo(redirect, { replace: true });
});

export { sanctum_auth as default };
//# sourceMappingURL=sanctum.auth.mjs.map
