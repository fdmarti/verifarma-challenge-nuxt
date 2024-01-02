import { defineStore } from 'pinia';
import type { Error } from '~/interfaces/error';
import type { Movie } from '~/interfaces/movie';
import type { Movies } from '~/interfaces/movies';

const initialState = {
	movies: {} as Movies,
	movie: {} as Movie,
	valueSearch: '' as string,

	pages: 1 as number,
	currentPage: 1 as number,
	isLoading: false as boolean,

	error: {} as Error,
	hasError: false as boolean
};

export const useMoviesStore = defineStore('movie', {
	state: () => ({ ...initialState }),

	actions: {
		async getMovies(text: string, page: number = 1) {
			this.isLoading = true;
			this.valueSearch = text;
			const config = useRuntimeConfig();
			const data = await $fetch<Movies>(
				`${config.app.MOVIE_API}s=${text}&page=${page}`
			);

			if (data.Response === 'True') {
				this.movies = data;
				this.pages = Math.ceil(Number(data.totalResults) / 10);
				this.error = {};
				this.hasError = false;
			} else {
				this.movies = {};
				this.error = data;
				this.hasError = true;
			}

			this.isLoading = false;
		},

		async getMovieDetails(idMovie: string) {
			this.movie = {};
			this.isLoading = true;
			const config = useRuntimeConfig();

			const { Response, ...restData } = await $fetch<Movie>(`${config.app.MOVIE_API}i=${idMovie}`);

			if (Response === 'True') {
				this.movie = restData;
			} else {
				this.hasError = true;
				this.error = {
					Error: 'Incorrect IMDb ID'
				};
			}

			this.isLoading = false;
		},

		nextPage() {
			if (this.currentPage >= this.pages) {
				return;
			}

			this.currentPage++;
			this.reloadList();
			window.scrollTo({ top: 0 });
		},

		previousPage() {
			if (this.currentPage <= 1) {
				return;
			}

			this.currentPage--;
			this.reloadList();
			window.scrollTo({ top: 0 });
		},

		reloadList() {
			this.getMovies(this.valueSearch, this.currentPage);
		}
	},

	getters: {
		moviesList(state) {
			return state.movies.Search;
		},
		moviesDetail(state) {
			return state.movie;
		}
	}
});
