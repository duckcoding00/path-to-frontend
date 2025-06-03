<script>
	import { invalidateAll } from '$app/navigation';

	let { data } = $props();

	const set = async () => {
		const resp = await fetch('/api/about', {
			method: 'POST'
		});

		if (resp.ok) {
			await invalidateAll();
		}
	};

	const del = async () => {
		const resp = await fetch('api/about', {
			method: 'DELETE'
		});

		if (resp.ok) {
			await invalidateAll();
		}
	};
</script>

<h1>title is {data.title}</h1>
<h1>About Page</h1>

<button class="button" onclick={set}>set cookies</button>
<button class="button" onclick={del}>del cookies</button>
