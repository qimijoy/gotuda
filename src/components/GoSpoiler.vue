<template>
	<div class="spoiler">
		<div class="spoiler__summary" :class="{ spoiler__summary_open: isOpen }" @click="toggleSpoiler">
			<div class="spoiler__summary-text">
				<slot name="summary" />
			</div>
			<div :class="['spoiler__summary-icon', { 'spoiler__summary-icon_open': isOpen }]">
				<SpoilerArrowIcon :class="['spoiler__summary-svg', { 'spoiler__summary-svg_open': isOpen }]" />
			</div>
		</div>
		<div :class="['spoiler__content', { spoiler__content_open: isOpen }]">
			<slot name="content" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';

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

	// STATES
	const isOpen = ref(false);

	// FUNCTIONS
	const toggleSpoiler = () => {
		isOpen.value = !isOpen.value;

		emit('toggle', {
			id: props.data.id,
			value: isOpen.value,
		});
	};
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
