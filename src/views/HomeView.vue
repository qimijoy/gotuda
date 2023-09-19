<template>
	<div>
		<h1>{{ $t('goTuda.header') }}</h1>
		<p>Тыкаешь на кнопку и получаешь рандомную станцию метро Москвы</p>
		<p>Едешь туда тусить и открывать новые места.</p>
		<p>Кайфуешь</p>
	</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

// States
const { t } = useI18n();
</script>

<style scoped lang="less"></style>
