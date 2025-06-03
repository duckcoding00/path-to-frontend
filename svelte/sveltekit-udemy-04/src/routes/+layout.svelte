<script>
	let { children } = $props();
</script>

<nav>
	<a href="/">home</a>
	<a href="/products">products</a>
</nav>

{@render children()}
