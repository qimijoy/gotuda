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
@import '@/assets/styles/_palette';

.button {
	padding: 0 20px;
	height: 40px;
	color: @white;
	border-radius: 7px;
	cursor: pointer;
	font-size: 1rem;
	border: 1px solid @black;

	each(@colors, {
		&_color-@{key} {
			background-color: @value;
			border-color: @value;
			transition: 0.3s;

			&:enabled:focus {
				outline: none;
			}
		}
	});

	each(@colors-hover, {
		&_color-@{key} {
			&:enabled:hover,
			&:enabled:focus {
				background-color: @value;
				border-color: @value;
			}
		}
	});

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
</style>
