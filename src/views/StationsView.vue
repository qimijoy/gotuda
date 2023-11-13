<template>
	<main>
		<GoHeaderH1>Список станций</GoHeaderH1>

		<div class="lines">
			<GoSpoiler v-for="line of lines" :key="line.id" :data="line" class="line">
				<template #summary>
					<span class="line__info">
						<span class="line__info-color" :style="{ backgroundColor: `#${line.hex_color}` }" />
						<span class="line__info-name">{{ line.name }} [{{ line.stations.length }}]</span>
					</span>
				</template>
				<template #content>
					<ul class="stations">
						<li v-for="station of line.stations" :key="station.id" class="station">{{ station.name }}</li>
					</ul>
				</template>
			</GoSpoiler>
		</div>

		<GoYandexMap />
	</main>
</template>

<script setup>
import { computed } from 'vue';
import { useMainStore } from '@/stores/MainStore';

import GoHeaderH1 from '@/components/GoHeaderH1.vue';
import GoSpoiler from '@/components/GoSpoiler.vue';
import GoYandexMap from '@/components/YandexMap/GoYandexMap.vue';

const mainStore = useMainStore();

// COMPUTED
const lines = computed(() => mainStore.linesRaw);
</script>

<style lang="less" scoped>
@import '@/assets/styles/_breakpoints';

.lines {
	display: grid;
	grid-template-columns: 1fr;
	gap: 15px 20px;

	margin-bottom: 30px;

	@media @small {
		grid-template-columns: 1fr 1fr;
	}

	@media @large {
		grid-template-columns: 1fr 1fr 1fr;
	}
}

.line {
	&__info {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	&__info-color {
		width: 15px;
		height: 15px;
		margin-right: 10px;

		border-radius: 6px;
	}
}

.stations {
	list-style: none;
}

.station {
	margin-bottom: 4px;
}
</style>
