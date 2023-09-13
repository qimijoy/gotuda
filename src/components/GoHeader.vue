<template>
	<header class="header">
		<router-link to="/">Home</router-link>
	</header>
</template>

<script setup></script>

<style scoped lang="less">
@import '@/styles/colors';
@import '@/styles/sizes';

.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: @header-height;

	display: flex;
	align-items: center;

	background-color: @white;
	font-weight: bold;
	padding: 0 20px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);
}
</style>
