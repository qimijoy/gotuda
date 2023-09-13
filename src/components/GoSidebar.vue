<template>
	<aside class="sidebar">
		<router-link class="sidebar__link" v-for="link of links" :key="link.name" :to="link.href">
			{{ link.name }}
		</router-link>
	</aside>
</template>

<script setup>
import { ref } from 'vue';

const links = ref([
	{ name: 'Go Tuda', href: '/gotuda' },
	{ name: 'Visited', href: '/visited' },
]);
</script>

<style scoped lang="less">
@import '@/styles/colors';
@import '@/styles/sizes';

.sidebar {
	position: fixed;
	left: 0;
	top: @header-height;
	width: @sidebar-width;
	height: 100%;

	background-color: @white;
	padding: 20px;
	transition: 0.2s;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);
	//transform: translateX(-@sidebar-width);
	transform: translateX(0);

	&__link {
		display: block;
		border-radius: 32px;
		padding: 10px;
		border: 2px solid @white;
		transition: 0.2s;
		font-weight: bold;
		margin-bottom: 10px;

		&:hover {
			border-color: @primary-hover;
		}
	}
}
</style>
