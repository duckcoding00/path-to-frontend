<script>
	import '../app.css';

	let { data } = $props();
	let products = $state(data.products);
</script>

<h1>product page</h1>

<section class="section">
	<div class="container">
		{#if products && products.length > 0}
			<div class="columns is-mobile is-multiline is-vcentered">
				{#each products as product (product.id)}
					<div class="column is-6-mobile is-4-tablet is-3-desktop">
						<div class="card">
							<div class="card-image">
								<figure class="image is-1by1">
									<img src={product.thumbnail} alt="" />
								</figure>
							</div>
							<div class="card-content">
								<a
									data-sveltekit-preload-data="hover"
									class="is-size-5 has-text-black"
									href="/products/{product.id}">{product.title}</a
								>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<p>loading data....</p>
		{/if}
	</div>
</section>
