<script>
	let { children } = $props();
</script>

<nav>
	<a href="/">main</a>
	<a href="/settings/general">general</a>
	<a href="/settings/profile">profile</a>
</nav>

{@render children()}
