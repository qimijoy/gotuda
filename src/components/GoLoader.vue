<template>
	<span class="loader" />
</template>

<style lang="less" scoped>
	@import '@/assets/styles/_palette';

	.loader {
		display: inline-block;

		position: relative;

		width: 48px;
		height: 48px;

		border: 3px solid;
		border-radius: 50%;

		box-sizing: border-box;

		animation: rotation 1s linear infinite;
		border-color: @primary-hover @primary-hover transparent transparent;

		&:after,
		&:before {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;

			width: 40px;
			height: 40px;
			margin: auto;

			border: 3px solid;
			border-radius: 50%;

			box-sizing: border-box;

			animation: rotationBack 0.5s linear infinite;
			content: '';
			border-color: transparent transparent @primary-hover @primary-hover;
			transform-origin: center center;
		}

		&:before {
			width: 32px;
			height: 32px;
			border-color: @primary-hover @primary-hover transparent transparent;

			animation: rotation 1.5s linear infinite;
		}
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes rotationBack {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(-360deg);
		}
	}
</style>
