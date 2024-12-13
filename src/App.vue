<template>
	<div class="gotuda">
		<div v-if="isStationsLoading" class="gotuda__loader">
			<GoLoader />
		</div>

		<div v-else class="gotuda__content">
			<GoRandomStation />

			<GoStationsList class="gotuda__stations-list" />
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
		margin: auto;
		padding: 24px;
	}

	.gotuda__loader {
		flex-grow: 1;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.gotuda__content {
		display: flex;
		flex-direction: column;

		margin-top: 1px;
	}

	.gotuda__stations-list {
		margin-top: 24px;
	}
</style>
