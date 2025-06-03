<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types.js';
	import { page } from '$app/state';
	import type { Page } from '@sveltejs/kit';
	import { invalidateAll } from '$app/navigation';

	interface props {
		children: Snippet;
		data: LayoutData;
	}
	let { children, data }: props = $props();

	let pages: Page = page;
	// console.log('data page', pages.data);
</script>

<!-- <h1>from layout load {data.user.name}</h1> -->
<svelte:head>
	<title>Website {pages.data.title ? ` | ${pages.data.title}` : ''}</title>
	{#if pages.data.description}
		<meta name="description" content={pages.data.description} />
	{/if}
</svelte:head>
<nav>
	<a href="/">home</a>
	<a href="/persons">persons</a>
	<a href="/products">products</a>

	{#if data.user}
		<button
			class="button"
			onclick={async () => {
				const result = await fetch('/api/logout', {
					method: 'POST'
				});

				if (result.ok) {
					await invalidateAll();
				}
			}}>logout</button
		>
	{:else}
		<a href="/login">login</a>
	{/if}
	<!-- <a href="/login">login</a> -->
</nav>

{@render children()}
