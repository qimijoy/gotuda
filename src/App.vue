<template>
	<GoHeader></GoHeader>
	<RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router';
import GoHeader from './components/GoHeader/GoHeader.vue';
</script>
