<script>
	let textAreaWidth = $state();
	let textAreaHeight = $state();
</script>

{textAreaWidth}x{textAreaHeight} <br />
<textarea bind:offsetWidth={textAreaWidth} bind:offsetHeight={textAreaHeight}></textarea>
