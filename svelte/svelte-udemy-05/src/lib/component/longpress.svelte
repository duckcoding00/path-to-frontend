<script>
	import { longpress } from '$lib/actions/longpress.svelte';
	let show = $state(true);
	let duration = $state(3000);
</script>

<label>
	<input type="checkbox" bind:checked={show} />
	show
</label>

<label>
	<input type="range" bind:value={duration} step={100} max={4000} />
	{duration}ms
</label>

{#if show}
	<button
		use:longpress={() => ({ duration })}
		onlongpress={() => {
			console.log('long pressed');
		}}
	>
		press
	</button>
{/if}
