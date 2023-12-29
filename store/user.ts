import { defineStore } from 'pinia';
import type { NewUser, User } from '../interfaces/user';
import type { Error } from '~/interfaces/error';
import { supabase } from '../composables/useSupabase';

export const useUserStore = defineStore('user', {
	state: () => ({
		error: {} as Error,
		hasError: false as boolean,
		isLoading: false as boolean
	}),

	actions: {
		async signUp(formData: NewUser) {
			this.isLoading = true;
			const useSupabase = supabase();
			const { error } = await useSupabase.auth.signUp({
				email: formData.email,
				password: formData.password
			});

			if (error) {
				this.hasError = true;
				this.error = {
					Error: error.message
				};
				setTimeout(() => {
					this.hasError = false;
					this.error = {};
				}, 3000);
			}

			this.isLoading = false;
		},

		async login(formData: User) {
			this.isLoading = true;
			const useSupabase = supabase();
			const { error } = await useSupabase.auth.signInWithPassword({
				email: formData.email,
				password: formData.password
			});

			if (error) {
				this.hasError = true;
				this.error = {
					Error: error.message
				};
				setTimeout(() => {
					this.hasError = false;
					this.error = {};
				}, 3000);
			}

			this.isLoading = false;
		},

		async logOut() {
			const useSupabase = supabase();
			const { error } = await useSupabase.auth.signOut();

			if (error) {
				this.hasError = true;
				this.error = {
					Error: error.message
				};
				setTimeout(() => {
					this.hasError = false;
					this.error = {};
				}, 3000);
			}
		}
	}
});
