<template>
	<button
		:class="['button', `button_color-${color}`, { button_rounded: rounded, button_outlined: outlined }]"
		:disabled="disabled"
	>
		{{ label }}
	</button>
</template>

<script setup>
const props = defineProps({
	label: {
		type: String,
		default: 'Button',
	},
	color: {
		type: String,
		default: 'primary',
	},
	rounded: {
		type: Boolean,
	},
	disabled: {
		type: Boolean,
	},
	outlined: {
		type: Boolean,
	},
});
</script>

<style scoped lang="less">
@import '@/styles/colors';

.button {
	padding: 0 20px;
	height: 40px;
	color: @white;
	border-radius: 7px;
	cursor: pointer;
	font-size: 1rem;
	transition: 0.2s;
	border: 1px solid @black;

	&_color-primary {
		background-color: @primary;
		border-color: @primary;

		&:enabled:hover {
			background-color: @primary-hover;
		}
	}

	&_color-secondary {
		background-color: @secondary;
		border-color: @secondary;

		&:enabled:hover {
			background-color: @secondary-hover;
		}
	}

	&_color-success {
		background-color: @success;
		border-color: @success;

		&:enabled:hover {
			background-color: @success-hover;
		}
	}

	&_color-info {
		background-color: @info;
		border-color: @info;

		&:enabled:hover {
			background-color: @info-hover;
		}
	}

	&_color-warning {
		background-color: @warning;
		border-color: @warning;

		&:enabled:hover {
			background-color: @warning-hover;
		}
	}
	&_color-danger {
		background-color: @danger;
		border-color: @danger;

		&:enabled:hover {
			background-color: @danger-hover;
		}
	}

	&_rounded {
		border-radius: 15px;
	}

	&:disabled {
		opacity: 0.6;
		cursor: default;
	}

	&_outlined {
		background: transparent;
		color: black;

		&:hover {
			color: white;
		}
	}
}
</style>
