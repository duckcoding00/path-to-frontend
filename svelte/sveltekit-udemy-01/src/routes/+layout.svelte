<script>
	import { page } from '$app/state';

	let { children } = $props();
</script>

{#if page.url.pathname.startsWith('/settings')}
	{@render children()}
{:else}
	<nav>
		<a href="/">home</a>
		<a href="/about">about</a>
		<a href="/settings">settings</a>
	</nav>
	{@render children()}
{/if}

<footer>some footer in content</footer>
