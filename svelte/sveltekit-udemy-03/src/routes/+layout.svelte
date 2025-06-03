<script>
	let { children, data } = $props();
</script>

<nav>
	<a href="/">home</a>
	<a href="/about">about</a>
	<a href="/products">products</a>
</nav>

{#if data.user?.name}
	locals value : {data.user?.name}
{/if}
{@render children()}
