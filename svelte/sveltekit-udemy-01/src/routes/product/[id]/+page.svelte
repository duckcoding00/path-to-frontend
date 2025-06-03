<script lang="ts">
	import { page } from '$app/state';
	import Button from '$components/Button.svelte';

	let pages: string = $state(page.params.id);

	$effect(() => {
		$inspect(pages);
	});
</script>

<h1>product : {pages}</h1>
<Button />
