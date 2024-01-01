<template>
  <div class="register form-block">
    <section class="title-register">
      <h2>Register</h2>
      <RouterLink to="/login">
        ←
      </RouterLink>
    </section>
    <hr>
    <form
      class="form"
      @submit.prevent="register"
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
      <input
        v-model="formData.repeatPassowrd"
        type="password"
        placeholder="Repeat Password"
      >
      <ButtonComponent
        text="Register"
        :is-loading="isLoading"
      />
    </form>
    <ErrorComponent
      v-if="hasError"
      :error="error"
    />
  </div>
</template>

<script setup lang="ts">
import './Register.css';
import { reactive } from 'vue';
import { useUserStore } from '../../store/user';
import type { NewUser } from '../../interfaces/user';

const router = useRouter();
useHead({
	title: 'Verifarma - Register',
	meta: [{ name: 'description', content: 'Registration page' }]
});
definePageMeta({
	middleware: 'default'
});

const userStore = useUserStore();
const { error, hasError, isLoading } = storeToRefs(userStore);

const formData = reactive<NewUser>({
	email: '',
	password: '',
	repeatPassowrd: ''
});

const register = async() => {
	if (formData.password !== formData.repeatPassowrd) {
		return;
	}

	await userStore.signUp(formData);
	if (!hasError.value) {
		router.push('/Login');
	}
};
</script>
