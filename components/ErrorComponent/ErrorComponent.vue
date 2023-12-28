<template>
  <div class="error">
    <p>{{ error.Error }}</p>
  </div>
</template>

<script setup lang="ts">
import './ErrorComponent.css';
import type { Error } from '~/interfaces/error';
	interface Props {
		error: Error;
	}

const { error } = defineProps<Props>();
</script>
