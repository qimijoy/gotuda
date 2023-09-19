<template>
	<div class="progress-circle">
		<span class="progress-circle__percent">{{ percentString }}</span>
		<svg width="120" height="120" viewBox="0 0 120 120" class="progress-circle__svg">
			<circle cx="60" cy="60" r="54" fill="none" stroke="#A5AFFB" stroke-width="12" />
			<circle
				class="progress-circle__line"
				:style="[{ 'stroke-dashoffset': `calc(100 - ${percent})` }]"
				cx="60"
				cy="60"
				r="54"
				fill="none"
				stroke="#6979F8"
				stroke-width="12"
				pathLength="100"
			/>
		</svg>
	</div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	percent: {
		type: Number,
		required: true,
	},
});

const percentString = computed(() => `${props.percent}%`);
</script>

<style scoped lang="less">
@import '@/styles/colors';

.progress-circle {
	position: relative;
	width: 120px;
	height: 120px;

	&__svg {
		transform: rotate(-90deg);
	}

	&__percent {
		display: flex;
		align-items: center;
		justify-content: center;

		position: absolute;
		left: 0;
		top: 0;

		width: 100%;
		height: 100%;

		font-weight: bold;
		color: @primary;
	}

	&__line {
		stroke-dasharray: 100;
		transition: 0.5s;
	}
}
</style>
