<script lang="ts">
	import { goto } from '$app/navigation';

	let { data } = $props();
	let products = $state(data.products.products);

	//console.log(products);
	function onclick(id: number) {
		goto(`/products/${id}`);
	}
</script>

<h2>{data.title}</h2>
<h2>this is load from layout {data.products.title}</h2>

{#if products && products.length > 0}
	<section class="section">
		<div class="container">
			<div class="columns is-multiline is-mobile">
				{#each products as product (product.id)}
					<div class="column is-6-mobile is-4-tablet is-3-desktop">
						<!-- svelte-ignore a11y_no_static_element_interactions -->
						<!-- svelte-ignore a11y_click_events_have_key_events -->
						<div class="card is-clickable" onclick={() => onclick(product.id)}>
							<div class="card-image">
								<figure class="image">
									<img src={product.thumbnail} alt="{product.title}_picture" />
								</figure>
							</div>
							<div class="card-content">
								<p>{product.title}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
{:else}
	<p>Loading data...</p>
{/if}
