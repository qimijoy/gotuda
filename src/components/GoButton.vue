<template>
	<button :class="classes" :disabled="disabled" @click="clickOnButton">
		<span v-if="icon">
			<font-awesome-icon :icon="`fa-regular fa-${icon}`" />
		</span>
		<span v-else>{{ label }}</span>
	</button>
</template>

<script setup>
import { computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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
	icon: {
		type: String,
	},
	size: {
		type: String,
		default: 'normal',
	},
});

const classes = computed(() => {
	return [
		'button',
		`button_color-${props.color}`,
		{
			button_rounded: props.rounded,
			button_outlined: props.outlined,
			button_icon: props.icon,
			'button_size-large': props.size === 'large',
		},
	];
});

const emit = defineEmits(['click']);

const clickOnButton = () => {
	emit('click');
};
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

	&_icon {
		padding: 0;
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}

	&_size-large {
		height: 48px;
		padding: 0 30px;
	}
}
</style>
