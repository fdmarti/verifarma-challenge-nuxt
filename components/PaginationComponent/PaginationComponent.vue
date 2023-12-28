<template>
	<div class="pagination">
		<ButtonComponent @click="previousPage" text="<" />
		<span class="current-page">{{ currentPage }}</span>
		<ButtonComponent @click="nextPage" text=">" />
	</div>
</template>

<script setup lang="ts">
	import './PaginationComponent.css';

	const store = useMoviesStore();
	const { currentPage } = storeToRefs(store);
	const { nextPage, previousPage } = store;
</script>
