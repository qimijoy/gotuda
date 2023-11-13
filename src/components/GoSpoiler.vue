<template>
	<div class="spoiler">
		<div class="spoiler__summary" :class="{ spoiler__summary_open: isOpen }" @click="toggleSpoiler">
			<div class="spoiler__summary-text">
				<template v-if="!isSlotSummary">{{ data.summary }}</template>

				<slot v-else name="summary" />
			</div>
			<div :class="['spoiler__summary-icon', { 'spoiler__summary-icon_open': isOpen }]">
				<SpoilerArrowIcon :class="['spoiler__summary-svg', { 'spoiler__summary-svg_open': isOpen }]" />
			</div>
		</div>
		<div :class="['spoiler__content', { spoiler__content_open: isOpen }]">
			<template v-if="!isSlotContent">{{ data.content }}</template>

			<slot v-else name="content" />
		</div>
	</div>
</template>

<script setup>
import { ref, computed, watch, useSlots } from 'vue';

import SpoilerArrowIcon from '@/assets/images/icons/SpoilerArrowIcon.svg';

// PROPS
const props = defineProps({
	data: {
		type: Object,
		default: () => {},
		validator: (value) => value.id !== undefined,
	},
});

// EMITS
const emit = defineEmits({
	toggle: (state) => {
		return state.id !== undefined && state.value !== undefined;
	},
});

const slots = useSlots();

// STATES
const isOpen = ref(false);

// COMPUTED
const isOpenComputed = computed(() => props.isOpen);
const isSlotSummary = computed(() => Boolean(slots.summary));
const isSlotContent = computed(() => Boolean(slots.content));

// FUNCTIONS
const toggleSpoiler = () => {
	isOpen.value = !isOpen.value;

	emit('toggle', {
		id: props.data.id,
		value: isOpen.value,
	});
};

// WATCHERS
watch(isOpenComputed, (newValue) => {
	isOpen.value = newValue;
});
</script>

<style scoped lang="less">
@import '@/assets/styles/_palette';

.spoiler {
	&__summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-width: 2px;
		border-style: solid;
		border-color: @primary-hover;

		padding: 6px 6px 6px 20px;

		border-radius: 6px;

		cursor: pointer;

		transition: border-color 0.5s;

		&:hover:not(&_open) {
			border-color: @primary;
		}

		&_open {
			border-color: @primary-active;
		}
	}

	&__summary-icon {
		width: 30px;
		height: 30px;

		transition: transform 0.5s;

		&_open {
			transform: rotate(180deg);
		}
	}

	&__summary-svg {
		margin-left: 4px;

		transition: stroke 0.5s;
		stroke: @primary-hover;

		&:hover:not(&_open) {
			stroke: @primary;
		}

		&_open {
			stroke: @primary-active;
		}
	}

	&__content {
		height: 0;
		overflow-y: hidden;

		&_open {
			height: auto;
			padding: 10px;
		}
	}
}
</style>
