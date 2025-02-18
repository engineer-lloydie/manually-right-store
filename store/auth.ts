import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as any,
  }),
  actions: {
    async fetchUser() {
      try {
        const { data } = await useAuth().getUser();
        this.user = data.value;
      } catch (error) {
        console.error('Failed to fetch user', error);
      }
    },
    async login(email: string, password: string) {
      try {
        await useAuth().login({ email, password });
        await this.fetchUser();
      } catch (error) {
        console.error('Login failed', error);
      }
    },
    async logout() {
      try {
        await useAuth().logout();
        this.user = null;
      } catch (error) {
        console.error('Logout failed', error);
      }
    },
  },
});