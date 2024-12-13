<template>
	<div class="gotuda">
		<div v-if="isStationsLoading" class="gotuda__loader">
			<GoLoader />
		</div>

		<div v-else class="gotuda__content">
			<GoRandomStation />

			<GoStationsList />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { computed, onMounted } from 'vue';

	import GoLoader from '@/components/GoLoader.vue';
	import GoRandomStation from '@/components/GoRandomStation.vue';
	import GoStationsList from '@/components/GoStationsList.vue';

	// STORE
	import { useMainStore } from '@/stores/MainStore';

	const mainStore = useMainStore();

	// COMPUTED
	const isStationsLoading = computed(() => mainStore.isStationsLoading);

	// HOOKS
	onMounted(() => {
		mainStore.getStations();
	});
</script>

<style lang="less" scoped>
	.gotuda {
		display: flex;
		flex-direction: column;

		max-width: 1024px;
		height: 100%;
		margin: 0 auto;

		&__loader {
			flex-grow: 1;

			display: flex;
			align-items: center;
			justify-content: center;
		}

		&__content {
			display: flex;
			flex-direction: row;

			margin-top: 1px;
		}
	}
</style>
