<template>
	<main class="main">
		<StationsList />
	</main>
</template>

<script setup>
import StationsList from '@/components/StationsList.vue';
</script>

<style scoped lang="less">
.main {
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
