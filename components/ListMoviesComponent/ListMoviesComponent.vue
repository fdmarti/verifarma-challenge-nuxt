<template>
	<div class="results-movies">
		<CardMovieComponent
			v-for="movie in moviesList"
			:movie="movie"
			:key="movie.imdbID"
		/>
	</div>
</template>

<script setup lang="ts">
	import './ListMoviesComponent.css';

	const store = useMoviesStore();
	const { moviesList } = storeToRefs(store);
</script>
