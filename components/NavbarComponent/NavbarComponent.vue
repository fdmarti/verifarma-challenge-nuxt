<template>
	<nav>
		<RouterLink class="logo" to="/movies">
			<img src="~/assets/images/logo.webp" alt="logo image with movie asset" />
		</RouterLink>
		<section class="menu">
			<RouterLink to="/login" @click="logOut">Logout</RouterLink>
		</section>
	</nav>
</template>

<script setup lang="ts">
	import './NavbarComponent.css';
	import { useMoviesStore } from '../../store/movies';

	const movieStore = useMoviesStore();

	const logOut = () => {
        movieStore.$reset()
    };
</script>
