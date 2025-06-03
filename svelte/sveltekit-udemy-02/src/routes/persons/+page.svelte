<script lang="ts">
	import { goto } from '$app/navigation';
	import '../../app.css';
	let { data } = $props();
	let persons = $state(data.persons);

	function onclick(id: number) {
		goto(`/persons/${id}`);
	}
</script>

<h2>{data.title}</h2>
<!-- <h2>this is load from layout {data.user.name}</h2> -->

{#if persons && persons.length > 0}
	<section class="section">
		<div class="container">
			<div class="columns is-multiline is-mobile">
				{#each persons as person (person.id)}
					<div class="column is-6-mobile is-4-tablet is-3-desktop">
						<!-- svelte-ignore a11y_no_static_element_interactions -->
						<!-- svelte-ignore a11y_click_events_have_key_events -->
						<div class="card is-clickable" onclick={() => onclick(person.id)}>
							<div class="card-image">
								<figure class="image">
									<img src={person.image} alt="{person.firstName}_picture" />
								</figure>
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
