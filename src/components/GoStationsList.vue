<template>
	<main>
		<h1>Список станций</h1>

		<GoYandexMap class="stations-map" />

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
	</main>
</template>

<script setup lang="ts">
	import { computed } from 'vue';

	import GoSpoiler from '@/components/GoSpoiler.vue';
	import GoYandexMap from '@/components/YandexMap/GoYandexMap.vue';

	// STORE
	import { useMainStore } from '@/stores/MainStore';
	const mainStore = useMainStore();

	// COMPUTED
	const lines = computed(() => mainStore.lines);
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

	.line__info {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.line__info-color {
		width: 15px;
		height: 15px;
		margin-right: 10px;

		border-radius: 6px;
	}

	.stations-map {
		margin-bottom: 20px;
	}

	.stations {
		list-style: none;
	}

	.station {
		margin-bottom: 4px;
	}
</style>
