import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    currentUser: ''
  }),
  actions: {
    login(username) {
      this.isAuthenticated = true;
      this.currentUser = username;
    },
    logout() {
      this.isAuthenticated = false;
      this.currentUser = '';
    }
  }
});

