<template>
	<div class="gotuda">
		<GoHeader class="main__header" />

		<div class="gotuda__content">
			<GoSidebar class="gotuda__sidebar" v-if="isMenuOpen" />

			<RouterView class="gotuda__view" :class="{ gotuda__view_expanded: !isMenuOpen }" />
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import { useMainStore } from '@/stores/MainStore';

import GoHeader from '@/components/GoHeader.vue';
import GoSidebar from '@/components/GoSidebar.vue';

// STATES
const mainStore = useMainStore();

// COMPUTED
const isMenuOpen = computed(() => mainStore.isMenuOpen);
</script>

<style lang="less" scoped>
@import '@/styles/_sizes';

.gotuda {
	display: flex;
	flex-direction: column;
	max-width: 1024px;
	margin: 0 auto;
	height: 100%;

	&__content {
		display: flex;
		flex-direction: row;
		margin-top: 1px;

		flex-grow: 1;
	}

	&__view {
		padding: 20px 30px;
	}
}
</style>
