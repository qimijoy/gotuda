<template>
	<main>
		<GoHeaderH1>{{ $t('sections.goTuda.header-text') }}</GoHeaderH1>

		<p>Тыкаешь на кнопку и получаешь рандомную станцию метро Москвы</p>
		<p>Едешь туда тусить и открывать новые места.</p>
		<p>Кайфуешь</p>

		<div v-if="randomStation" class="random-station">
			<span>Ты сегодня покатишь на станцию </span>
			<span class="random-station__choice">{{ randomStation }}</span>
		</div>

		<!--		<GoButton size="large" @click="rollStation(stations)">Го туда</GoButton>-->
	</main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useMainStore } from '@/stores/MainStore';

import { randomNumber } from '@/utils/functions';

import GoButton from '@/components/controls/GoButton.vue';
import GoHeaderH1 from '@/components/GoHeaderH1.vue';

// STATES
const { t } = useI18n();
const mainStore = useMainStore();
const randomStation = ref('');

// COMPUTED
const lines = computed(() => mainStore.lines);

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
</style>
