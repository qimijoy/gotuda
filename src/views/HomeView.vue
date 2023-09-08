<template>
	<main class="main">
		<p>ID: {{ postId }}</p>
		<p>userID: {{ userId }}</p>
		<p>title: {{ postTitle }}</p>
		<p>ID: {{ postBody }}</p>
	</main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const postData = ref({});

onMounted(async () => {
	fetch('https://jsonplaceholder.typicode.com/posts/1')
		.then((response) => response.json())
		.then((json) => (postData.value = json))
		.catch((error) => (postData.value = error));
});

const postId = computed(() => postData.value.id);
const userId = computed(() => postData.value.userId);
const postTitle = computed(() => postData.value.title);
const postBody = computed(() => postData.value.body);
</script>

<style class="scoped">
.main {
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
}
</style>
