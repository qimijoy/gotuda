<template>
	<header class="header">
		<GoBurger
			class="header__burger"
			color="primary"
			:disabled="isStationsLoading"
			@change="(state) => setMenuState(state)"
		/>
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
		<GoLangSwitcher class="header__lang-switcher" :disabled="isStationsLoading" />
	</header>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { useMainStore } from '@/stores/MainStore';

import GoLangSwitcher from '@/components/GoLangSwitcher.vue';
import GoBurger from '@/components/GoBurger.vue';
import GoRouterLink from '@/components/GoRouterLink.vue';

// States
const { t, locale } = useI18n();
const mainStore = useMainStore();

// Computed
const links = computed(() => [
	{ name: t('sections.goTuda.name'), href: '/' },
	{ name: t('sections.stations.name'), href: '/stations' },
]);
const isStationsLoading = computed(() => mainStore.isStationsLoading);
const currentRoute = computed(() => mainStore.currentRoute);

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
	align-items: center;

	height: @header-height;
	min-height: @header-height;
	width: 100%;

	background-color: @white;
	padding: 0 20px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);

	&__burger {
		margin-right: 40px;
	}

	&__nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	&__lang-switcher {
		margin-left: auto;
	}
}
</style>
