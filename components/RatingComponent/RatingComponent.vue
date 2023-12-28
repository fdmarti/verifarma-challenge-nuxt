<template>
  <div class="ratings">
    <h2>Ratings</h2>
    <div class="rates">
      <section
        v-for="rate in rating"
        :key="rate.Source"
        class="rate"
      >
        <p>{{ rate.Source }}</p>
        <span>{{ rate.Value }}</span>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import './RatingComponent.css';
import type { Rating } from '../../interfaces/movie';

	interface Props {
		rating?: Rating[];
	}

const { rating } = defineProps<Props>();
</script>
