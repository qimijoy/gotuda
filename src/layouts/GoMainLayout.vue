<template>
	<div class="gotuda">
		<GoHeader />

		<div v-if="isStationsLoading" class="gotuda__loader">
			<GoLoader />
		</div>

		<div v-else class="gotuda__content">
			<GoSidebar v-if="isMenuOpen" class="gotuda__sidebar" />

			<RouterView class="gotuda__view" :class="{ gotuda__view_expanded: !isMenuOpen }" />
		</div>
	</div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useMainStore } from '@/stores/MainStore';

import GoHeader from '@/components/GoHeader.vue';
import GoSidebar from '@/components/GoSidebar.vue';
import GoLoader from '@/components/GoLoader.vue';

// STATES
const mainStore = useMainStore();

// COMPUTED
const isMenuOpen = computed(() => mainStore.isMenuOpen);
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
	margin: 0 auto;
	height: 100%;

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

		flex-grow: 1;
	}

	&__view {
		padding: 20px 30px;
		width: 100%;
	}
}
</style>
