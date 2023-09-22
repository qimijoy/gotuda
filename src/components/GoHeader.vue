<template>
	<header class="header">
		<nav class="header__links">
			<router-link class="header__link" v-for="link of links" :to="link.href" :key="link.name">
				{{ link.name }}
			</router-link>
		</nav>
		<GoLangSwitcher />
	</header>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import GoLangSwitcher from '@/components/GoLangSwitcher.vue';

// States
const { t, locale } = useI18n();

// Computed
const links = computed(() => [
	{ name: t('sections.home'), href: '/' },
	{ name: t('sections.stations'), href: '/stations' },
]);
</script>

<style scoped lang="less">
@import '@/styles/_palette';
@import '@/styles/_sizes';

.header {
	display: flex;
	align-items: center;
	justify-content: space-between;

	height: @header-height;
	width: 100%;

	background-color: @white;
	font-weight: bold;
	padding: 0 20px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);

	&__link {
		padding: 10px;
	}
}
</style>
