<template>
	<div :class="classes" @click="toggleBurger()" @keydown.enter="toggleBurger()" tabindex="0">
		<span :class="barClasses(1)"></span>
		<span :class="barClasses(2)"></span>
		<span :class="barClasses(3)"></span>
	</div>
</template>

<script setup>
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
});
import { computed, ref } from 'vue';

// States
const isBurgerOpen = ref(props.state);

// Computed
const classes = computed(() => {
	return ['burger', `burger_color-${props.color}`];
});

const barClasses = (index) => [
	'burger__bar',
	`burger__bar_part-${index}`,
	`burger__bar_color-${props.color}`,
	{
		burger__bar_open: isBurgerOpen.value,
	},
];

// Functions
const toggleBurger = () => {
	isBurgerOpen.value = !isBurgerOpen.value;
};
</script>

<style lang="less" scoped>
@import '@/styles/_palette';

.burger {
	position: relative;

	display: block;
	height: 32px;
	width: 32px;

	cursor: pointer;
	border-radius: 25%;

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

			&:focus {
				outline: none;
				border: 1px solid @value;
			}
		}
	});
}
</style>
