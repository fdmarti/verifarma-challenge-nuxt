<template>
	<p :class="title" class="block-text-detail">
		<span class="title-detail">{{ title }}:</span>
		{{ text }}
	</p>
</template>

<script setup lang="ts">
	import './BlockDetailComponent.css';

	interface Props {
		title?: string;
		text?: string;
	}

	const props = withDefaults(defineProps<Props>(), {
		title: 'Default Title',
		text: 'Default Text',
	});
</script>
