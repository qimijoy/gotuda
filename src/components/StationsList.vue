<template>
	<div class="stations-list">
		<GoButton label="Го туда" size="large" @click="rollStation(stations)" />

		<div v-if="randomStation" class="random-station">
			<span>Ты сегодня покатишь на станцию </span>
			<span class="random-station__choice">{{ randomStation }}</span>
		</div>
		<ul>
			<li v-for="line of lines" :key="line.id" class="line">
				<span class="line__info">
					<span class="line__info-name">{{ line.name }} ветка</span>
					<span class="line__info-color" :style="{ backgroundColor: `#${line.hex_color}` }" />
				</span>

				<ul class="line__stations">
					<li v-for="station of line.stations" :key="station.id" class="main__line-station">
						<p>{{ station.name }}</p>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

import GoButton from '@/components/controls/GoButton.vue';
import { randomNumber } from '@/utils/functions';

// Data
const store = useStore();
const randomStation = ref('');

// Computed
const lines = computed(() => store.state.lines);
const stations = computed(() => store.getters.stations);

// Functions
const rollStation = (stations) => {
	if (stations.length === 0) {
		return null;
	} else {
		randomStation.value = stations[randomNumber(0, stations.length - 1)].name;
	}
};
</script>

<style scoped lang="less">
.random-station {
	&__choice {
		background-color: #38ad9e;
	}
}

.line {
	&__info {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	&__info-name {
		margin-right: 5px;
	}

	&__info-color {
		width: 15px;
		height: 15px;
	}

	&__stations {
		padding-inline-start: 20px;
	}
}
</style>
