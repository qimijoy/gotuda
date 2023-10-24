<template>
	<div ref="burger" :class="classes" tabindex="0" @click="toggleBurger()" @keydown.enter="toggleBurger()">
		<span :class="barClasses(1)"></span>
		<span :class="barClasses(2)"></span>
		<span :class="barClasses(3)"></span>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue';

// PROPS
const props = defineProps({
	color: {
		type: String,
		default: 'primary',
		validator: (value) => ['primary', 'secondary', 'success', 'info', 'warning', 'danger'].includes(value),
	},
	state: {
		type: Boolean,
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
});

// EMITS
const emit = defineEmits({
	change: (value) => typeof value === 'boolean',
});

// STATES
const burger = ref(null);

// COMPUTED
const isBurgerOpen = computed(() => props.state);
const classes = computed(() => {
	return ['burger', props.disabled ? 'burger_disabled' : null, `burger_color-${props.color}`];
});

const barClasses = (index) => [
	'burger__bar',
	`burger__bar_part-${index}`,
	`burger__bar_color-${props.color}`,
	{
		burger__bar_open: isBurgerOpen.value,
	},
];

// FUNCTIONS
const toggleBurger = () => {
	if (!burger.value.classList.contains('burger_disabled')) {
		isBurgerOpen.value = !isBurgerOpen.value;
		emit('change', isBurgerOpen.value);
	}
};
</script>

<style lang="less" scoped>
@import '@/assets/styles/_palette';

.burger {
	position: relative;

	display: block;
	height: 32px;
	width: 32px;

	cursor: pointer;
	border-radius: 25%;

	&_disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	&__bar {
		position: absolute;
		top: 47%;
		right: 6px;
		left: 6px;

		height: 2px;

		transition:
			transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
			opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

		&_part-1 {
			transform: translateY(-6px);
		}

		&_part-2 {
			transform-origin: 100% 50%;
			transform: scaleX(0.8);
		}

		&_part-3 {
			transform: translateY(6px);
		}

		&_open&_part-1 {
			transform: rotate(45deg);
		}

		&_open&_part-2 {
			transform: rotate(-180deg);
			opacity: 0;
		}

		&_open&_part-3 {
			transform: rotate(-45deg);
		}
	}

	each(@colors, {
		&__bar_color-@{key} {
			background-color: @value;
		}
	});

	each(@colors-hover, {
		&_color-@{key} {
			border: 1px solid transparent;
			transition: 0.3s;

			&:focus {
				outline: none;
				border: 1px solid @value;
			}
		}
	});
}
</style>
