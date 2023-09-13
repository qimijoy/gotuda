<template>
	<GoHeader class="container__header" />
	<div class="container">
		<GoSidebar />
		<div class="container__content">
			<RouterView />
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
	margin: @header-height;
	padding: 30px;
	transition: 0.2s;

	&__header {
		margin-bottom: 20px;
	}
}
</style>
