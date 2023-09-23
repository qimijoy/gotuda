<template>
	<aside class="sidebar">
		<div class="sidebar__links">
			<router-link class="sidebar__link" v-for="link of links" :key="link.name" :to="link.href">
				{{ link.name }}
			</router-link>
		</div>
	</aside>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

// States
const { t } = useI18n();

// Computed
const links = computed(() => [
	{ name: t('sections.visited'), href: '/visited' },
	{ name: t('sections.home'), href: '/' },
]);
</script>

<style scoped lang="less">
@import '@/styles/_palette';
@import '@/styles/_sizes';
@import '@/styles/_mixins';

.sidebar {
	display: flex;
	flex-direction: row;

	width: @sidebar-width;

	background-color: @white;
	margin-right: 20px;
	transition: 0.2s;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);

	&__toggle {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 15px;
		height: 100%;
		background: @primary-hover;
		color: @white;
		cursor: pointer;
	}

	&__links {
		padding: 20px;
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	&__link {
		.nav-link(@primary, @primary-hover);
	}
}
</style>
