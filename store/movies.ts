import { defineStore } from 'pinia';
import type { Movies, Search } from '~/interfaces/movies';

export const useMoviesStore = defineStore('movie', {
	state: () => ({
		movies: {} as Movies,
		movie: {} as Search,
		isLoading: false as boolean,
	}),

	actions: {
		async getMovies(text: string, page: number = 1) {
			this.isLoading = true;
			const config = useRuntimeConfig();
			const data = await $fetch<Movies>(`${config.app.MOVIE_API}s=${text}&p=${page}`);
			this.movies = data;
			this.isLoading = false;
		},

		async getMovieDetails(id: string) {
			this.movie = {}
			this.isLoading = true;
			const config = useRuntimeConfig();
			this.movie = await $fetch<Search>(`${config.app.MOVIE_API}i=${id}`);
			this.isLoading = false;
		},
	},

	getters: {
		moviesList(state) {
			return state.movies.Search;
		},
		moviesDetail(state) {
			return state.movie;
		},
	},
});
