<template>
	<div class="card" @click="router.push(`/movies/movie/${movie.imdbID}`)">
		<section class="img-block">
			<img
				class="img-poster"
				:alt="`${movie.Title} poster`"
				:src="movie.Poster !== 'N/A' ? movie.Poster : DefaultImage"
				loading="lazy"
			/>
		</section>
		<section class="card-content">
			<h4>{{ movie.Title }}</h4>
			<p class="year">({{ movie.Year }})</p>
			<p class="type">Type : {{ movie.Type }}</p>
		</section>
	</div>
</template>

<script setup lang="ts">
	import './CardMovieComponent.css';
	import { useRouter } from 'vue-router';
	import type { Search } from '../../interfaces/movies';
	import DefaultImage from '../../assets/images/no-poster.webp'

	const router = useRouter()

	interface Props {
		movie: Search;
	}

	const { movie } = defineProps<Props>();
</script>