<template>
	<div class="container">
		<GoHeader />
		<div class="container__content">
			<GoSidebar class="container__sidebar" />
			<RouterView class="container__view" />
		</div>
	</div>
</template>

<script setup>
import GoHeader from '@/components/GoHeader.vue';
import GoSidebar from '@/components/GoSidebar.vue';
</script>

<style class="scope" lang="less">
@import '@/styles/main';

.container {
	height: 100%;
	max-width: 1024px;
	margin: 0 auto;

	&__content {
		display: flex;
		flex-direction: row;
	}

	&__view {
		flex-grow: 1;
	}
}
</style>
