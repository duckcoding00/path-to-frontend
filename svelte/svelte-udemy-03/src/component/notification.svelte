<script lang="ts">
	let {
		notification,
		onremove
	}: {
		notification: {
			id: string;
			title: string;
			body: string;
			date: number;
		};
		onremove?: (id: string) => void;
	} = $props();

	const { title, body, date, id } = notification;
	const objectDate = new Date(date);
</script>

<div class="box is-shadowless custom-box">
	<h1 class="title is-size-5">{title}</h1>
	<p class="is-size-6 has-text-left">{body}</p>
	<div class="columns is-mobile">
		<div class="column">
			<time class="is-size-7" datetime={objectDate.toISOString()}>{objectDate.toDateString()}</time>
		</div>
		<div class="column has-text-right">
			<button
				class="button is-danger is-small"
				onclick={() => {
					onremove?.(id);
				}}>remove</button
			>
		</div>
	</div>
</div>

<style>
	.custom-box {
		border: 1px solid black;
	}
</style>
