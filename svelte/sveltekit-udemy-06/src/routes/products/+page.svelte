<script>
	import { page } from '$app/state';

	let search = $derived(page.url.searchParams.get('q'));
	$inspect(search);
</script>

<section class="section">
	<div class="container">
		<h1 class="title is-size-6">Products Page</h1>
		<br />
		<h2 class="subtitle is-size-3">search result {search}</h2>
	</div>
</section>
