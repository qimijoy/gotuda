import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSearchStore = defineStore('searchStore', () => {
	const posts = ref([]);
	const loading = ref(false);

	const getPosts = async () => {
		loading.value = true;

		const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
		posts.value = await res.json();

		loading.value = false;
	};

	return {
		posts,
		loading,
		getPosts,
	};
});
