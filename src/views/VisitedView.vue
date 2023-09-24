<template>
	<main>
		<GoHeaderH1>{{ $t('sections.visited.header-text') }}</GoHeaderH1>
	</main>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

import GoHeaderH1 from '@/components/GoHeaderH1.vue';

// STATES
const { t } = useI18n();
</script>
