<template>
	<div class="gotuda">
		<GoHeader class="main__header" />

		<div class="gotuda__content">
			<GoSidebar class="gotuda__sidebar" />
			<RouterView class="gotuda__view" />
		</div>
	</div>
</template>

<script setup>
import GoHeader from '@/components/GoHeader.vue';
import GoSidebar from '@/components/GoSidebar.vue';
</script>

<style scoped lang="less">
.gotuda {
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
