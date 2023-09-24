<template>
	<router-link :class="classes" :to="to">
		{{ name }}
	</router-link>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	to: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	active: {
		type: Boolean,
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
});

const classes = computed(() => [
	'router-link',
	{
		'router-link_disabled': props.disabled,
		'router-link_active': props.active,
	},
]);
</script>

<style lang="less" scoped>
@import '@/assets/styles/_palette';
@import '@/assets/styles/_mixins';

.router-link {
	.nav-link(@primary, @primary-hover, @primary-active);

	&_active {
		color: @primary-active;
	}

	&_disabled {
		opacity: 0.5;
		pointer-events: none;
	}
}
</style>
