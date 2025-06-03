<script lang="ts">
	let count: number = $state(0);
	let speed: number = $state(1000);
	let paused: boolean = $state(false);
	$effect(() => {
		let interval: ReturnType<typeof setInterval>;
		if (!paused) {
			interval = setInterval(() => {
				count++;
			}, speed);
		}

		return () => {
			clearInterval(interval);
		};
	});
</script>

<h1>{count}</h1>

<button
	onclick={() => {
		paused = !paused;
	}}>{paused ? 'play' : 'pause'}</button
>
<button
	onclick={() => {
		speed /= 2;
		console.log(speed);
	}}>speed</button
>

<button
	onclick={() => {
		speed *= 2;
		console.log(speed);
	}}>slow</button
>
