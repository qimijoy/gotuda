<template>
	<main>
		<h2>Какой-то контент</h2>
		<div v-for="movie of movies" :key="movie.id">{{ movie }}</div>
	</main>
</template>

<script setup>
import { computed } from 'vue';
import { useMainStore } from '@/stores/main';

const mainStore = useMainStore();

const movies = computed(() => mainStore.movies);
</script>

<style scoped lang="less"></style>
