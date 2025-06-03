<script lang="ts">
	let { children } = $props();
</script>

<section class="section">
	<div class="container">
		<nav>
			<a href="/">home</a>
			<a data-sveltekit-preload-data="hover" href="/products">products</a>
		</nav>
	</div>
</section>

{@render children()}
