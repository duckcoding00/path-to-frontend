<script>
	import { generate } from '../utils/generator-random';
	import Notification from './notification.svelte';

	let notifications = $state.raw(generate(3));

	$effect(() => {
		$inspect('notification length count:', notifications.length);
	});
</script>

<section class="section">
	<div class="container">
		<button
			class="button is-primary is-small mb-2"
			onclick={() => {
				notifications = generate(4);
			}}>refresh</button
		>
		{#if notifications.length > 0}
			{#each notifications as notification, i (notification.id)}
				<Notification
					{notification}
					onremove={(id) => {
						// notifications.splice(i, 1); semisal menggunakan state

						// jika menggunakan state raw
						notifications = notifications.filter((n) => n.id !== id);
					}}
				/>
			{/each}
		{:else}
			<p class="is-size-6">No notifications available</p>
		{/if}
	</div>
</section>

<!-- menggunakan snippet -->
<!-- {#each notifications as notification (notification.id)}
	{@render notif(notification)}
{/each}


{#snippet notif(notifications)}
	{@const objectDate = new Date(notifications.date)}
	<h1>{notifications.title}</h1>
	<p>{notifications.body}</p>
	<time datetime={objectDate.toISOString()}>{objectDate.toLocaleDateString()}</time>
{/snippet} -->
