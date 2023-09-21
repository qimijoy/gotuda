<template>
	<main>
		<template v-if="searchStore.loading">
			<GoLoader />
		</template>
		<template v-else>
			<h2>Какой-то контент</h2>
			<div v-for="movie of movies" :key="movie.id">
				<span>{{ movie }}</span>
				<button @click="removeMovie(movie.id)">Удалить фильм фильм</button>
			</div>
			<button @click="addMovie">Добавить фильм</button>
		</template>
	</main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useMainStore } from '@/stores/main';
import { useSearchStore } from '@/stores/search';
import GoLoader from '@/components/GoLoader.vue';

const mainStore = useMainStore();
const searchStore = useSearchStore();

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

onMounted(() => {
	searchStore.getPosts();
});
</script>

<style scoped lang="less"></style>
