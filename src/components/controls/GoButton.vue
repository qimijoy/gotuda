<template>
	<button :class="classes" :disabled="disabled" :type="type" @click="clickOnButton">
		<slot></slot>
	</button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	type: {
		type: String,
		default: 'button',
		validator: (value) => ['button', 'submit'].includes(value),
	},
	color: {
		type: String,
		default: 'primary',
		validator: (value) => ['primary', 'secondary', 'success', 'info', 'warning', 'danger'].includes(value),
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	icon: {
		type: Boolean,
		default: false,
	},
});

const classes = computed(() => {
	return [
		'button',
		`button_color-${props.color}`,
		{
			button_icon: props.icon,
		},
	];
});

const emits = defineEmits({
	click: null,
});

const clickOnButton = () => {
	emits('click');
};
</script>

<style lang="less" scoped>
@import '@/styles/_palette';

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
		.define-color(@primary, @primary-hover);
	}

	&_color-secondary {
		.define-color(@secondary, @secondary-hover);
	}

	&_color-success {
		.define-color(@success, @success-hover);
	}

	&_color-info {
		.define-color(@info, @info-hover);
	}

	&_color-warning {
		.define-color(@warning, @warning-hover);
	}

	&_color-danger {
		.define-color(@danger, @danger-hover);
	}

	&:disabled {
		opacity: 0.6;
		cursor: default;
	}

	&_icon {
		padding: 0;
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
}

// Mixins
.define-color(@color, @color-hover) {
	background-color: @color;
	border-color: @color;
	transition: 0.5s;

	&:enabled:hover,
	&:enabled:focus {
		background-color: @color-hover;
		border-color: @color-hover;
	}

	&:enabled:focus {
		outline: none;
	}
}
</style>
