<template>
	<header class="header">
		<nav class="header__nav">
			<GoRouterLink
				v-for="link of links"
				:key="link.name"
				:name="link.name"
				:to="link.href"
				:disabled="isStationsLoading"
				:active="link.href === currentRoute.fullPath"
			/>
		</nav>
	</header>
</template>

<script setup>
import { computed } from 'vue';
import { useMainStore } from '@/stores/MainStore';

import GoBurger from '@/components/GoBurger.vue';
import GoRouterLink from '@/components/GoRouterLink.vue';

const mainStore = useMainStore();

// COMPUTED
const links = computed(() => [
	{ name: 'Го Туда', href: '/' },
	{ name: 'Станции', href: '/stations' },
]);
const isStationsLoading = computed(() => mainStore.isStationsLoading);
const currentRoute = computed(() => mainStore.currentRoute);

// FUNCTIONS
const setMenuState = (value) => {
	mainStore.setMenuState(value);
};
</script>

<style lang="less" scoped>
@import '@/assets/styles/_palette';
@import '@/assets/styles/_sizes';
@import '@/assets/styles/_mixins';

.header {
	display: flex;

	width: 100%;

	height: @header-height;
	min-height: @header-height;
	padding: 0 20px;

	background-color: @white;
	align-items: center;
	box-shadow: 0 0 10px rgb(0 0 0 / 0.07);

	&__nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}
</style>
