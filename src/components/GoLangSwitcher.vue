<template>
	<QButton class="lang-switcher" :disabled="disabled" @click="switchLang">
		<LangSwitcherIcon />
	</QButton>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

import { QButton } from '@qimijoy/vue-storybook';
import LangSwitcherIcon from '@/assets/images/icons/LangSwitcherIcon.svg';

const props = defineProps({
	disabled: {
		type: Boolean,
		default: false,
	},
});

// States
const { locale } = useI18n();

// Functions
const switchLang = () => {
	locale.value = locale.value === 'ru' ? 'en' : 'ru';
	localStorage.setItem('lang', locale.value);
};
</script>
