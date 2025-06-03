<script lang="ts">
	let show = $state(false);

	function onclick() {
		show = !show;
	}
</script>

<button {onclick}>hidden</button>

{#if show}
	hidden text
{/if}
