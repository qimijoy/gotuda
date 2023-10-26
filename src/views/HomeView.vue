<template>
	<main>
		<GoHeaderH1>{{ $t('sections.goTuda.header-text') }}</GoHeaderH1>

		<div class="gotuda__action">
			<ol class="gotuda__instruction">
				<li class="gotuda__instruction-item">{{ $t('sections.goTuda.instruction-1') }}</li>
				<li class="gotuda__instruction-item">{{ $t('sections.goTuda.instruction-2') }}</li>
				<li class="gotuda__instruction-item">{{ $t('sections.goTuda.instruction-3') }}</li>
				<li class="gotuda__instruction-item">
					{{ $t('sections.goTuda.result') }}

					<span v-if="randomStation === ''" class="random-station__press-the-button">
						{{ $t('sections.goTuda.press-the-button') }}
					</span>
					<span v-else class="random-station__choice" :style="{ backgroundColor: randomStation.lineColor }">
						{{ randomStation.name }}
					</span>
				</li>
			</ol>
			<div>
				<QButton class="gotuda__button" @click="rollStation(stations)">Го туда</QButton>
			</div>
		</div>
	</main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useMainStore } from '@/stores/MainStore';

import { randomNumber } from '@/utils/functions';

import { QButton } from '@qimijoy/vue-storybook';

import GoHeaderH1 from '@/components/GoHeaderH1.vue';

// STATES
const { t } = useI18n();
const mainStore = useMainStore();
const randomStation = ref({});

// COMPUTED
const stations = computed(() => mainStore.stations);

// FUNCTIONS
const rollStation = (stations) => {
	const length = stations.length;
	if (length === 0) {
		return null;
	} else {
		randomStation.value = stations[randomNumber(0, length - 1)];
	}
};
</script>

<style lang="less" scoped>
@import '@/assets/styles/_breakpoints';

.gotuda {
	&__action {
		display: grid;
		grid-template-columns: 1fr;
		gap: 15px 20px;

		@media @medium {
			grid-template-columns: 2fr 1fr;
		}
	}
	&__instruction {
		list-style-type: none;
		counter-reset: num;
		margin-left: 20px;
	}

	&__instruction-item {
		position: relative;
		margin-bottom: 10px;

		&:not(:last-child)::before {
			content: counter(num) '.';
			counter-increment: num;
			position: absolute;
			left: -20px;
		}

		&:last-child {
			left: -20px;
		}
	}

	&__button {
		width: 100%;
	}
}

.random-station {
	&__press-the-button {
		font-style: italic;
		font-size: 0.8rem;
	}

	&__choice {
		border-radius: 5px;
		padding: 4px;
	}
}
</style>
