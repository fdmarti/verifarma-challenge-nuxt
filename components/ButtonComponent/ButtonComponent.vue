<template>
  <button class="btn">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import './ButtonComponent.css';

	interface Props {
		text?: string;
	}

const { text } = withDefaults(defineProps<Props>(), {
	text: 'Button default'
});
</script>
