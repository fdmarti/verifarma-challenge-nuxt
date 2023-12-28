<template>
  <div class="block-movies">
    <h1>Search a movie</h1>
    <input
      v-model="searchValue"
      type="text"
      :class="{ isLoading: isLoading }"
      :disabled="isLoading"
      @keyup.enter="searchResults"
    >
    <SpinnerComponent v-if="isLoading" />
  </div>
  <ErrorComponent
    v-if="hasError"
    :error="error"
  />
  <ListMoviesComponent v-else />
</template>

<script setup lang="ts">
import './Movies.css';

useHead({
	title: 'Verifarma - Movies List',
	meta: [{ name: 'description', content: 'Page where you can search for a movie' }]
});

const searchValue = ref<string>('');

const store = useMoviesStore();
const { getMovies } = store;
const { isLoading, hasError, error } = storeToRefs(store);

const searchResults = () => {
	if (searchValue.value.trim().length > 0) {
		getMovies(searchValue.value);
	}
};

definePageMeta({
	middleware: 'auth',
	layout: 'user-layout'
});
</script>
