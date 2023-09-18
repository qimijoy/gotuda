<template>
	<div class="switch" :class="{ switch_on: isOn }" @click="isOn = !isOn" />
</template>

<script setup>
import { ref } from 'vue';

const isOn = ref(false);
</script>

<style scoped lang="less">
@import '@/styles/colors';

.switch {
	display: inline-block;
	position: relative;
	width: 50px;
	height: 25px;
	border: 2px solid @black;
	background: transparent;
	border-radius: 25px;
	box-shadow: 1px 1px 2px 0 (rgba(@black, 0.5));
	cursor: pointer;

	&::before {
		content: '';
		position: absolute;
		top: 1px;
		left: 2px;
		width: 19px;
		height: 19px;
		background: @black;
		border-radius: 50%;
		transition: 0.5s;
	}

	&_on {
		border-color: @white;
		background: @black;
		box-shadow: 1px 1px 2px 0 (rgba(@white, 0.5));
		transition: 0.5s;

		&::before {
			left: 25px;
			background: @white;
		}
	}
}
</style>
