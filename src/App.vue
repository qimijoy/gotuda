<template>
	<component :is="layout" />
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import { useRoute } from 'vue-router';

	import layouts from '@/layouts';

	// STATES
	const route = useRoute();

	// COMPUTED
	const layout = computed(() => layouts[route.meta.layout]);
</script>
