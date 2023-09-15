<template>
	<div class="main-layout">
		<GoHeader class="main-layout__header" />
		<div class="main-layout__content">
			<GoSidebar class="main-layout__sidebar" />
			<RouterView class="main-layout__view" />
		</div>
	</div>
</template>

<script setup>
import GoHeader from '@/components/GoHeader.vue';
import GoSidebar from '@/components/GoSidebar.vue';
</script>

<style scoped lang="less">
.main-layout {
	&__content {
		display: flex;
		flex-direction: row;
	}

	&__view {
		flex-grow: 1;
	}
}
</style>
