<script lang="ts">
	import { tick } from 'svelte';

	let randomNumber: number = $state(Math.floor(Math.random() * 10));

	// syncronized -> langsung berubah berdasarkan statenya
	let doubleRandom: number = $derived(randomNumber * 2);

	// not syncronized -> run latter -> update setelah value baru
	// let doubleRandom: number = $state(0);

	// $effect(() => {
	// 	doubleRandom = randomNumber * 2;
	// });

	let history: number[] = $state([]);

	let historyPTag: HTMLParagraphElement;

	// sebelum history dom berubah
	$effect.pre(() => {
		history.length;
		console.log('effect.pre', historyPTag?.innerText);

		tick().then(() => {
			console.log('after tick', historyPTag?.innerText);
		});
	});

	// setelah histiry dom berubah
	$effect(() => {
		history.length;
		console.log('effect', historyPTag.innerText);
	});
</script>

<h2>random number is : {randomNumber}</h2>
<h2>random double number is : {doubleRandom}</h2>
<p bind:this={historyPTag}>history: {history}</p>
<button
	onclick={() => {
		randomNumber = Math.floor(Math.random() * 10);
		console.log(randomNumber, doubleRandom);
		history.push(randomNumber);
	}}>generate</button
>
