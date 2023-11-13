<template>
	<div class="gotuda">
		<GoHeader />

		<div v-if="isStationsLoading" class="gotuda__loader">
			<GoLoader />
		</div>

		<div v-else class="gotuda__content">
			<RouterView class="gotuda__view" />
		</div>
	</div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useMainStore } from '@/stores/MainStore';

import GoHeader from '@/components/GoHeader.vue';
import GoLoader from '@/components/GoLoader.vue';

const mainStore = useMainStore();

// COMPUTED
const isStationsLoading = computed(() => mainStore.isStationsLoading);

onMounted(() => {
	mainStore.getStations();
});
</script>

<style lang="less" scoped>
@import '@/assets/styles/_sizes';

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

	&__view {
		width: 100%;
		padding: 20px 30px;
	}
}
</style>
