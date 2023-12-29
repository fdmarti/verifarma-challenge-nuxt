<template>
  <button class="btn">
    <SpinnerComponent v-if="isLoading" />
    <span v-else>{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
import './ButtonComponent.css';

interface Props {
	text?: string;
	isLoading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	text: 'Button default',
	isLoading: false
});

const { text, isLoading } = toRefs(props);
</script>
