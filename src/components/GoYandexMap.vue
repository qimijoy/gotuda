<template>
	<!-- Тут лайфхак для совместимости с script setup	-->
	<component
		:is="map"
		:coordinates="MOSCOW_COORDS"
		:settings="{
			apiKey: '6270f71f-202f-40fc-8e1b-b584202f37a1',
			lang: 'ru_RU',
			mode: 'debug',
			version: '2.1',
		}"
		class="yandex-map"
	>
		<YandexMarker
			marker-id="1"
			marker-type="placemark"
			:coordinates="[55.745113, 37.864052]"
			hint-content="Hint content 1"
			:balloon="{ header: 'header', body: 'body', footer: 'footer' }"
			:icon="{ color: 'green', glyph: 'cinema' }"
			cluster-name="1"
		>
		</YandexMarker>
	</component>
</template>

<script setup>
import { onMounted, shallowRef } from 'vue';
import { YandexMap, YandexMarker } from 'vue-yandex-maps';

const MOSCOW_COORDS = [55.7522, 37.6156];

// STATES
const map = shallowRef(null);

onMounted(() => {
	map.value = YandexMap;
});
</script>

<style scoped lang="less">
.yandex-map {
	height: 600px;
}
</style>
