<template>
	<div class="container">
		<component :is="layout" />
	</div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

import layouts from '@/layouts';

const layout = computed(() => layouts[route.meta.layout]);
</script>

<style lang="less">
@import '@/styles/main';

.container {
	height: 100%;
	max-width: 1024px;
	margin: 0 auto;
}
</style>
