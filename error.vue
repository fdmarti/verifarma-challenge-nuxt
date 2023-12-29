<template>
  <div class="error-page">
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.statusMessage }}</p>

    <RouterLink to="/Movies">Go back Home</RouterLink>

  </div>
</template>

<script setup lang="ts">
useHead({
	title: 'Verifarma - Error',
	meta: [{ name: 'description', content: "Page that doesn't exist" }]
});
interface Props {
    error: any;
}

const { error } = defineProps<Props>();
</script>
