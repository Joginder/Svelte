import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Joginder',
		age: 29
	}
});

export default app;