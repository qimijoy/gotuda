<template>
	<main>
		<h1>Stations</h1>
		<div class="stations-list">
			<GoButton size="large" @click="rollStation(stations)">Го туда</GoButton>

			<!--		<div v-if="randomStation" class="random-station">-->
			<!--			<span>Ты сегодня покатишь на станцию </span>-->
			<!--			<span class="random-station__choice">{{ randomStation }}</span>-->
			<!--		</div>-->
			<!--		<ul>-->
			<!--			<li v-for="line of lines" :key="line.id" class="line">-->
			<!--				<span class="line__info">-->
			<!--					<span class="line__info-color" :style="{ backgroundColor: `#${line.hex_color}` }" />-->
			<!--					<span class="line__info-name">{{ line.name }} ветка</span>-->
			<!--				</span>-->

			<!--				<ul class="line__stations">-->
			<!--					<li v-for="station of line.stations" :key="station.id" class="main__line-station">-->
			<!--						<p>{{ station.name }}</p>-->
			<!--					</li>-->
			<!--				</ul>-->
			<!--			</li>-->
			<!--		</ul>-->
		</div>
	</main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

import { useMainStore } from '@/stores/MainStore';

// STATES
const mainStore = useMainStore();
const randomStation = ref('');

onMounted(() => {
	mainStore.getStations();
});

import GoButton from '@/components/controls/GoButton.vue';
import { randomNumber } from '@/utils/functions';

// Computed
const lines = computed(() => mainStore.state.lines);
const stations = computed(() => mainStore.getters.stations);

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
.random-station {
	&__choice {
		background-color: #38ad9e;
	}
}

.line {
	list-style: none;
	&__info {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	&__info-color {
		width: 15px;
		height: 15px;
		margin-right: 5px;
	}

	&__stations {
		padding-inline-start: 20px;
	}
}
</style>
