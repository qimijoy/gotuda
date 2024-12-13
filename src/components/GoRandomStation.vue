<template>
	<div class="main">
		<h1 class="main__header">Принцип работы</h1>

		<ol class="main__instruction">
			<li class="main__instruction-item">Тыкаешь на кнопку и получаешь рандомную станцию метро Москвы.</li>
			<li class="main__instruction-item">Едешь туда тусить и открывать новые места.</li>
			<li class="main__instruction-item">Кайфуешь</li>
			<li class="main__instruction-item">
				Ты сегодня покатишь на станцию

				<span class="random-station">
					<span v-if="randomStation === ''" class="random-station__press-the-button">...нажмите на кнопку...</span>
					<span v-else class="random-station__choice" :style="{ backgroundColor: randomStation.lineColor }">
						{{ randomStation.name }}
					</span>
				</span>
			</li>
		</ol>
		<div>
			<QButton class="main__button" @click="rollStation(stations)">Го туда</QButton>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';

	import { QButton } from '@qimijoy/vue-storybook';

	import { randomNumber } from '@/utils/functions';

	// STORE
	import { useMainStore } from '@/stores/MainStore';
	const mainStore = useMainStore();

	// STATES
	const randomStation = ref('');

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

<style scoped lang="less">
	@import '@/assets/styles/_sizes';
	@import '@/assets/styles/_breakpoints';

	.main__header {
		margin-bottom: 12px;
	}

	.main__instruction {
		list-style-type: none;
		counter-reset: num;

		margin-left: 20px;
	}

	.main__instruction-item {
		position: relative;

		margin-bottom: 10px;

		&:last-child {
			left: -20px;
		}

		&:not(:last-child):before {
			content: counter(num) '.';
			counter-increment: num;

			position: absolute;
			left: -20px;
		}
	}

	.main__button {
		width: 120px;
		margin-top: 12px;
	}

	.random-station {
		&__press-the-button {
			font-size: 0.8rem;
			font-style: italic;
		}

		&__choice {
			padding: 4px;

			border-radius: 5px;
		}
	}
</style>
