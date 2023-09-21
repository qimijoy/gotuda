<template>
	<main>
		<h2>Какой-то контент</h2>
		<div v-for="movie of movies" :key="movie.id">
			<span>{{ movie }}</span>
			<button @click="removeMovie(movie.id)">Удалить фильм фильм</button>
		</div>
		<button @click="addMovie">Добавить фильм</button>
	</main>
</template>

<script setup>
import { computed } from 'vue';
import { useMainStore } from '@/stores/main';

const mainStore = useMainStore();

const movieExample = () => ({
	id: Math.random(),
	original_title: 'Test1',
	overview: 'Test 2',
	poster_path: '/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg',
	release_date: '2022-03-01',
	isWatched: false,
});

const movies = computed(() => mainStore.movies);

const addMovie = () => {
	mainStore.addMovie(movieExample());
};

const removeMovie = (id) => {
	mainStore.deleteMovie(id);
};
</script>

<style scoped lang="less"></style>
