import { defineStore } from 'pinia';

export const useSearchStore = defineStore('searchStore', {
	state: () => ({
		posts: [],
		loading: false,
	}),
	actions: {
		async getPosts() {
			this.loading = true;

			const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
			const data = await res.json();

			this.posts.push(...data);

			this.loading = false;
		},
	},
});
