<template>
	<main class="main">
		<ul class="main__lines">
			<li v-for="line of metroData" :key="line.id" class="line">
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
	</main>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const metroData = ref({});

onMounted(async () => {
	fetch('https://api.hh.ru/metro/1')
		.then((response) => response.json())
		.then(({ lines }) => (metroData.value = lines))
		.catch((error) => (metroData.value = error));
});
</script>

<style class="scoped" lang="less">
.main {
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
