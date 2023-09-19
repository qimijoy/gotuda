<template>
	<div class="progress" :style="[{ width }]">
		<div class="progress__percent">{{ percentString }}</div>

		<div class="progress-bar">
			<div class="progress-bar__filled" :style="[{ width: percentString }]" />
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	width: {
		type: String,
		default: '300px',
	},
	percent: {
		type: Number,
		required: true,
	},
});

const percentString = computed(() => `${props.percent}%`);
</script>

<style scoped lang="less">
@import '@/styles/colors';

.progress {
	&__percent {
		text-align: center;
		color: @primary;
		font-weight: bold;
		user-select: none;
		margin-bottom: 10px;
	}
}

.progress-bar {
	height: 15px;
	border-radius: 4px;
	background-color: @primary-hover;

	&__filled {
		height: 100%;
		border-radius: 4px;
		background-color: @primary;
		transition: 0.5s;
	}
}
</style>
