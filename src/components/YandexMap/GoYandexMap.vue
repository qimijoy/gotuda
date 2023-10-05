<template>
	<!-- Тут лайфхак для совместимости с script setup	-->
	<YandexMap v-if="showMap" :coordinates="coordinates" :detailed-controls="detailedControls" :settings="settings">
		<YandexMarker
			v-for="station of stations"
			:key="station.id"
			:marker-id="station.id"
			type="Point"
			:coordinates="[station.latitude, station.longitude]"
			:properties="{
				hintContent: station.name,
			}"
			:options="{}"
			@click="onClickMarker(station)"
		>
		</YandexMarker>
	</YandexMap>
</template>

<script setup>
import { ref, computed, onMounted, shallowRef } from 'vue';
import { useMainStore } from '@/stores/MainStore';

import { YandexMap, YandexMarker } from 'vue-yandex-maps';
import { coordinates, detailedControls, settings } from './settings';

const mainStore = useMainStore();

// STATES
const showMap = ref(false);
const map = shallowRef(null);
const stations = computed(() => mainStore.stations);

onMounted(() => {
	showMap.value = true;
});

// FUNCTIONS
const onClickMarker = (station) => {
	console.log(station);
};
</script>

<style scoped lang="less">
.yandex-container {
	height: 500px;
}
</style>
