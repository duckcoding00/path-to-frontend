<script>
	import '../../app.css';
	let { data } = $props();
	let product = $state(data.product);
</script>

<section class="section">
	<div class="container">
		<div class="box">
			<div class="columns is-mobile is-multiline is-vcentered">
				<div class="column is-4-tablet is-12-mobile is-flex is-justify-content-center">
					<figure class="image is-128x128">
						<img src={product.thumbnail} alt="icon-{product.title}" />
					</figure>
				</div>
				<div class="column is-8-tablet is-12-mobile">
					<h1 class="title is-size-5">{product.title}</h1>
					<p>
						<span class="is-size-7 has-text-weight-light">price: </span>
						<span class="is-size-7 has-text-weight-bold">{product.price}</span>
					</p>
					<p class="is-size-6 has-text-left">{product.description}</p>
				</div>
			</div>
		</div>
	</div>
</section>
