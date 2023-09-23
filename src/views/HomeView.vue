<template>
	<div>
		<h1>{{ $t('goTuda.header') }}</h1>
		<p>Тыкаешь на кнопку и получаешь рандомную станцию метро Москвы</p>
		<p>Едешь туда тусить и открывать новые места.</p>
		<p>Кайфуешь</p>

		<StationsList />
	</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import StationsList from '@/components/StationsList.vue';
import { onMounted } from 'vue';

import { useMainStore } from '@/stores/MainStore';

// Data
const mainStore = useMainStore();

// States
const { t } = useI18n();

onMounted(() => {
	mainStore.getStations();
});
</script>

<style scoped lang="less"></style>
