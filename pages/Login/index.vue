<template>
  <div class="login form-block">
    <h2>Sign In</h2>
    <hr>
    <form
      class="form"
      @submit.prevent="login"
    >
      <input
        v-model="formData.email"
        type="email"
        placeholder="Email"
      >
      <input
        v-model="formData.password"
        type="password"
        placeholder="Password"
      >
      <ButtonComponent
        text="Sign In"
        :is-loading="isLoading"
      />
    </form>

    <ErrorComponent
      v-if="hasError"
      :error="error"
    />

    <section class="account">
      <RouterLink to="/Register">Register</RouterLink>
      <a href="#">Forgot Password</a>
    </section>
  </div>
</template>

<script setup lang="ts">
import './Login.css';
import { useUserStore } from '../../store/user';
const router = useRouter();

import type { User } from '../../interfaces/user';

useHead({
	title: 'Verifarma - Login',
	meta: [{ name: 'description', content: 'Login page' }]
});

const userStore = useUserStore();
const { error, hasError, isLoading } = storeToRefs(userStore);

const formData = reactive<User>({
	email: '',
	password: ''
});

const login = async() => {
	if (formData.email && formData.password) {
		await userStore.login(formData);
		if (!hasError.value) {
			router.push('/Movies');
		}
	}
};
</script>
