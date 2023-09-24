<template>
	<main>
		<GoHeaderH1>{{ $t('sections.stations.header-text') }}</GoHeaderH1>
		<div class="stations-list">
			<ul>
				<li v-for="line of lines" :key="line.id" class="line">
					<span class="line__info">
						<span class="line__info-color" :style="{ backgroundColor: `#${line.hex_color}` }" />
						<span class="line__info-name">{{ line.name }} ветка</span>
					</span>

					<ul class="line__stations">
						<li v-for="station of line.stations" :key="station.id" class="main__line-station">
							<p>{{ station.name }}</p>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</main>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useMainStore } from '@/stores/MainStore';

import GoHeaderH1 from '@/components/GoHeaderH1.vue';

// STATES
const mainStore = useMainStore();
const { t } = useI18n();

// COMPUTED
const lines = computed(() => mainStore.lines);
</script>

<style lang="less" scoped>
.line {
	list-style: none;

	&__info {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	&__info-color {
		width: 15px;
		height: 15px;
		margin-right: 5px;
	}

	&__stations {
		padding-inline-start: 20px;
	}
}
</style>
