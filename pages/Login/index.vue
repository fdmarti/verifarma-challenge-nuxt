<template>
  <div class="login">
    <h2>Sign In</h2>
    <hr>
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
      @click="login"
    />

    <ErrorComponent
      v-if="hasError"
      :error="error"
    />

    <section class="account">
      <a href="#">Register</a>
      <a href="#">Forgot Password</a>
    </section>
  </div>
</template>

<script setup lang="ts">
import './Login.css';
import type { Error } from '~/interfaces/error';
import { reactive } from 'vue';

useHead({
	title: 'Verifarma - Login',
	meta: [{ name: 'description', content: 'Login page' }]
});

const router = useRouter();

interface Login {
	email: string;
	password: string;
}

const formData = reactive<Login>({
	email: '',
	password: ''
});

const error = reactive<Error>({
	Error: 'Wrong credentials'
});

const hasError = ref(false);

const login = () => {
	if (formData.email && formData.password) {
		router.push('/movies');
	} else {
		hasError.value = true;
		setTimeout(() => {
			hasError.value = false;
		}, 3000);
	}
};
</script>
