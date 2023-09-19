<template>
	<div class="lang-switcher">
		<GoButton :label="$t('switchLang')" @click="switchLang" icon="fa-solid fa-globe" />
	</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

import GoButton from '@/components/controls/GoButton.vue';

// States
const { t, locale } = useI18n();

// Functions
const switchLang = () => {
	locale.value = locale.value === 'ru' ? 'en' : 'ru';
	localStorage.setItem('lang', locale.value);
};
</script>
