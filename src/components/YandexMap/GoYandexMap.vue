<template>
	<!-- Тут лайфхак для совместимости с script setup	-->
	<YandexMap v-if="showMap" :coordinates="coordinates" :detailed-controls="detailedControls" :settings="settings">
		<YandexClusterer :options="{ preset: 'islands#blueClusterIcons' }">
			<YandexMarker
				v-for="station of stations"
				:key="station.id"
				:coordinates="[station.latitude, station.longitude]"
				:marker-id="station.id"
				type="Point"
				:properties="{
					hintContent: station.name,
				}"
				:options="{
					preset: getPreset(station.line), // Устанавливаем цвет метки балуна
				}"
			>
			</YandexMarker>
		</YandexClusterer>
	</YandexMap>

	<div v-else></div>
</template>

<script setup lang="ts">
	import { ref, computed, onMounted } from 'vue';
	import { useMainStore } from '@/stores/MainStore/index.js';

	// import { YandexMap, YandexMarker, YandexClusterer } from "vue-yandex-maps";
	import { YandexMap } from 'vue-yandex-maps';
	import { coordinates, detailedControls, settings, YandexMapPreset2LineId } from './settings';

	const mainStore = useMainStore();

	// STATES
	const showMap = ref(false);
	const stations = computed(() => mainStore.stations);

	onMounted(() => {
		showMap.value = true;
	});

	// FUNCTIONS
	const getPreset = (lineid) => {
		return YandexMapPreset2LineId.find((item) => item.lineId === lineid)?.YandexMapPresetName;
	};
</script>

<style scoped lang="less">
	.yandex-container {
		height: 500px;
	}
</style>
