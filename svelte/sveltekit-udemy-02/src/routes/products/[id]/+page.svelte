<script>
	let { data } = $props();
	let product = $state(data.product);
</script>

<section class="section">
	<div class="container">
		<div class="box">
			<p>{product.title}</p>
			<p>comments</p>
			{#await data.nested.comments}
				Loading...
			{:then data}
				{#each data.comments as comment}
					<p>{comment.body}</p>
				{/each}
			{/await}
		</div>
	</div>
</section>
