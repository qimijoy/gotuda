<template>
	<div class="stations-list">
		<GoButton label="Кнопка" />

		<div class="random-station">
			<span>Ты сегодня покатишь на станцию </span>
			<span class="random-station__choice">{{ randomStation.name }}</span>
		</div>
		<ul>
			<li v-for="line of linesList.lines" :key="line.id" class="line">
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
import { onMounted, reactive, computed } from 'vue';
import GoButton from '@/components/GoButton.vue';

let linesList = reactive({
	lines: [],
});

onMounted(async () => {
	fetch('https://api.hh.ru/metro/1')
		.then((response) => response.json())
		.then((json) => (linesList.lines = json.lines))
		.catch((error) => (linesList = error));
});

const stations = computed(() => {
	return (
		linesList.lines
			.reduce((acc, current) => {
				acc.push(...current.stations);
				return acc;
			}, [])
			.map((station) => ({
				id: station.id.split('.')[1],
				name: station.name,
				latitude: station.lat,
				longitude: station.lng,
			}))
			.sort((a, b) => a.id - b.id) || []
	);
});

const randomStation = computed(() => {
	const ids = stations.value.map((station) => station.id);
	return stations.value.find((station) => station.id === getRandomElementFromArray(ids)) || 'test';
});

function getRandomElementFromArray(array) {
	if (array.length === 0) {
		return null;
	} else {
		const randomNumber = Math.floor(Math.random() * (array.length + 1));
		return array[randomNumber];
	}
}
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
