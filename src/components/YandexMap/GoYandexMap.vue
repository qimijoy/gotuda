<template>
	<yandex-map v-model="map" :settings="settings" width="100%" height="500px" cursor-grab>
		<yandex-map-default-scheme-layer :settings="{ theme: 'dark' }" />
		<yandex-map-default-features-layer />
		<!--		<YandexClusterer :options="{ preset: 'islands#blueClusterIcons' }">-->
		<!--			<YandexMarker-->
		<!--				v-for="station of stations"-->
		<!--				:key="station.id"-->
		<!--				:coordinates="[station.latitude, station.longitude]"-->
		<!--				:marker-id="station.id"-->
		<!--				type="Point"-->
		<!--				:properties="{-->
		<!--					hintContent: station.name,-->
		<!--				}"-->
		<!--				:options="{-->
		<!--					preset: getPreset(station.line), // Устанавливаем цвет метки балуна-->
		<!--				}"-->
		<!--			>-->
		<!--			</YandexMarker>-->
		<!--		</YandexClusterer>-->

		<yandex-map-marker v-for="(marker, index) in markers" :key="index" :settings="marker">
			<div class="marker" />
		</yandex-map-marker>

		<yandex-map-clusterer zoom-on-cluster-click :grid-size="2">
			<yandex-map-marker v-for="(marker, index) in markers" :key="index" :settings="marker">
				<div class="marker" />
			</yandex-map-marker>

			<template #cluster="{ length }">
				<div class="cluster">
					{{ length }}
				</div>
			</template>
		</yandex-map-clusterer>
	</yandex-map>
</template>

<script setup lang="ts">
	import { shallowRef } from 'vue';
	// import { useMainStore } from '@/stores/MainStore/index.js';

	import type { YMap, YMapMarkerProps } from '@yandex/ymaps3-types';
	import {
		YandexMap,
		YandexMapDefaultSchemeLayer,
		YandexMapDefaultFeaturesLayer,
		YandexMapClusterer,
		YandexMapMarker,
	} from 'vue-yandex-maps';
	// import { YandexMapPreset2LineId } from './settings';

	// const mainStore = useMainStore();

	// CONSTANTS
	const settings = {
		location: {
			center: [37.6156, 55.7522],
			zoom: 9,
		},
	};

	const handleClick = (event: MouseEvent) => console.log(event);
	const markers: YMapMarkerProps[] = [
		{
			coordinates: [37.6156, 55.7522],
			onClick: handleClick,
		},
		{
			coordinates: [37.6156, 55.7522],
			onClick: handleClick,
		},
	];

	// STATES
	const map = shallowRef<null | YMap>(null);
	// const stations = computed(() => mainStore.stations);

	// FUNCTIONS
	// const getPreset = (lineid) => {
	// 	return YandexMapPreset2LineId.find((item) => item.lineId === lineid)?.YandexMapPresetName;
	// };
</script>

<style scoped lang="less">
	.marker {
		position: relative;

		width: 20px;
		height: 20px;

		line-height: 20px;
		font-weight: 700;
		text-align: center;

		color: #ffffff;
		background: #ff0000;
		border: 2px solid #ffffff;
		border-radius: 50%;
		box-shadow: 0 0 5px rgb(0 0 0 / 0.5);
	}

	.cluster {
		display: flex;

		width: 50px;
		height: 50px;

		text-align: center;

		color: #ffffff;
		background: #008000;
		border: 2px solid #32cd32;
		border-radius: 100%;
		outline: 2px solid #008000;

		cursor: pointer;
		justify-content: center;
		align-items: center;
	}
</style>
