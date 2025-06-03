<script>
	import { tippy } from '$lib/actions/tippy.svelte';
	let content = $state('initial text');
</script>

<input type="text" bind:value={content} />

<button
	use:tippy={() => ({
		content,
		animation: 'scale'
	})}>some text</button
>
