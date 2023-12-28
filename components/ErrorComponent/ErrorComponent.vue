<template>
	<div class="error">
		<p>{{ error.Error }}</p>
	</div>
</template>

<script setup lang="ts">
	import './ErrorComponent.css';
	import { useMoviesStore } from '../../store/movies';

	const store = useMoviesStore();
	const { error } = storeToRefs(store);
</script>
