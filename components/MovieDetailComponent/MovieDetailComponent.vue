<template>
  <div class="detail-movie">
    <section class="picture">
      <img
        :src="movie.Poster !== 'N/A' ? movie.Poster : DefaultImage"
        :alt="`${movie.Title} poster`"
      >
    </section>
    <section class="movie-content">
      <section class="title-movie">
        <h2>{{ movie.Title }} - ({{ movie.Year }})</h2>
        <RouterLink to="/movies">
          Go back
        </RouterLink>
      </section>

      <p class="run-time">
        {{ movie.Runtime }}
      </p>
      <br>
      <p class="plot">
        {{ movie.Plot }}
      </p>
      <BlockDetailComponent
        title="Gender"
        :text="movie.Genre"
      />
      <BlockDetailComponent
        title="Director"
        :text="movie.Director"
      />
      <BlockDetailComponent
        title="Writer"
        :text="movie.Writer"
      />
      <BlockDetailComponent
        title="Actors"
        :text="movie.Actors"
      />
      <BlockDetailComponent
        title="Language"
        :text="movie.Language"
      />

      <RatingComponent :rating="movie.Ratings" />

      <section class="more-information">
        <a
          :href="`https://www.imdb.com/title/${movie.imdbID}/`"
          target="_blank"
        >More information</a>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import './MovieDetailComponent.css';
import type { Movie } from '../../interfaces/movie';
import DefaultImage from '../../assets/images/no-poster.webp';


	interface Props {
		movie: Movie;
	}

const { movie } = defineProps<Props>();
</script>
