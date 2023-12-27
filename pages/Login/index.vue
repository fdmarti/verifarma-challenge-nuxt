<template>
	<div class="login">
		<h2>Sign In</h2>
		<hr />
		<input type="email" placeholder="Email" v-model="formData.email" />
		<input type="password" placeholder="Password" v-model="formData.password" />
		<ButtonComponent text="Sign In" @click="redirect" />
		<section class="account">
			<a href="#">Register</a>
			<a href="#">Forgot Password</a>
		</section>
	</div>
</template>

<script setup lang="ts">
	import './Login.css';
	import { reactive } from 'vue';

	useHead({
		title: 'Verifarma - Login',
		meta: [{ name: 'description', content: 'Login page' }],
	});

	const router = useRouter();

	interface Login {
		email: string;
		password: string;
	}

	const formData = reactive<Login>({
		email: '',
		password: '',
	});

	const redirect = () => {
		router.push('/movies');
	};
</script>
