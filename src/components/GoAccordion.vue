<template>
	<div class="accordion">
		<div class="accordion__spoilers">
			<GoSpoiler v-for="item in array" :key="item.id" :data="item" @toggle="(state) => updateAccordion(state)">
				<template #summary>{{ item.summary }}</template>
				<template #content>{{ item.content }}</template>
			</GoSpoiler>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

import GoSpoiler from './GoSpoiler.vue';

// PROPS
const props = defineProps({
	data: {
		type: Array,
		required: true,
		validator: (item) =>
			item.every(({ id, summary, content }) => {
				const hasId = id !== undefined && typeof id === 'number';
				const hasSummary = summary !== undefined && typeof summary === 'string';
				const hasContent = content !== undefined && typeof content === 'string';

				return hasId && hasSummary && hasContent;
			}),
	},
	multiple: {
		type: Boolean,
		default: false,
	},
});

// STATES
const array = ref(props.data);

// FUNCTIONS
const updateAccordion = (state) => {
	if (!props.multiple) {
		array.value = array.value.map((item) => (item.isOpen && item.id !== state.id ? { ...item, isOpen: false } : item));
		array.value = array.value.map((item) => (item.id === state.id ? { ...item, isOpen: !item.isOpen } : item));
	}
};
</script>

<style lang="less" scoped>
.accordion {
	&__spoilers {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
}
</style>
