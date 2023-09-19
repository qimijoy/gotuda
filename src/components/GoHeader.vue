<template>
	<header class="header">
		<router-link class="header__link" v-for="link of links" :to="link.href" :key="link.name">
			{{ link.name }}
		</router-link>
	</header>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

// States
const { t } = useI18n();

// Computed
const links = computed(() => [
	{ name: t('sections.home'), href: '/' },
	{ name: t('sections.stations'), href: '/stations' },
]);
</script>

<style scoped lang="less">
@import '@/styles/colors';
@import '@/styles/sizes';

.header {
	display: flex;
	align-items: center;

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
