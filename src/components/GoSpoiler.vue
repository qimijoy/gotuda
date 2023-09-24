<template>
	<div class="spoiler">
		<div class="spoiler__summary" @click="toggleSpoiler">
			<div class="spoiler__summary-text">
				<template v-if="!isSlotSummary">
					{{ data.summary }}
				</template>

				<slot v-else name="summary" />
			</div>
			<div :class="['spoiler__summary-icon', { 'spoiler__summary-icon_open': isOpen }]">
				<SpoilerArrowIcon />
			</div>
		</div>
		<div :class="['spoiler__content', { spoiler__content_open: isOpen }]">
			<template v-if="!isSlotContent">
				{{ data.content }}
			</template>

			<slot v-else name="content" />
		</div>
	</div>
</template>

<script setup>
import { ref, computed, watch, useSlots } from 'vue';

const slots = useSlots();

import SpoilerArrowIcon from '@/assets/images/icons/SpoilerArrowIcon.svg';

// PROPS
const props = defineProps({
	data: {
		type: Object,
		required: false,
		validator: ({ id, summary, content }) => {
			const hasId = id !== undefined && typeof id === 'number';
			const hasSummary = summary !== undefined && typeof summary === 'string';
			const hasContent = content !== undefined && typeof content === 'string';

			return hasId && hasSummary && hasContent;
		},
	},
});

// STATES
const isOpen = ref(props.data.isOpen || false);

// COMPUTED
const isOpenComputed = computed(() => props.data.isOpen);
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

// EMITS
const emit = defineEmits({
	toggle: (state) => {
		return state.id !== undefined && state.value !== undefined;
	},
});
</script>

<style scoped lang="less">
@import '@/assets/styles/_palette';

.spoiler {
	&__summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border: 2px solid @primary;

		padding: 6px 6px 6px 20px;
		border-radius: 6px;
		cursor: pointer;
	}

	&__summary-icon {
		width: 30px;
		height: 30px;
		transition: transform 0.5s;

		&_open {
			transform: rotate(180deg);
		}

		& svg {
			stroke: @primary;
		}
	}

	&__content {
		&::-webkit-scrollbar {
			display: none; /* Safari and Chrome */
		}
		scrollbar-width: none; /* Firefox */

		height: 0;
		overflow-y: scroll;

		transition:
			height 0.5s,
			padding 0.5s;

		&_open {
			height: 200px;
			padding: 10px;
		}
	}
}
</style>
