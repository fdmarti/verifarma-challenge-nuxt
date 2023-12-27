<template>
	<div class="block-movies">
		<h1>Search a movie</h1>
		<input
			type="text"
			v-model="searchValue"
			@keyup.enter="searchResults"
			:class="{ isLoading: isLoading }"
			:disabled="isLoading"
		/>
		<SpinnerComponent v-if="isLoading" />
	</div>
	<ListMoviesComponent />
</template>

<script setup lang="ts">
	import './Movies.css';

	useHead({
		title: 'Verifarma - Movies List',
		meta: [{ name: 'description', content: 'Page where you can search for a movie' }],
	});

	const searchValue = ref<string>('');

	const store = useMoviesStore();
	const { getMovies } = store;
	const { isLoading } = storeToRefs(store);

	const searchResults = () => {
		getMovies(searchValue.value);
	};

	definePageMeta({
		middleware: 'auth',
		layout: 'user-layout',
	});
</script>
