<template>
	<div class="results-movies">
		<CardMovieComponent
			v-for="movie in moviesList"
			:movie="movie"
			:key="movie.imdbID"
		/>
	</div>
	<PaginationComponent v-if="!Boolean(error.Response) && moviesList" />
</template>

<script setup lang="ts">
	import './ListMoviesComponent.css';

	const store = useMoviesStore();
	const { moviesList, error } = storeToRefs(store);
</script>
