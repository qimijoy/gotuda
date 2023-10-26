<template>
	<div class="accordion">
		<div class="accordion__title" @click="isOpen = !isOpen">{{ title }}</div>
		<div v-if="isOpen" class="accordion__text">
			<slot />
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
});

const isOpen = ref(false);
</script>

<style scoped lang="less">
.accordion {
	display: inline-block;
	text-align: center;

	&__title {
		font-weight: bold;
		font-size: 20px;
		margin-bottom: 20px;
		cursor: pointer;
	}
}
</style>
