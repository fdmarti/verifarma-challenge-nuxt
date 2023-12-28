<template>
	<div class="movie">
		<SpinnerComponent v-if="isLoading" />
		<MovieDetailComponent :movie="movie" v-else />
	</div>
</template>

<script setup lang="ts">
	import './Movie.css';
	import { useMoviesStore } from '../../../store/movies';
	import { storeToRefs } from 'pinia';

	const { params } = useRoute();
	const imdbID = params.id as string;

	const store = useMoviesStore();
	const { getMovieDetails } = store;
	const { isLoading, movie } = storeToRefs(store);

	definePageMeta({
		middleware: 'auth',
		layout: 'user-layout',
	});

	useHead({
		title: `Verifarma - Movie Detail`,
		meta: [
			{
				name: 'description',
				content: 'Page where you can look the details of the movie',
			},
		],
	});

	getMovieDetails(imdbID);
</script>
