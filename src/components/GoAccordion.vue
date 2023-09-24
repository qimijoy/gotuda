<template>
	<div class="accordion">
		<div class="accordion__spoilers">
			<GoSpoiler
				v-for="item of items"
				:key="item.id"
				:data="item"
				:isOpen="item.isOpen"
				@toggle="(state) => updateAccordion(state)"
			>
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
	items: {
		type: Array,
		required: true,
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
