<script>
	import { afterNavigate, beforeNavigate, goto } from '$app/navigation';
	import { navigating } from '$app/state';

	// console.log({ navigating });

	// beforeNavigate((navigation) => {
	// 	console.log('before', navigation);
	// });

	// afterNavigate((navigation) => {
	// 	console.log('after', navigation);
	// });
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<a href="/about">about</a>
<button
	onclick={() => {
		goto('/about');
	}}>about</button
>
