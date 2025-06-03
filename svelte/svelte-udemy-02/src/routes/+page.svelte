<script lang="ts">
	import '../main.css';
	import Button from '../component/Button.svelte';
	import IconSearch from '@tabler/icons-svelte/icons/search';
	import IconAdCircle from '@tabler/icons-svelte/icons/ad-circle';

	let button: Button;

	$effect(() => {
		button.focus();
	});
</script>

<Button
	bind:this={button}
	btnType="is-danger"
	onclick={() => {
		alert('some alert');
	}}
	customEvent={() => {
		console.log('left is hovered');
	}}
>
	{#snippet left(isHovered: boolean)}
		{#if isHovered}
			<IconAdCircle />
		{:else}
			<IconSearch />
		{/if}
	{/snippet}
	Some Button
	{#snippet right()}
		<IconAdCircle />
	{/snippet}
</Button>
