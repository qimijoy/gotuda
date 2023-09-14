<template>
	<main class="main">
		<StationsList />
	</main>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

import StationsList from '@/components/StationsList.vue';

// Data
const store = useStore();

onMounted(async () => {
	await store.commit('getLines');
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
