<script lang="ts">
	import '../../../app.css';
	let { data } = $props();
	let person = $state(data.person);
</script>

<section class="section">
	<div class="container">
		<div class="box">
			<p>{person.firstName} {person.lastName}</p>
		</div>
	</div>
</section>
