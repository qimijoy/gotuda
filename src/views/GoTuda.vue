<template>
	<main class="main">
		<StationsList />
	</main>
</template>

<script setup>
import { onMounted } from 'vue';
import { useMainStore } from '@/stores/MainStore';

import StationsList from '@/components/StationsList.vue';

// Data
const mainStore = useMainStore();

onMounted(() => {
	mainStore.getStations();
});
</script>

<style scoped lang="less">
.main {
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
