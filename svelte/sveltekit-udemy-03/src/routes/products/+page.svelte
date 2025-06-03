<script>
	import '../app.css';
	let { data } = $props();
	let products = $state(data.products);
	//console.log('client', products);
</script>

<section class="section">
	<div class="container">
		<p class="title is-size-5 has-text-centered">{data.title}</p>
		<div class="columns is-mobile is-multiline">
			{#if products && products.length > 0}
				{#each products as product (product.id)}
					<div class="column is-6-mobile is-4-tablet is-3-desktop">
						<div class="card">
							<div class="card-image">
								<figure class="image is-1by1">
									<img src={product.thumbnail} alt="icon" />
								</figure>
							</div>
						</div>
					</div>
				{/each}
			{:else}
				<p>loading data...</p>
			{/if}
		</div>
	</div>
</section>
