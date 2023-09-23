<template>
	<header class="header">
		<GoBurger class="header__burger" color="primary" @change="(state) => setMenuState(state)" />
		<nav class="header__nav">
			<router-link class="header__link" v-for="link of links" :key="link.name" :to="link.href">
				{{ link.name }}
			</router-link>
		</nav>
		<GoLangSwitcher class="header__lang-switcher" />
	</header>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { useMainStore } from '@/stores/MainStore';

import GoLangSwitcher from '@/components/GoLangSwitcher.vue';
import GoBurger from '@/components/GoBurger.vue';

// States
const { t, locale } = useI18n();
const mainStore = useMainStore();

// Computed
const links = computed(() => [
	{ name: t('sections.goTuda'), href: '/' },
	{ name: t('sections.stations'), href: '/stations' },
]);

const setMenuState = (value) => {
	mainStore.setMenuState(value);
};
</script>

<style scoped lang="less">
@import '@/styles/_palette';
@import '@/styles/_sizes';
@import '@/styles/_mixins';

.header {
	display: flex;
	align-items: center;

	height: @header-height;
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

	&__link {
		.nav-link(@primary, @primary-hover);
	}

	&__lang-switcher {
		margin-left: auto;
	}
}
</style>
